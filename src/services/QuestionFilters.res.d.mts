import type { Question } from '@/types/question';

export function shuffleArray<T>(arr: readonly T[]): T[];

export function filterByDifficultyExact(
  questions: readonly Question[],
  difficulty: number
): Question[];

export function filterByDifficultyRange(
  questions: readonly Question[],
  min: number,
  max: number
): Question[];

export function filterByTypes(
  questions: readonly Question[],
  types: readonly string[]
): Question[];

export function excludeByIds(
  questions: readonly Question[],
  ids: readonly string[]
): Question[];

export function computeStats(questions: readonly Question[]): {
  totalQuestions: number;
  byType: Record<Question['type'], number>;
  byDifficulty: Record<number, number>;
  difficultyRange: { min: number; max: number };
};
