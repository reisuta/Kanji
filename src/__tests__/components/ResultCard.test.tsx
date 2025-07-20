import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ResultCard from '../../components/ResultCard'
import { QuizResult } from '@/types/question'

describe('ResultCard', () => {
  const mockResult: QuizResult = {
    score: 80,
    correctAnswers: 4,
    totalQuestions: 5,
    timeTaken: 125
  }

  const defaultProps = {
    result: mockResult,
    onRestart: vi.fn(),
    onShowExplanation: vi.fn()
  }

  it('タイトルが表示される', () => {
    render(<ResultCard {...defaultProps} />)
    expect(screen.getByText('地獄からの帰還')).toBeInTheDocument()
  })

  it('スコアが正しく表示される', () => {
    render(<ResultCard {...defaultProps} />)
    expect(screen.getByText('80')).toBeInTheDocument()
    expect(screen.getByText('%')).toBeInTheDocument()
  })

  it('正解数が正しく表示される', () => {
    render(<ResultCard {...defaultProps} />)
    expect(screen.getByText('4')).toBeInTheDocument()
    expect(screen.getByText('/5')).toBeInTheDocument()
  })

  it('所要時間が正しくフォーマットされて表示される', () => {
    render(<ResultCard {...defaultProps} />)
    expect(screen.getByText('2:05')).toBeInTheDocument()
  })

  it('グレードAが正しく表示される', () => {
    render(<ResultCard {...defaultProps} />)
    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('達人の域')).toBeInTheDocument()
  })

  it('スコアメッセージが表示される', () => {
    render(<ResultCard {...defaultProps} />)
    expect(screen.getByText('闇の知識に染まりし者よ、邪悪なる力が汝に宿る')).toBeInTheDocument()
  })

  it('再挑戦ボタンをクリックするとonRestartが呼ばれる', () => {
    const mockOnRestart = vi.fn()
    render(<ResultCard {...defaultProps} onRestart={mockOnRestart} />)
    
    fireEvent.click(screen.getByText('再び深淵へ堕ちよ'))
    expect(mockOnRestart).toHaveBeenCalledTimes(1)
  })

  it('解説ボタンをクリックするとonShowExplanationが呼ばれる', () => {
    const mockOnShowExplanation = vi.fn()
    render(<ResultCard {...defaultProps} onShowExplanation={mockOnShowExplanation} />)
    
    fireEvent.click(screen.getByText('悪魔の解説'))
    expect(mockOnShowExplanation).toHaveBeenCalledTimes(1)
  })

  it('異なるグレードで正しいスタイルが適用される', () => {
    const grades = [
      { score: 95, grade: 'S', title: '至高の境地' },
      { score: 85, grade: 'A', title: '達人の域' },
      { score: 75, grade: 'B', title: '熟練者' },
      { score: 65, grade: 'C', title: '学習者' },
      { score: 55, grade: 'D', title: '修行中' }
    ]

    grades.forEach(({ score, grade, title }) => {
      const { unmount } = render(
        <ResultCard {...defaultProps} result={{ ...mockResult, score }} />
      )
      expect(screen.getByText(grade)).toBeInTheDocument()
      expect(screen.getByText(title)).toBeInTheDocument()
      unmount()
    })
  })

  it('冥界への帰還ボタンをクリックするとonRestartが呼ばれる', () => {
    const mockOnRestart = vi.fn()
    render(<ResultCard {...defaultProps} onRestart={mockOnRestart} />)
    
    fireEvent.click(screen.getByText('冥界への帰還'))
    expect(mockOnRestart).toHaveBeenCalledTimes(1)
  })
})