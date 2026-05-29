import type { Question } from '@/types/question';

export function typeColor(type_: string): string;

export function correctAnswerToText(correctAnswer: Question['correctAnswer']): string;

export function matchesFilter(
  q: Question,
  typeFilter: string,
  difficultyFilter: string,
  searchTerm: string,
): boolean;

export function filterQuestions(
  questions: ReadonlyArray<Question>,
  typeFilter: string,
  difficultyFilter: string,
  searchTerm: string,
): Question[];

export type FilterOption = { readonly value: string; readonly label: string };

export const typeOptions: ReadonlyArray<FilterOption>;
export const difficultyOptions: ReadonlyArray<FilterOption>;
