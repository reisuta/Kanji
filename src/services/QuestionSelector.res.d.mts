import type { Question, QuestionType } from '@/types/question';

export type QuestionSelectorT = {
  readonly questions: ReadonlyArray<Question>;
  readonly byId: Record<string, Question>;
  readonly byType: Record<string, ReadonlyArray<Question>>;
  readonly byDifficulty: Record<string, ReadonlyArray<Question>>;
};

export function build(questions: ReadonlyArray<Question>): QuestionSelectorT;
export function getById(selector: QuestionSelectorT, id: string): Question | undefined;
export function getByType(selector: QuestionSelectorT, type_: QuestionType): Question[];
export function getByDifficultyExact(
  selector: QuestionSelectorT,
  difficulty: number,
): Question[];
export function getByDifficultyRange(
  selector: QuestionSelectorT,
  min: number,
  max: number,
): Question[];
export function getAll(selector: QuestionSelectorT): Question[];
export function totalCount(selector: QuestionSelectorT): number;
export function availableTypes(selector: QuestionSelectorT): QuestionType[];
export function availableDifficulties(selector: QuestionSelectorT): number[];
