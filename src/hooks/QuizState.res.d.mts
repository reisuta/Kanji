import type { Question, QuizResult } from '@/types/question';

export type State<Q> = {
  readonly currentQuestionIndex: number;
  readonly questions: ReadonlyArray<Q>;
  readonly userAnswers: ReadonlyArray<string>;
  readonly score: number;
  readonly isCompleted: boolean;
};

export function init<Q>(questions: ReadonlyArray<Q>): State<Q>;
export function isAnswerCorrect(
  userAnswer: string,
  correctAnswer: Question['correctAnswer'],
): boolean;
export function submitAnswer<Q>(
  state: State<Q>,
  correctAnswer: Question['correctAnswer'],
  answer: string,
): State<Q>;
export function goToNext<Q>(state: State<Q>): State<Q>;
export function goToPrevious<Q>(state: State<Q>): State<Q>;
export function computeResult<Q>(
  state: State<Q>,
  startTimeMs: number,
  nowMs: number,
): QuizResult;
