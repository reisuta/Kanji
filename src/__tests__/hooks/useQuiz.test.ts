import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useQuiz } from '../../hooks/useQuiz'
import { Question } from '@/types/question'

describe('useQuiz', () => {
  const mockQuestions: Question[] = [
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
    },
    {
      id: '3',
      type: 'meaning',
      question: 'テスト問題3',
      choices: ['選択肢1', '選択肢2', '選択肢3', '選択肢4'],
      correctAnswer: ['選択肢3', '選択肢4'], // 複数正解
      difficulty: 7
    }
  ]

  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2024-01-01T00:00:00.000Z'))
  })

  it('初期状態が正しく設定される', () => {
    const { result } = renderHook(() => useQuiz(mockQuestions))

    expect(result.current.quizState.currentQuestionIndex).toBe(0)
    expect(result.current.quizState.questions).toEqual(mockQuestions)
    expect(result.current.quizState.userAnswers).toEqual([])
    expect(result.current.quizState.score).toBe(0)
    expect(result.current.quizState.isCompleted).toBe(false)
    expect(result.current.currentQuestion).toEqual(mockQuestions[0])
  })

  it('正解を選択するとスコアが増加する', () => {
    const { result } = renderHook(() => useQuiz(mockQuestions))

    act(() => {
      result.current.submitAnswer('選択肢1')
    })

    expect(result.current.quizState.score).toBe(1)
    expect(result.current.quizState.currentQuestionIndex).toBe(1)
    expect(result.current.quizState.userAnswers).toEqual(['選択肢1'])
  })

  it('不正解を選択してもスコアは増加しない', () => {
    const { result } = renderHook(() => useQuiz(mockQuestions))

    act(() => {
      result.current.submitAnswer('選択肢2')
    })

    expect(result.current.quizState.score).toBe(0)
    expect(result.current.quizState.currentQuestionIndex).toBe(1)
    expect(result.current.quizState.userAnswers).toEqual(['選択肢2'])
  })

  it('複数正解の問題で正解を選択できる', () => {
    const { result } = renderHook(() => useQuiz(mockQuestions))

    act(() => {
      result.current.submitAnswer('選択肢1') // 問題1: 正解
    })
    expect(result.current.quizState.score).toBe(1)

    act(() => {
      result.current.submitAnswer('選択肢2') // 問題2: 正解
    })
    expect(result.current.quizState.score).toBe(2)

    act(() => {
      result.current.submitAnswer('選択肢3') // 問題3: 正解（複数正解の1つ）
    })

    expect(result.current.quizState.score).toBe(3)
    expect(result.current.quizState.isCompleted).toBe(true)
  })

  it('最後の問題に回答するとクイズが完了する', () => {
    const { result } = renderHook(() => useQuiz(mockQuestions))

    act(() => {
      result.current.submitAnswer('選択肢1')
      result.current.submitAnswer('選択肢2')
      result.current.submitAnswer('選択肢3')
    })

    expect(result.current.quizState.isCompleted).toBe(true)
  })

  it('クイズをリセットできる', () => {
    const { result } = renderHook(() => useQuiz(mockQuestions))

    act(() => {
      result.current.submitAnswer('選択肢1')
      result.current.submitAnswer('選択肢2')
      result.current.resetQuiz()
    })

    expect(result.current.quizState.currentQuestionIndex).toBe(0)
    expect(result.current.quizState.userAnswers).toEqual([])
    expect(result.current.quizState.score).toBe(0)
    expect(result.current.quizState.isCompleted).toBe(false)
  })

  it('次の問題に移動できる', () => {
    const { result } = renderHook(() => useQuiz(mockQuestions))

    act(() => {
      result.current.goToNextQuestion()
    })

    expect(result.current.quizState.currentQuestionIndex).toBe(1)
    expect(result.current.currentQuestion).toEqual(mockQuestions[1])
  })

  it('前の問題に戻れる', () => {
    const { result } = renderHook(() => useQuiz(mockQuestions))

    act(() => {
      result.current.goToNextQuestion() // 問題2に移動
    })
    expect(result.current.quizState.currentQuestionIndex).toBe(1)

    act(() => {
      result.current.goToPreviousQuestion() // 問題1に戻る
    })

    expect(result.current.quizState.currentQuestionIndex).toBe(0)
    expect(result.current.currentQuestion).toEqual(mockQuestions[0])
  })

  it('最初の問題では前に戻れない', () => {
    const { result } = renderHook(() => useQuiz(mockQuestions))

    act(() => {
      result.current.goToPreviousQuestion()
    })

    expect(result.current.quizState.currentQuestionIndex).toBe(0)
  })

  it('最後の問題では次に進めない', () => {
    const { result } = renderHook(() => useQuiz(mockQuestions))

    act(() => {
      result.current.goToNextQuestion() // 問題2へ
      result.current.goToNextQuestion() // 問題3へ（最後）
    })
    expect(result.current.quizState.currentQuestionIndex).toBe(2)

    act(() => {
      result.current.goToNextQuestion() // 最後の問題で次へ
    })

    expect(result.current.quizState.currentQuestionIndex).toBe(2)
  })

  it('結果を正しく計算できる', () => {
    const { result } = renderHook(() => useQuiz(mockQuestions))

    // 10秒後に回答
    act(() => {
      vi.advanceTimersByTime(10000)
      result.current.submitAnswer('選択肢1') // 正解
    })
    
    act(() => {
      result.current.submitAnswer('選択肢3') // 不正解
    })
    
    act(() => {
      result.current.submitAnswer('選択肢4') // 正解（複数正解の1つ）
    })

    const quizResult = result.current.getResult()

    expect(quizResult.score).toBe(67) // 2/3 = 66.67% → 67%
    expect(quizResult.totalQuestions).toBe(3)
    expect(quizResult.correctAnswers).toBe(2)
    expect(quizResult.timeTaken).toBe(10)
  })
})