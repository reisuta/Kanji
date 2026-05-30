import type { JSX } from 'react';
import type { Question } from '@/types/question';

export function make(props: {
  questions: Question[];
  userAnswers: string[];
  isOpen: boolean;
  onClose: () => void;
}): JSX.Element;
