import { describe, it, expect, beforeEach } from 'vitest'
import { QuestionSelector } from '../../services/questionSelector'
import { Question } from '@/types/question'

describe('QuestionSelector', () => {
  const mockQuestions: Question[] = [
    {
      id: '1',
      type: 'reading',
      question: '読み問題1',
      choices: ['選択肢1', '選択肢2', '選択肢3', '選択肢4'],
      correctAnswer: '選択肢1',
      difficulty: 5
    },
    {
      id: '2',
      type: 'writing',
      question: '書き問題1',
      choices: ['選択肢1', '選択肢2', '選択肢3', '選択肢4'],
      correctAnswer: '選択肢2',
      difficulty: 6
    },
    {
      id: '3',
      type: 'meaning',
      question: '意味問題1',
      choices: ['選択肢1', '選択肢2', '選択肢3', '選択肢4'],
      correctAnswer: '選択肢3',
      difficulty: 7
    },
    {
      id: '4',
      type: 'reading',
      question: '読み問題2',
      choices: ['選択肢1', '選択肢2', '選択肢3', '選択肢4'],
      correctAnswer: '選択肢4',
      difficulty: 8
    },
    {
      id: '5',
      type: 'idiom',
      question: '慣用句問題1',
      choices: ['選択肢1', '選択肢2', '選択肢3', '選択肢4'],
      correctAnswer: '選択肢1',
      difficulty: 9
    }
  ]

  let selector: QuestionSelector

  beforeEach(() => {
    selector = new QuestionSelector(mockQuestions)
  })

  describe('getRandomQuestions', () => {
    it('指定した数の問題を選択できる', () => {
      const questions = selector.getRandomQuestions({ count: 3 })
      expect(questions).toHaveLength(3)
    })

    it('デフォルトで5問選択される', () => {
      const questions = selector.getRandomQuestions()
      expect(questions).toHaveLength(5)
    })

    it('特定の難易度の問題のみ選択できる', () => {
      const questions = selector.getRandomQuestions({ difficulty: 5, count: 10 })
      expect(questions).toHaveLength(1)
      expect(questions[0].difficulty).toBe(5)
    })

    it('難易度の範囲で問題を選択できる', () => {
      const questions = selector.getRandomQuestions({ 
        difficulty: { min: 6, max: 8 },
        count: 10
      })
      expect(questions.length).toBeLessThanOrEqual(3)
      questions.forEach(q => {
        expect(q.difficulty).toBeGreaterThanOrEqual(6)
        expect(q.difficulty).toBeLessThanOrEqual(8)
      })
    })

    it('特定のタイプの問題のみ選択できる', () => {
      const questions = selector.getRandomQuestions({ 
        types: ['reading'],
        count: 10
      })
      expect(questions).toHaveLength(2)
      questions.forEach(q => {
        expect(q.type).toBe('reading')
      })
    })

    it('特定のIDを除外して選択できる', () => {
      const questions = selector.getRandomQuestions({ 
        excludeIds: ['1', '3'],
        count: 10
      })
      expect(questions).toHaveLength(3)
      questions.forEach(q => {
        expect(['1', '3']).not.toContain(q.id)
      })
    })

    it('shuffleオプションで問題をシャッフルできる', () => {
      const questions1 = selector.getRandomQuestions({ shuffle: false })
      const questions2 = selector.getRandomQuestions({ shuffle: false })
      
      expect(questions1.map(q => q.id)).toEqual(questions2.map(q => q.id))
    })
  })

  describe('getStats', () => {
    it('統計情報を正しく取得できる', () => {
      const stats = selector.getStats()
      
      expect(stats.totalQuestions).toBe(5)
      expect(stats.byType.reading).toBe(2)
      expect(stats.byType.writing).toBe(1)
      expect(stats.byType.meaning).toBe(1)
      expect(stats.byType.idiom).toBe(1)
      expect(stats.byDifficulty[5]).toBe(1)
      expect(stats.byDifficulty[9]).toBe(1)
      expect(stats.difficultyRange.min).toBe(5)
      expect(stats.difficultyRange.max).toBe(9)
    })
  })

  describe('getQuestionById', () => {
    it('IDで問題を取得できる', () => {
      const question = selector.getQuestionById('1')
      expect(question?.id).toBe('1')
      expect(question?.question).toBe('読み問題1')
    })

    it('存在しないIDはundefinedを返す', () => {
      const question = selector.getQuestionById('999')
      expect(question).toBeUndefined()
    })
  })

  describe('getQuestionsByType', () => {
    it('タイプ別に問題を取得できる', () => {
      const questions = selector.getQuestionsByType('reading')
      expect(questions).toHaveLength(2)
      questions.forEach(q => {
        expect(q.type).toBe('reading')
      })
    })

    it('存在しないタイプは空配列を返す', () => {
      const questions = selector.getQuestionsByType('nonexistent' as Question['type'])
      expect(questions).toEqual([])
    })
  })

  describe('getQuestionsByDifficulty', () => {
    it('難易度別に問題を取得できる', () => {
      const questions = selector.getQuestionsByDifficulty(5)
      expect(questions).toHaveLength(1)
      expect(questions[0].difficulty).toBe(5)
    })

    it('範囲指定で難易度別に問題を取得できる', () => {
      const questions = selector.getQuestionsByDifficulty({ min: 6, max: 8 })
      expect(questions).toHaveLength(3)
      questions.forEach(q => {
        expect(q.difficulty).toBeGreaterThanOrEqual(6)
        expect(q.difficulty).toBeLessThanOrEqual(8)
      })
    })
  })
})