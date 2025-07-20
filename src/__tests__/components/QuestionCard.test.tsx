import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import QuestionCard from '../../components/QuestionCard'
import { Question } from '@/types/question'

describe('QuestionCard', () => {
  const mockQuestion: Question = {
    id: '1',
    type: 'reading',
    question: 'テスト問題',
    choices: ['選択肢1', '選択肢2', '選択肢3', '選択肢4'],
    correctAnswer: '選択肢1',
    difficulty: 5
  }

  const defaultProps = {
    question: mockQuestion,
    currentIndex: 0,
    totalQuestions: 5,
    onAnswer: vi.fn()
  }

  it('問題タイプのラベルが正しく表示される', () => {
    render(<QuestionCard {...defaultProps} />)
    expect(screen.getByText('読み')).toBeInTheDocument()
  })

  it('問題番号と総問題数が表示される', () => {
    render(<QuestionCard {...defaultProps} />)
    expect(screen.getByText('第 1 問 / 5')).toBeInTheDocument()
  })

  it('問題文が表示される', () => {
    render(<QuestionCard {...defaultProps} />)
    expect(screen.getByText('テスト問題')).toBeInTheDocument()
  })

  it('すべての選択肢が表示される', () => {
    render(<QuestionCard {...defaultProps} />)
    expect(screen.getByText('選択肢1')).toBeInTheDocument()
    expect(screen.getByText('選択肢2')).toBeInTheDocument()
    expect(screen.getByText('選択肢3')).toBeInTheDocument()
    expect(screen.getByText('選択肢4')).toBeInTheDocument()
  })

  it('選択肢をクリックするとonAnswerが呼ばれる', () => {
    const mockOnAnswer = vi.fn()
    render(<QuestionCard {...defaultProps} onAnswer={mockOnAnswer} />)
    
    fireEvent.click(screen.getByText('選択肢1'))
    expect(mockOnAnswer).toHaveBeenCalledWith('選択肢1')
  })

  it('選択された回答がハイライトされる', () => {
    render(<QuestionCard {...defaultProps} selectedAnswer="選択肢2" />)
    
    const selectedButton = screen.getByText('選択肢2').closest('button')
    expect(selectedButton).toHaveClass('from-gray-600/60')
  })

  it('進捗バーが正しく表示される', () => {
    render(<QuestionCard {...defaultProps} currentIndex={2} totalQuestions={5} />)
    
    const progressBar = screen.getByText('第 3 問 / 5')
    expect(progressBar).toBeInTheDocument()
  })

  it('難易度が正しく表示される', () => {
    render(<QuestionCard {...defaultProps} />)
    expect(screen.getByText('5/10')).toBeInTheDocument()
  })

  it('選択肢がない場合メッセージが表示される', () => {
    const questionWithoutChoices = { ...mockQuestion, choices: undefined }
    render(<QuestionCard {...defaultProps} question={questionWithoutChoices} />)
    
    expect(screen.getByText('選択肢が設定されていません')).toBeInTheDocument()
  })

  it('異なる問題タイプのラベルが正しく表示される', () => {
    const types = [
      { type: 'writing', label: '書き' },
      { type: 'meaning', label: '意味' },
      { type: 'idiom', label: '慣用句' },
      { type: 'fourCharacter', label: '四字熟語' }
    ]

    types.forEach(({ type, label }) => {
      const { unmount } = render(
        <QuestionCard {...defaultProps} question={{ ...mockQuestion, type: type as Question['type'] }} />
      )
      expect(screen.getByText(label)).toBeInTheDocument()
      unmount()
    })
  })
})