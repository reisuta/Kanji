export type QuestionType = 'reading' | 'writing' | 'meaning' | 'idiom' | 'fourCharacter';

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  choices?: string[];
  correctAnswer: string;
  explanation?: string;
  difficulty: number;
}

export interface QuizState {
  currentQuestionIndex: number;
  questions: Question[];
  userAnswers: string[];
  score: number;
  isCompleted: boolean;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeTaken: number;
}