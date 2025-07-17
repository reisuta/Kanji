import { useState, useCallback } from 'react';
import { Question, QuizState, QuizResult } from '@/types/question';

export const useQuiz = (questions: Question[]) => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    questions,
    userAnswers: [],
    score: 0,
    isCompleted: false,
  });

  const [startTime] = useState<number>(Date.now());

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  const submitAnswer = useCallback((answer: string) => {
    setQuizState(prev => {
      const newUserAnswers = [...prev.userAnswers, answer];
      const isCorrect = Array.isArray(currentQuestion.correctAnswer)
        ? currentQuestion.correctAnswer.includes(answer)
        : answer === currentQuestion.correctAnswer;
      const newScore = prev.score + (isCorrect ? 1 : 0);
      const nextIndex = prev.currentQuestionIndex + 1;
      const isCompleted = nextIndex >= prev.questions.length;

      return {
        ...prev,
        userAnswers: newUserAnswers,
        score: newScore,
        currentQuestionIndex: nextIndex,
        isCompleted,
      };
    });
  }, [currentQuestion?.correctAnswer]);

  const getResult = useCallback((): QuizResult => {
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    return {
      score: Math.round((quizState.score / quizState.questions.length) * 100),
      totalQuestions: quizState.questions.length,
      correctAnswers: quizState.score,
      timeTaken,
    };
  }, [quizState.score, quizState.questions.length, startTime]);

  const resetQuiz = useCallback(() => {
    setQuizState({
      currentQuestionIndex: 0,
      questions,
      userAnswers: [],
      score: 0,
      isCompleted: false,
    });
  }, [questions]);

  const goToNextQuestion = useCallback(() => {
    if (quizState.currentQuestionIndex < quizState.questions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
    }
  }, [quizState.currentQuestionIndex, quizState.questions.length]);

  const goToPreviousQuestion = useCallback(() => {
    if (quizState.currentQuestionIndex > 0) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1,
      }));
    }
  }, [quizState.currentQuestionIndex]);

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
