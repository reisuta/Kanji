'use client';

import MiniThreeVisualization from './MiniThreeVisualization';

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-2xl p-8 max-w-6xl mx-auto border border-gray-700 backdrop-blur-sm animate-creepy-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* 左側：タイトルとテキスト */}
        <div className="text-center lg:text-left">
          <div className="mb-6">
            <h1 className="text-6xl lg:text-7xl font-extreme-horror text-red-500 mb-2 animate-gentle-flicker animate-screen-glitch animate-white-flash">
              漢検一級
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-red-600 via-black to-red-600 mx-auto lg:mx-0 rounded-full mb-4 animate-blood-drip"></div>
          </div>
          <h2 className="text-2xl lg:text-3xl font-unreadable-horror text-amber-400 mb-4 animate-flicker">
            深淵への誘い
          </h2>
          <p className="font-horror-text text-gray-300 text-base lg:text-lg leading-relaxed animate-flicker">
            千年の呪いが宿る漢字の深淵へ。<br />
            恐怖と畏敬に満ちた文字の奥義を極めし者のみが辿り着く境地。<br />
            汝の魂の真価が今、試される。
          </p>
        </div>

        {/* 右側：Three.js ビジュアライゼーション */}
        <div className="flex justify-center lg:justify-end">
          <div className="animate-gentle-flicker">
            <MiniThreeVisualization width={350} height={250} />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl p-6 mb-8 border border-red-900/50 shadow-2xl shadow-red-900/20 mt-8 animate-flicker">
        <h3 className="text-xl font-unreadable-horror text-red-400 mb-6 flex items-center justify-center animate-gentle-flicker">
          <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
          邪悪なる試練
          <span className="w-2 h-2 bg-red-500 rounded-full ml-2 animate-pulse"></span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="flex items-center space-x-3 bg-gray-800/60 rounded-lg p-3 border border-red-900/50 transform hover:scale-105 transition-all duration-300 animate-flicker">
            <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50 animate-pulse"></div>
            <span className="font-extreme-horror text-gray-200 font-medium">問題数：五つの呪い</span>
          </div>
          <div className="flex items-center space-x-3 bg-gray-800/60 rounded-lg p-3 border border-red-900/50 transform hover:scale-105 transition-all duration-300 animate-flicker">
            <div className="w-3 h-3 bg-amber-500 rounded-full shadow-lg shadow-amber-500/50 animate-pulse"></div>
            <span className="font-extreme-horror text-gray-200 font-medium">制限時間：永劫</span>
          </div>
          <div className="flex items-center space-x-3 bg-gray-800/60 rounded-lg p-3 border border-red-900/50 transform hover:scale-105 transition-all duration-300 animate-flicker">
            <div className="w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-pulse"></div>
            <span className="font-extreme-horror text-gray-200 font-medium">難易度：悪魔級</span>
          </div>
          <div className="flex items-center space-x-3 bg-gray-800/60 rounded-lg p-3 border border-red-900/50 transform hover:scale-105 transition-all duration-300 animate-flicker">
            <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 animate-pulse"></div>
            <span className="font-extreme-horror text-gray-200 font-medium">形式：魂の選択</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <button
          onClick={onStart}
          className="w-full bg-gradient-to-r from-red-700 via-black to-red-700 text-red-100 font-unreadable-horror py-6 px-8 rounded-xl hover:from-red-600 hover:via-gray-900 hover:to-red-600 transition-all duration-500 transform hover:scale-105 shadow-2xl shadow-red-900/50 text-xl tracking-wide border border-red-500/50 animate-gentle-flicker hover:animate-screen-glitch"
        >
          深淵に堕ちよ
        </button>
        
        <div className="text-sm text-red-400 flex items-center justify-center space-x-2 font-extreme-horror animate-flicker">
          <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
          <span>恐怖と絶望の淵で、汝の魂が試される</span>
          <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}