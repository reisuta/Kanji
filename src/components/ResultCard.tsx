'use client';

import { QuizResult } from '@/types/question';
import { getScoreGrade, getScoreMessage, formatTime } from '@/utils/scoring';

interface ResultCardProps {
  result: QuizResult;
  onRestart: () => void;
  onShowExplanation: () => void;
}

export default function ResultCard({ result, onRestart, onShowExplanation }: ResultCardProps) {
  const grade = getScoreGrade(result.score);
  const message = getScoreMessage(result.score);

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'S': return 'text-amber-400';
      case 'A': return 'text-green-400';
      case 'B': return 'text-blue-400';
      case 'C': return 'text-orange-400';
      case 'D': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getGradeBg = (grade: string) => {
    switch (grade) {
      case 'S': return 'bg-gradient-to-br from-amber-900/60 to-yellow-900/60 border-amber-500/50';
      case 'A': return 'bg-gradient-to-br from-green-900/60 to-emerald-900/60 border-green-500/50';
      case 'B': return 'bg-gradient-to-br from-blue-900/60 to-cyan-900/60 border-blue-500/50';
      case 'C': return 'bg-gradient-to-br from-orange-900/60 to-amber-900/60 border-orange-500/50';
      case 'D': return 'bg-gradient-to-br from-red-900/60 to-pink-900/60 border-red-500/50';
      default: return 'bg-gradient-to-br from-gray-900/60 to-slate-900/60 border-gray-500/50';
    }
  };

  const getGradeTitle = (grade: string) => {
    switch (grade) {
      case 'S': return '至高の境地';
      case 'A': return '達人の域';
      case 'B': return '熟練者';
      case 'C': return '学習者';
      case 'D': return '修行中';
      default: return '挑戦者';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto text-center border border-red-900/50 backdrop-blur-sm animate-creepy-pulse">
      <div className="mb-8">
        <h1 className="text-5xl font-horror-title text-red-400 mb-6 tracking-wider animate-creepy-glow animate-creepy-shake">
          地獄からの帰還
        </h1>
        <div className={`inline-block ${getGradeBg(grade)} rounded-2xl p-8 mb-6 border-2 backdrop-blur-sm animate-creepy-pulse`}>
          <div className="mb-4">
            <span className={`text-8xl font-horror-title ${getGradeColor(grade)} drop-shadow-lg animate-blood-drip`}>
              {grade}
            </span>
          </div>
          <div className="font-horror-subtitle text-red-300 text-xl font-bold tracking-wide animate-creepy-glow">
            {getGradeTitle(grade)}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-red-900/40 to-black text-red-200 rounded-xl p-6 border border-red-700/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
          <div className="text-4xl font-horror-title mb-2 animate-blood-drip">{result.score}<span className="text-2xl">%</span></div>
          <div className="text-red-300/80 font-horror-text font-medium">魂の代価</div>
        </div>
        
        <div className="bg-gradient-to-br from-red-900/40 to-black text-red-200 rounded-xl p-6 border border-red-700/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
          <div className="text-4xl font-horror-title mb-2 animate-creepy-glow">
            {result.correctAnswers}<span className="text-xl">/{result.totalQuestions}</span>
          </div>
          <div className="text-red-300/80 font-horror-text font-medium">呪いの正解</div>
        </div>
        
        <div className="bg-gradient-to-br from-red-900/40 to-black text-red-200 rounded-xl p-6 border border-red-700/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
          <div className="text-4xl font-horror-title mb-2 animate-creepy-pulse">{formatTime(result.timeTaken)}</div>
          <div className="text-red-300/80 font-horror-text font-medium">地獄の時間</div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl p-6 mb-8 border border-red-900/50 shadow-2xl shadow-red-900/20">
        <p className="text-xl font-horror-text text-red-300 leading-relaxed tracking-wide animate-creepy-glow">
          {message}
        </p>
      </div>

      <div className="space-y-6">
        <button
          onClick={onRestart}
          className="w-full bg-gradient-to-r from-red-700 via-black to-red-700 text-red-100 font-horror-title py-5 px-8 rounded-xl hover:from-red-600 hover:via-gray-900 hover:to-red-600 transition-all duration-500 transform hover:scale-105 shadow-2xl shadow-red-900/50 text-xl tracking-wide border border-red-500/50 animate-creepy-pulse hover:animate-creepy-shake"
        >
          再び深淵へ堕ちよ
        </button>
        
        <div className="flex space-x-4">
          <button 
            onClick={onRestart}
            className="flex-1 bg-gradient-to-r from-gray-800/80 to-black text-red-300 font-horror-text py-4 px-6 rounded-xl hover:from-red-900/20 hover:to-black transition-all duration-300 border border-red-900/50 backdrop-blur-sm"
          >
            冥界への帰還
          </button>
          <button 
            onClick={onShowExplanation}
            className="flex-1 bg-gradient-to-r from-gray-800/80 to-black text-red-300 font-horror-text py-4 px-6 rounded-xl hover:from-red-900/20 hover:to-black transition-all duration-300 border border-red-900/50 backdrop-blur-sm"
          >
            悪魔の解説
          </button>
        </div>
      </div>
    </div>
  );
}