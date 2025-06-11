'use client';

import { useState } from 'react';
import { useQuiz } from '@/hooks/useQuiz';
import { getRandomQuestions } from '@/data/questions';
import StartScreen from '@/components/StartScreen';
import QuestionCard from '@/components/QuestionCard';
import ResultCard from '@/components/ResultCard';
import ThreeBackground from '@/components/ThreeBackground';
import ExplanationModal from '@/components/ExplanationModal';

export default function Home() {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'finished'>('start');
  const [questions] = useState(() => getRandomQuestions(5));
  const [showExplanation, setShowExplanation] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const {
    quizState,
    currentQuestion,
    submitAnswer,
    getResult,
    resetQuiz,
  } = useQuiz(questions);

  const handleStart = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setGameState('playing');
      setIsTransitioning(false);
    }, 600);
  };

  const handleAnswer = (answer: string) => {
    submitAnswer(answer);
    setTimeout(() => {
      if (quizState.currentQuestionIndex + 1 >= questions.length) {
        setIsTransitioning(true);
        setTimeout(() => {
          setGameState('finished');
          setIsTransitioning(false);
        }, 600);
      }
    }, 1000);
  };

  const handleRestart = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      resetQuiz();
      setGameState('start');
      setShowExplanation(false);
      setIsTransitioning(false);
    }, 600);
  };

  const handleShowExplanation = () => {
    setShowExplanation(true);
  };

  const handleCloseExplanation = () => {
    setShowExplanation(false);
  };

  return (
    <div className={`min-h-screen py-8 px-4 relative ${gameState === 'playing' ? 'white-creepy-theme' : 'bg-gradient-to-br from-gray-900 via-black to-gray-800'}`}>
      <ThreeBackground />
      <div className="container mx-auto relative z-10">
        {isTransitioning && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="text-red-500 font-horror-title text-2xl animate-intense-flicker">
              魂の移行中...
            </div>
          </div>
        )}
        
        {gameState === 'start' && !isTransitioning && (
          <div className="animate-fade-in-up">
            <StartScreen onStart={handleStart} />
          </div>
        )}
        
        {gameState === 'playing' && currentQuestion && !isTransitioning && (
          <QuestionCard
            question={currentQuestion}
            currentIndex={quizState.currentQuestionIndex}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
          />
        )}
        
        {gameState === 'finished' && !isTransitioning && (
          <div className="animate-fade-in-up">
            <ResultCard
              result={getResult()}
              onRestart={handleRestart}
              onShowExplanation={handleShowExplanation}
            />
          </div>
        )}

        <ExplanationModal
          questions={questions}
          userAnswers={quizState.userAnswers}
          isOpen={showExplanation}
          onClose={handleCloseExplanation}
        />
      </div>
    </div>
  );
}
