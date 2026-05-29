import { useState, useCallback } from 'react';
import { Question, QuizState, QuizResult } from '@/types/question';
import {
  init,
  submitAnswer as submitAnswerPure,
  goToNext,
  goToPrevious,
  computeResult,
} from './QuizState.res.mjs';

export const useQuiz = (questions: Question[]) => {
  const [quizState, setQuizState] = useState<QuizState>(
    () => init(questions) as QuizState,
  );

  const [startTime] = useState<number>(Date.now());

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  const submitAnswer = useCallback(
    (answer: string) => {
      setQuizState(prev => submitAnswerPure(prev, currentQuestion.correctAnswer, answer) as QuizState);
    },
    [currentQuestion?.correctAnswer],
  );

  const getResult = useCallback(
    (): QuizResult => computeResult(quizState, startTime, Date.now()),
    [quizState, startTime],
  );

  const resetQuiz = useCallback(() => {
    setQuizState(init(questions) as QuizState);
  }, [questions]);

  const goToNextQuestion = useCallback(() => {
    setQuizState(prev => goToNext(prev) as QuizState);
  }, []);

  const goToPreviousQuestion = useCallback(() => {
    setQuizState(prev => goToPrevious(prev) as QuizState);
  }, []);

  return {
    quizState,
    currentQuestion,
    submitAnswer,
    getResult,
    resetQuiz,
    goToNextQuestion,
    goToPreviousQuestion,
  };
};
