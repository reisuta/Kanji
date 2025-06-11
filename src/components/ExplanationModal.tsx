'use client';

import { Question } from '@/types/question';

interface ExplanationModalProps {
  questions: Question[];
  userAnswers: string[];
  isOpen: boolean;
  onClose: () => void;
}

export default function ExplanationModal({
  questions,
  userAnswers,
  isOpen,
  onClose,
}: ExplanationModalProps) {
  if (!isOpen) return null;

  const getQuestionTypeLabel = (type: string) => {
    switch (type) {
      case 'reading': return '読み';
      case 'writing': return '書き';
      case 'meaning': return '意味';
      case 'idiom': return '慣用句';
      case 'fourCharacter': return '四字熟語';
      default: return type;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-red-900/50 animate-creepy-pulse">
        <div className="sticky top-0 bg-gradient-to-r from-gray-900 to-black p-6 border-b border-red-900/50">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-horror-title text-red-400 tracking-wide animate-creepy-glow">
              地獄の解説書
            </h2>
            <button
              onClick={onClose}
              className="text-red-400 hover:text-red-300 transition-colors text-2xl font-horror-title bg-gray-800 hover:bg-red-900/20 w-10 h-10 rounded-full flex items-center justify-center border border-red-900/50 animate-creepy-pulse"
            >
              ×
            </button>
          </div>
          <div className="mt-2 h-0.5 bg-gradient-to-r from-red-600 via-black to-red-600 rounded-full animate-blood-drip"></div>
        </div>

        <div className="p-6 space-y-8">
          {questions.map((question, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;

            return (
              <div
                key={question.id}
                className={`bg-gradient-to-br ${
                  isCorrect 
                    ? 'from-green-900/30 to-green-800/20 border-green-700/50' 
                    : 'from-red-900/30 to-red-800/20 border-red-700/50'
                } border rounded-xl p-6 backdrop-blur-sm`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="bg-red-700 text-red-200 text-sm font-horror-text px-3 py-1 rounded-full animate-pulse">
                      呪い {index + 1}
                    </span>
                    <span className="bg-gray-800 text-red-300 text-sm font-horror-text px-3 py-1 rounded-full border border-red-900/50">
                      {getQuestionTypeLabel(question.type)}
                    </span>
                    <div className="flex space-x-1">
                      {Array.from({ length: question.difficulty }, (_, i) => (
                        <div key={i} className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      ))}
                      {Array.from({ length: 10 - question.difficulty }, (_, i) => (
                        <div key={i} className="w-2 h-2 bg-gray-600 rounded-full" />
                      ))}
                    </div>
                  </div>
                  <div className={`text-lg font-horror-subtitle ${isCorrect ? 'text-green-400' : 'text-red-400'} animate-creepy-glow`}>
                    {isCorrect ? '魂の勝利' : '地獄への堕落'}
                  </div>
                </div>

                <h3 className="text-xl font-horror-text text-red-300 mb-4 leading-relaxed animate-creepy-glow">
                  {question.question}
                </h3>

                <div className="grid gap-3 mb-4">
                  {question.choices?.map((choice, choiceIndex) => {
                    const isUserChoice = choice === userAnswer;
                    const isCorrectChoice = choice === question.correctAnswer;
                    let choiceClass = 'bg-gray-800 border-gray-600 text-gray-300';
                    
                    if (isCorrectChoice) {
                      choiceClass = 'bg-green-800/40 border-green-500 text-green-200';
                    } else if (isUserChoice && !isCorrect) {
                      choiceClass = 'bg-red-800/40 border-red-500 text-red-200';
                    }

                    return (
                      <div
                        key={choiceIndex}
                        className={`p-3 rounded-lg border-2 ${choiceClass} transition-all`}
                      >
                        <div className="flex items-center">
                          <span className="inline-block w-6 h-6 bg-gray-700 text-gray-300 rounded-full text-center leading-6 mr-3 text-sm font-bold">
                            {String.fromCharCode(65 + choiceIndex)}
                          </span>
                          {choice}
                          {isCorrectChoice && (
                            <span className="ml-auto text-green-400 font-bold">✓ 正解</span>
                          )}
                          {isUserChoice && !isCorrect && (
                            <span className="ml-auto text-red-400 font-bold">× あなたの回答</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {question.explanation && (
                  <div className="bg-gray-800/60 rounded-lg p-4 border-l-4 border-amber-500">
                    <h4 className="text-amber-200 font-bold mb-2 flex items-center">
                      <span className="w-4 h-4 bg-amber-500 rounded-full mr-2"></span>
                      解説
                    </h4>
                    <p className="text-gray-200 leading-relaxed">
                      {question.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="p-6 bg-gradient-to-r from-gray-900 to-black border-t border-red-900/50">
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-red-700 via-black to-red-700 text-red-100 font-horror-title py-4 px-8 rounded-xl hover:from-red-600 hover:via-gray-900 hover:to-red-600 transition-all duration-500 transform hover:scale-105 shadow-2xl shadow-red-900/50 border border-red-500/50 animate-creepy-pulse"
          >
            地獄の扉を閉じよ
          </button>
        </div>
      </div>
    </div>
  );
}