import type { JSX } from 'react';
import type { QuizResult } from '@/types/question';

export function make(props: {
  result: QuizResult;
  onRestart: () => void;
  onShowExplanation: () => void;
}): JSX.Element;
