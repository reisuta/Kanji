'use client';

import { Question } from '@/types/question';

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (answer: string) => void;
  selectedAnswer?: string;
}

export default function QuestionCard({
  question,
  currentIndex,
  totalQuestions,
  onAnswer,
  selectedAnswer,
}: QuestionCardProps) {
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
    <div className="dead-gray-theme rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto transform transition-all duration-300 hover:scale-105 dead-gray-border backdrop-blur-sm animate-gentle-flicker animate-slide-in-right">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <span className="bg-gradient-to-r from-gray-700 to-gray-800 dead-gray-text text-sm font-bold px-4 py-2 rounded-full shadow-lg border dead-gray-border">
              {getQuestionTypeLabel(question.type)}
            </span>
            <div className="flex space-x-1">
              {Array.from({ length: question.difficulty }, (_, i) => (
                <div key={i} className="w-2 h-2 bg-gray-500 rounded-full shadow-lg shadow-gray-500/50" />
              ))}
              {Array.from({ length: 10 - question.difficulty }, (_, i) => (
                <div key={i} className="w-2 h-2 bg-gray-700 rounded-full" />
              ))}
            </div>
          </div>
          <span className="dead-gray-text text-lg font-bold tracking-wide">
            第 {currentIndex + 1} 問 / {totalQuestions}
          </span>
        </div>
        
        <div className="w-full bg-gray-700 rounded-full h-3 mb-6 shadow-inner dead-gray-border">
          <div 
            className="bg-gradient-to-r from-gray-500 via-gray-600 to-gray-500 h-3 rounded-full transition-all duration-500 shadow-lg shadow-gray-500/30"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 rounded-xl p-6 mb-8 dead-gray-border shadow-2xl shadow-gray-900/20">
        <h2 className="text-3xl font-bold text-gray-300 mb-4 leading-relaxed text-center tracking-wide">
          {question.question}
        </h2>
      </div>

      <div className="space-y-4">
        {question.choices?.map((choice, index) => (
          <button
            key={index}
            onClick={() => onAnswer(choice)}
            className={`w-full p-5 text-left rounded-xl border-2 transition-all duration-300 font-medium transform hover:scale-102 ${
              selectedAnswer === choice
                ? 'dead-gray-border bg-gradient-to-r from-gray-600/60 to-gray-700/60 text-gray-200 shadow-lg shadow-gray-500/25'
                : 'dead-gray-border bg-gradient-to-r from-gray-800/60 to-gray-700/60 text-gray-300 hover:border-gray-400 hover:bg-gradient-to-r hover:from-gray-600/20 hover:to-gray-700/20 hover:shadow-md hover:text-gray-200'
            }`}
          >
            <span className={`inline-block w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 text-gray-200 rounded-full text-center leading-10 mr-4 text-lg font-bold dead-gray-border`}>
              {String.fromCharCode(65 + index)}
            </span>
            {choice}
          </button>
        )) || (
          <div className="text-center dead-gray-text py-8 bg-gray-800/40 rounded-xl dead-gray-border">
            選択肢が設定されていません
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-gray-800/60 rounded-full px-4 py-2 dead-gray-border shadow-lg shadow-gray-900/20">
          <span className="dead-gray-text text-sm font-medium">難易度</span>
          <div className="flex space-x-1">
            {Array.from({ length: question.difficulty }, (_, i) => (
              <div key={i} className="w-2 h-2 bg-gray-500 rounded-full shadow-sm" />
            ))}
            {Array.from({ length: 10 - question.difficulty }, (_, i) => (
              <div key={i} className="w-2 h-2 bg-gray-700 rounded-full" />
            ))}
          </div>
          <span className="text-gray-400 text-sm">
            {question.difficulty}/10
          </span>
        </div>
      </div>
    </div>
  );
}