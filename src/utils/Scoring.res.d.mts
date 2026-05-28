export function calculateScore(
  userAnswers: readonly string[],
  questions: ReadonlyArray<{ correctAnswer: string | string[] }>
): number;

export function getScoreGrade(score: number): string;

export function getScoreMessage(score: number): string;

export function formatTime(seconds: number): string;
