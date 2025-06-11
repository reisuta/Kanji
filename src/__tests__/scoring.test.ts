import { describe, it, expect } from 'vitest';
import { calculateScore, getScoreGrade, getScoreMessage, formatTime } from '@/utils/scoring';
import { Question } from '@/types/question';

describe('Scoring Utils', () => {
  const mockQuestions: Question[] = [
    {
      id: '1',
      type: 'reading',
      question: 'Test question 1',
      correctAnswer: 'answer1',
      difficulty: 5
    },
    {
      id: '2',
      type: 'writing',
      question: 'Test question 2',
      correctAnswer: 'answer2',
      difficulty: 6
    },
    {
      id: '3',
      type: 'meaning',
      question: 'Test question 3',
      correctAnswer: 'answer3',
      difficulty: 7
    }
  ];

  describe('calculateScore', () => {
    it('should calculate correct score for all correct answers', () => {
      const userAnswers = ['answer1', 'answer2', 'answer3'];
      const score = calculateScore(userAnswers, mockQuestions);
      expect(score).toBe(100);
    });

    it('should calculate correct score for partial correct answers', () => {
      const userAnswers = ['answer1', 'wrong', 'answer3'];
      const score = calculateScore(userAnswers, mockQuestions);
      expect(score).toBe(67);
    });

    it('should calculate correct score for all wrong answers', () => {
      const userAnswers = ['wrong1', 'wrong2', 'wrong3'];
      const score = calculateScore(userAnswers, mockQuestions);
      expect(score).toBe(0);
    });
  });

  describe('getScoreGrade', () => {
    it('should return S for scores 90 and above', () => {
      expect(getScoreGrade(90)).toBe('S');
      expect(getScoreGrade(95)).toBe('S');
      expect(getScoreGrade(100)).toBe('S');
    });

    it('should return A for scores 80-89', () => {
      expect(getScoreGrade(80)).toBe('A');
      expect(getScoreGrade(85)).toBe('A');
      expect(getScoreGrade(89)).toBe('A');
    });

    it('should return B for scores 70-79', () => {
      expect(getScoreGrade(70)).toBe('B');
      expect(getScoreGrade(75)).toBe('B');
      expect(getScoreGrade(79)).toBe('B');
    });

    it('should return C for scores 60-69', () => {
      expect(getScoreGrade(60)).toBe('C');
      expect(getScoreGrade(65)).toBe('C');
      expect(getScoreGrade(69)).toBe('C');
    });

    it('should return D for scores below 60', () => {
      expect(getScoreGrade(0)).toBe('D');
      expect(getScoreGrade(30)).toBe('D');
      expect(getScoreGrade(59)).toBe('D');
    });
  });

  describe('getScoreMessage', () => {
    it('should return appropriate message for each grade', () => {
      expect(getScoreMessage(95)).toContain('素晴らしい');
      expect(getScoreMessage(85)).toContain('とても良い');
      expect(getScoreMessage(75)).toContain('良い成績');
      expect(getScoreMessage(65)).toContain('合格ライン');
      expect(getScoreMessage(50)).toContain('もう一度挑戦');
    });
  });

  describe('formatTime', () => {
    it('should format seconds correctly', () => {
      expect(formatTime(0)).toBe('0:00');
      expect(formatTime(30)).toBe('0:30');
      expect(formatTime(60)).toBe('1:00');
      expect(formatTime(90)).toBe('1:30');
      expect(formatTime(3661)).toBe('61:01');
    });
  });
});