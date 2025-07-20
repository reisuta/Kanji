import { render, screen, fireEvent, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Home from '../../app/page'

// setTimeoutをモック
let timeoutCallbacks: Array<() => void> = []
vi.stubGlobal('setTimeout', (callback: () => void) => {
  timeoutCallbacks.push(callback)
  return 1
})

// モックコンポーネント
vi.mock('@/components/StartScreen', () => ({
  default: ({ onStart }: { onStart: () => void }) => (
    <div data-testid="start-screen">
      <button onClick={onStart}>ゲーム開始</button>
    </div>
  )
}))

vi.mock('@/components/QuestionCard', () => ({
  default: ({ onAnswer, currentIndex, totalQuestions }: { 
    onAnswer: (answer: string) => void, 
    currentIndex: number, 
    totalQuestions: number 
  }) => (
    <div data-testid="question-card">
      <div data-testid="question-info">{currentIndex + 1} / {totalQuestions}</div>
      <button onClick={() => onAnswer('答え')}>回答する</button>
    </div>
  )
}))

vi.mock('@/components/ResultCard', () => ({
  default: ({ onRestart, onShowExplanation }: { onRestart: () => void; onShowExplanation: () => void }) => (
    <div data-testid="result-card">
      <button onClick={onRestart}>もう一度</button>
      <button onClick={onShowExplanation}>解説を見る</button>
    </div>
  )
}))

vi.mock('@/components/ThreeBackground', () => ({
  default: () => <div data-testid="three-background">背景</div>
}))

vi.mock('@/components/ExplanationModal', () => ({
  default: ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => 
    isOpen ? (
      <div data-testid="explanation-modal">
        <button onClick={onClose}>閉じる</button>
      </div>
    ) : null
}))

// questionSelectorのモック
const mockQuestions = [
  {
    id: '1',
    type: 'reading',
    question: 'テスト問題1',
    choices: ['選択肢1', '選択肢2', '選択肢3', '選択肢4'],
    correctAnswer: '選択肢1',
    difficulty: 5
  },
  {
    id: '2',
    type: 'writing',
    question: 'テスト問題2',
    choices: ['選択肢1', '選択肢2', '選択肢3', '選択肢4'],
    correctAnswer: '選択肢2',
    difficulty: 6
  }
]

vi.mock('@/services/questionSelector', () => ({
  defaultSelector: {
    getRandomQuestions: vi.fn(() => mockQuestions)
  }
}))

// useQuizフックのモック
const mockSubmitAnswer = vi.fn()
const mockResetQuiz = vi.fn()
const mockGetResult = vi.fn(() => ({
  score: 80,
  correctAnswers: 1,
  totalQuestions: 2,
  timeTaken: 60
}))

let mockQuizState = {
  currentQuestionIndex: 0,
  questions: mockQuestions,
  userAnswers: [],
  score: 0,
  isCompleted: false
}

let mockCurrentQuestion = mockQuestions[0]

vi.mock('@/hooks/useQuiz', () => ({
  useQuiz: vi.fn(() => ({
    quizState: mockQuizState,
    currentQuestion: mockCurrentQuestion,
    submitAnswer: mockSubmitAnswer,
    getResult: mockGetResult,
    resetQuiz: mockResetQuiz
  }))
}))

describe('Home', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    timeoutCallbacks = []
    
    // モック状態をリセット
    mockQuizState = {
      currentQuestionIndex: 0,
      questions: mockQuestions,
      userAnswers: [],
      score: 0,
      isCompleted: false
    }
    mockCurrentQuestion = mockQuestions[0]
  })

  it('初期状態でスタート画面が表示される', () => {
    render(<Home />)
    
    expect(screen.getByTestId('start-screen')).toBeInTheDocument()
    expect(screen.getByTestId('three-background')).toBeInTheDocument()
    expect(screen.getByText('ゲーム開始')).toBeInTheDocument()
  })

  it('ゲーム開始ボタンをクリックするとトランジションが開始される', () => {
    render(<Home />)
    
    const startButton = screen.getByText('ゲーム開始')
    
    act(() => {
      fireEvent.click(startButton)
    })
    
    expect(screen.getByText('魂の移行中...')).toBeInTheDocument()
  })

  it('トランジション後にプレイ画面が表示される', () => {
    render(<Home />)
    
    const startButton = screen.getByText('ゲーム開始')
    
    act(() => {
      fireEvent.click(startButton)
      // setTimeoutコールバックを実行
      timeoutCallbacks.forEach(callback => callback())
    })
    
    expect(screen.getByTestId('question-card')).toBeInTheDocument()
  })

  it('プレイ画面で回答ボタンをクリックするとsubmitAnswerが呼ばれる', () => {
    render(<Home />)
    
    // ゲーム開始してプレイ画面に遷移
    act(() => {
      fireEvent.click(screen.getByText('ゲーム開始'))
      timeoutCallbacks.forEach(callback => callback())
    })
    
    // 回答
    act(() => {
      fireEvent.click(screen.getByText('回答する'))
    })
    
    expect(mockSubmitAnswer).toHaveBeenCalledWith('答え')
  })

  it('適切なCSSクラスが適用される', () => {
    const { container } = render(<Home />)
    
    const mainDiv = container.firstChild as HTMLElement
    expect(mainDiv).toHaveClass('min-h-screen', 'py-8', 'px-4', 'relative')
    expect(mainDiv).toHaveClass('bg-gradient-to-br', 'from-gray-900', 'via-black', 'to-gray-800')
  })

  it('プレイ中は適切なテーマクラスが適用される', () => {
    const { container } = render(<Home />)
    
    act(() => {
      fireEvent.click(screen.getByText('ゲーム開始'))
      timeoutCallbacks.forEach(callback => callback())
    })
    
    const mainDiv = container.firstChild as HTMLElement
    expect(mainDiv).toHaveClass('white-creepy-theme')
  })

  it('ThreeBackgroundコンポーネントが常に表示される', () => {
    render(<Home />)
    expect(screen.getByTestId('three-background')).toBeInTheDocument()
  })

  it('問題の進行状況が正しく表示される', () => {
    render(<Home />)
    
    act(() => {
      fireEvent.click(screen.getByText('ゲーム開始'))
      timeoutCallbacks.forEach(callback => callback())
    })
    
    expect(screen.getByTestId('question-info')).toHaveTextContent('1 / 2')
  })

  it('ExplanationModalは初期状態では表示されない', () => {
    render(<Home />)
    
    expect(screen.queryByTestId('explanation-modal')).not.toBeInTheDocument()
  })

  it('useStateフックが正しく初期化される', () => {
    render(<Home />)
    
    // 初期状態がstart画面であることを確認
    expect(screen.getByTestId('start-screen')).toBeInTheDocument()
    expect(screen.queryByTestId('question-card')).not.toBeInTheDocument()
    expect(screen.queryByTestId('result-card')).not.toBeInTheDocument()
  })

  it('コンポーネントが正しくレンダリングされる', () => {
    const { container } = render(<Home />)
    
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveClass('min-h-screen')
  })

  it('ゲーム状態の管理が適切に行われる', () => {
    render(<Home />)
    
    // 初期状態確認
    expect(screen.getByTestId('start-screen')).toBeInTheDocument()
    
    // ゲーム開始後の状態確認
    act(() => {
      fireEvent.click(screen.getByText('ゲーム開始'))
      timeoutCallbacks.forEach(callback => callback())
    })
    
    expect(screen.queryByTestId('start-screen')).not.toBeInTheDocument()
    expect(screen.getByTestId('question-card')).toBeInTheDocument()
  })

  it('トランジション状態が正しく管理される', () => {
    render(<Home />)
    
    // トランジション開始前
    expect(screen.queryByText('魂の移行中...')).not.toBeInTheDocument()
    
    // トランジション開始
    act(() => {
      fireEvent.click(screen.getByText('ゲーム開始'))
    })
    expect(screen.getByText('魂の移行中...')).toBeInTheDocument()
    
    // トランジション終了
    act(() => {
      timeoutCallbacks.forEach(callback => callback())
    })
    expect(screen.queryByText('魂の移行中...')).not.toBeInTheDocument()
  })

  it('問題データが正しく渡される', () => {
    render(<Home />)
    
    act(() => {
      fireEvent.click(screen.getByText('ゲーム開始'))
      timeoutCallbacks.forEach(callback => callback())
    })
    
    // QuestionCardコンポーネントが正しく表示されることで、問題データが渡されていることを確認
    expect(screen.getByTestId('question-card')).toBeInTheDocument()
    expect(screen.getByTestId('question-info')).toBeInTheDocument()
  })
})