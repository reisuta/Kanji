import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ExplanationModal from '../../components/ExplanationModal'
import { Question } from '@/types/question'

describe('ExplanationModal', () => {
  const mockQuestions: Question[] = [
    {
      id: '1',
      type: 'reading',
      question: '読み問題',
      choices: ['正解', '不正解1', '不正解2', '不正解3'],
      correctAnswer: '正解',
      difficulty: 5,
      explanation: '読み方の説明'
    },
    {
      id: '2',
      type: 'writing',
      question: '書き問題',
      choices: ['選択肢1', '選択肢2', '選択肢3', '選択肢4'],
      correctAnswer: '選択肢2',
      difficulty: 6,
      explanation: '書き方の説明'
    }
  ]

  const defaultProps = {
    questions: mockQuestions,
    userAnswers: ['正解', '選択肢1'], // 1問正解、1問不正解
    isOpen: true,
    onClose: vi.fn()
  }

  it('モーダルが開いているときに表示される', () => {
    render(<ExplanationModal {...defaultProps} />)
    expect(screen.getByText('地獄の解説書')).toBeInTheDocument()
  })

  it('モーダルが閉じているときは何も表示されない', () => {
    const { container } = render(<ExplanationModal {...defaultProps} isOpen={false} />)
    expect(container.firstChild).toBeNull()
  })

  it('閉じるボタンをクリックするとonCloseが呼ばれる', () => {
    const mockOnClose = vi.fn()
    render(<ExplanationModal {...defaultProps} onClose={mockOnClose} />)
    
    fireEvent.click(screen.getByText('×'))
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it('各問題が表示される', () => {
    render(<ExplanationModal {...defaultProps} />)
    
    expect(screen.getByText('読み問題')).toBeInTheDocument()
    expect(screen.getByText('書き問題')).toBeInTheDocument()
  })

  it('問題番号が正しく表示される', () => {
    render(<ExplanationModal {...defaultProps} />)
    
    expect(screen.getByText('呪い 1')).toBeInTheDocument()
    expect(screen.getByText('呪い 2')).toBeInTheDocument()
  })

  it('問題タイプのラベルが正しく表示される', () => {
    render(<ExplanationModal {...defaultProps} />)
    
    expect(screen.getByText('読み')).toBeInTheDocument()
    expect(screen.getByText('書き')).toBeInTheDocument()
  })

  it('正解・不正解が正しく判定される', () => {
    render(<ExplanationModal {...defaultProps} />)
    
    // 正解の場合
    expect(screen.getByText('魂の勝利')).toBeInTheDocument()
    
    // 不正解の場合
    expect(screen.getByText('地獄への堕落')).toBeInTheDocument()
  })

  it('ユーザーの回答と正解が表示される', () => {
    render(<ExplanationModal {...defaultProps} />)
    
    expect(screen.getAllByText('✓ 正解')[0]).toBeInTheDocument()
    expect(screen.getByText('× あなたの回答')).toBeInTheDocument()
  })

  it('説明文が表示される', () => {
    render(<ExplanationModal {...defaultProps} />)
    
    expect(screen.getByText('読み方の説明')).toBeInTheDocument()
    expect(screen.getByText('書き方の説明')).toBeInTheDocument()
  })

  it('複数正解の問題も正しく判定される', () => {
    const questionsWithMultipleAnswers: Question[] = [
      {
        id: '3',
        type: 'meaning',
        question: '複数正解問題',
        choices: ['選択肢1', '選択肢2', '選択肢3', '選択肢4'],
        correctAnswer: ['選択肢1', '選択肢2'],
        difficulty: 7
      }
    ]

    render(
      <ExplanationModal
        questions={questionsWithMultipleAnswers}
        userAnswers={['選択肢1']}
        isOpen={true}
        onClose={vi.fn()}
      />
    )

    expect(screen.getByText('魂の勝利')).toBeInTheDocument()
  })

  it('難易度が表示される', () => {
    render(<ExplanationModal {...defaultProps} />)
    
    // 難易度インジケーターが表示されているか確認
    const difficultyContainers = screen.getAllByText('呪い 1').map(el => el.closest('div'))
    expect(difficultyContainers.length).toBeGreaterThan(0)
  })

  it('スクロール可能なコンテナで表示される', () => {
    const { container } = render(<ExplanationModal {...defaultProps} />)
    
    const scrollContainer = container.querySelector('.max-h-\\[90vh\\]')
    expect(scrollContainer).toHaveClass('overflow-y-auto')
  })
})