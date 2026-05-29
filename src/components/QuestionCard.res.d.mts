import type { JSX } from 'react';
import type { Question } from '@/types/question';

export function make(props: {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (answer: string) => void;
  selectedAnswer?: string;
}): JSX.Element;
