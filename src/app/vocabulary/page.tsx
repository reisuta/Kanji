'use client'

import React, { useState, useMemo } from 'react'
import { questionBank } from '@/data/questionBank'
import { useRouter } from 'next/navigation'

type FilterType = 'all' | 'reading' | 'writing' | 'meaning' | 'idiom' | 'antonym' | 'synonym' | 'usage'
type FilterDifficulty = 'all' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export default function VocabularyPage() {
  const router = useRouter()
  const [typeFilter, setTypeFilter] = useState<FilterType>('all')
  const [difficultyFilter, setDifficultyFilter] = useState<FilterDifficulty>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedQuestion, setSelectedQuestion] = useState<typeof questionBank[0] | null>(null)

  const typeColorMap: Record<string, string> = {
    reading: 'bg-blue-500',
    writing: 'bg-green-500',
    meaning: 'bg-purple-500',
    idiom: 'bg-orange-500',
    antonym: 'bg-red-500',
    synonym: 'bg-yellow-500',
    usage: 'bg-pink-500',
    fourCharacter: 'bg-indigo-500'
  }

  const filteredQuestions = useMemo(() => {
    return questionBank.filter(question => {
      const matchesType = typeFilter === 'all' || question.type === typeFilter
      const matchesDifficulty = difficultyFilter === 'all' || question.difficulty === difficultyFilter
      const matchesSearch = searchTerm === '' ||
        question.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(question.correctAnswer).toLowerCase().includes(searchTerm.toLowerCase())

      return matchesType && matchesDifficulty && matchesSearch
    })
  }, [typeFilter, difficultyFilter, searchTerm])

  const typeOptions: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'すべて' },
    { value: 'reading', label: '読み' },
    { value: 'writing', label: '書き' },
    { value: 'meaning', label: '意味' },
    { value: 'idiom', label: '熟語' },
    { value: 'antonym', label: '対義語' },
    { value: 'synonym', label: '類義語' },
    { value: 'usage', label: '用法' },
  ]

  const difficultyOptions: { value: FilterDifficulty; label: string }[] = [
    { value: 'all', label: 'すべて' },
    { value: 6, label: '6' },
    { value: 5, label: '5' },
    { value: 4, label: '4' },
    { value: 3, label: '3' },
    { value: 2, label: '2' },
    { value: 1, label: '1' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <button
            onClick={() => router.push('/')}
            className="mb-4 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            ← ホームに戻る
          </button>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">語彙学習</h1>
          <p className="text-xl text-gray-600">漢字検定の語彙を学習しましょう</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                種類でフィルター
              </label>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value as FilterType)}
                className="w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {typeOptions.map(option => (
                  <option key={option.value} value={option.value} className="text-gray-900">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                難易度でフィルター
              </label>
              <select
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value === 'all' ? 'all' : Number(e.target.value) as FilterDifficulty)}
                className="w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {difficultyOptions.map(option => (
                  <option key={option.value} value={option.value} className="text-gray-900">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                検索
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="漢字や読みを検索..."
                className="w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mt-4 text-base text-gray-600">
            {filteredQuestions.length} 件の語彙が見つかりました
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuestions.map((question, index) => (
            <div
              key={index}
              onClick={() => setSelectedQuestion(question)}
              className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`text-base font-medium text-white px-4 py-2 rounded ${typeColorMap[question.type] || 'bg-gray-500'}`}>
                  {question.type}
                </span>
                <span className="text-base font-medium text-gray-600 bg-gray-100 px-4 py-2 rounded">
                  {question.difficulty}
                </span>
              </div>

              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {question.question}
                </h3>
                <p className="text-xl text-gray-700">
                  <span className="font-medium">答え: </span>
                  {question.correctAnswer}
                </p>
              </div>

              {question.explanation && (
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-lg text-gray-600">
                    {question.explanation}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">該当する語彙が見つかりませんでした</p>
          </div>
        )}
      </div>

      {/* モーダル */}
      {selectedQuestion && (
        <div 
          className="fixed inset-0 bg-black/20 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedQuestion(null)}
        >
          <div 
            className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <span className={`text-lg font-medium text-white px-5 py-2 rounded ${typeColorMap[selectedQuestion.type] || 'bg-gray-500'}`}>
                  {selectedQuestion.type}
                </span>
                <span className="text-lg font-medium text-gray-600 bg-gray-100 px-5 py-2 rounded">
                  {selectedQuestion.difficulty}
                </span>
              </div>
              <button
                onClick={() => setSelectedQuestion(null)}
                className="text-gray-400 hover:text-gray-600 text-3xl"
              >
                ×
              </button>
            </div>

            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedQuestion.question}
              </h3>
              <p className="text-2xl text-gray-700 mb-2">
                <span className="font-medium">答え: </span>
                {selectedQuestion.correctAnswer}
              </p>

              {selectedQuestion.choices && (
                <div className="mt-6">
                  <p className="text-lg font-medium text-gray-700 mb-3">選択肢:</p>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedQuestion.choices.map((choice, idx) => (
                      <div 
                        key={idx}
                        className={`p-3 rounded-lg border-2 ${
                          choice === selectedQuestion.correctAnswer 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-gray-300 bg-gray-50'
                        }`}
                      >
                        <p className="text-lg text-gray-800">{choice}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {selectedQuestion.explanation && (
              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-xl font-medium text-gray-700 mb-3">解説</h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {selectedQuestion.explanation}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
