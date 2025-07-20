import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import VocabularyPage from '../../app/vocabulary/page'

// useRouterのモック
const mockPush = vi.fn()
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush
  })
}))

// questionBankのモック
vi.mock('@/data/questionBank', () => ({
  questionBank: [
    {
      id: '1',
      type: 'reading',
      question: '漢字の読み問題',
      choices: ['よみ1', 'よみ2', 'よみ3', 'よみ4'],
      correctAnswer: 'よみ1',
      difficulty: 5,
      explanation: '読み方の説明'
    },
    {
      id: '2',
      type: 'writing',
      question: '漢字の書き問題',
      choices: ['書き1', '書き2', '書き3', '書き4'],
      correctAnswer: '書き1',
      difficulty: 6,
      explanation: '書き方の説明'
    },
    {
      id: '3',
      type: 'meaning',
      question: '意味問題',
      choices: ['意味1', '意味2', '意味3', '意味4'],
      correctAnswer: '意味1',
      difficulty: 7,
      explanation: '意味の説明'
    }
  ]
}))

describe('VocabularyPage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('ページタイトルが表示される', () => {
    render(<VocabularyPage />)
    expect(screen.getByText('語彙学習')).toBeInTheDocument()
  })

  it('戻るボタンが表示される', () => {
    render(<VocabularyPage />)
    expect(screen.getByText('← ホームに戻る')).toBeInTheDocument()
  })

  it('戻るボタンをクリックするとホームに遷移する', () => {
    render(<VocabularyPage />)
    
    fireEvent.click(screen.getByText('← ホームに戻る'))
    expect(mockPush).toHaveBeenCalledWith('/')
  })

  it('フィルターオプションが表示される', () => {
    render(<VocabularyPage />)
    
    // タイプフィルター
    const allSelects = screen.getAllByDisplayValue('すべて')
    expect(allSelects.length).toBe(2) // タイプと難易度の2つ
    expect(screen.getByText('読み')).toBeInTheDocument()
    expect(screen.getByText('書き')).toBeInTheDocument()
    expect(screen.getByText('意味')).toBeInTheDocument()
  })

  it('検索フィールドが表示される', () => {
    render(<VocabularyPage />)
    
    const searchInput = screen.getByPlaceholderText('漢字や読みを検索...')
    expect(searchInput).toBeInTheDocument()
  })

  it('すべての問題が初期表示される', () => {
    render(<VocabularyPage />)
    
    expect(screen.getByText('漢字の読み問題')).toBeInTheDocument()
    expect(screen.getByText('漢字の書き問題')).toBeInTheDocument()
    expect(screen.getByText('意味問題')).toBeInTheDocument()
  })

  it('問題数が正しく表示される', () => {
    render(<VocabularyPage />)
    
    expect(screen.getByText('3 件の語彙が見つかりました')).toBeInTheDocument()
  })

  it('タイプフィルターで問題を絞り込める', () => {
    render(<VocabularyPage />)
    
    // 読みタイプでフィルター
    const typeSelect = screen.getAllByRole('combobox')[0]
    fireEvent.change(typeSelect, { target: { value: 'reading' } })
    
    expect(screen.getByText('漢字の読み問題')).toBeInTheDocument()
    expect(screen.queryByText('漢字の書き問題')).not.toBeInTheDocument()
    expect(screen.queryByText('意味問題')).not.toBeInTheDocument()
    expect(screen.getByText('1 件の語彙が見つかりました')).toBeInTheDocument()
  })

  it('難易度フィルターで問題を絞り込める', () => {
    render(<VocabularyPage />)
    
    // 難易度5でフィルター
    const difficultySelect = screen.getAllByRole('combobox')[1]
    fireEvent.change(difficultySelect, { target: { value: '5' } })
    
    expect(screen.getByText('漢字の読み問題')).toBeInTheDocument()
    expect(screen.queryByText('漢字の書き問題')).not.toBeInTheDocument()
    expect(screen.queryByText('意味問題')).not.toBeInTheDocument()
    expect(screen.getByText('1 件の語彙が見つかりました')).toBeInTheDocument()
  })

  it('検索フィルターで問題を絞り込める', () => {
    render(<VocabularyPage />)
    
    const searchInput = screen.getByPlaceholderText('漢字や読みを検索...')
    fireEvent.change(searchInput, { target: { value: '読み' } })
    
    expect(screen.getByText('漢字の読み問題')).toBeInTheDocument()
    expect(screen.queryByText('漢字の書き問題')).not.toBeInTheDocument()
    expect(screen.queryByText('意味問題')).not.toBeInTheDocument()
    expect(screen.getByText('1 件の語彙が見つかりました')).toBeInTheDocument()
  })

  it('問題をクリックすると詳細が表示される', () => {
    render(<VocabularyPage />)
    
    fireEvent.click(screen.getByText('漢字の読み問題'))
    
    expect(screen.getAllByText('読み方の説明')).toHaveLength(2)
    expect(screen.getAllByText('よみ1').length).toBeGreaterThan(1)
  })

  it('詳細モーダルを閉じることができる', () => {
    render(<VocabularyPage />)
    
    // 問題をクリックして詳細を表示
    fireEvent.click(screen.getByText('漢字の読み問題'))
    expect(screen.getAllByText('読み方の説明')).toHaveLength(2)
    
    // モーダルを閉じる
    fireEvent.click(screen.getByText('×'))
    expect(screen.getAllByText('読み方の説明')).toHaveLength(1)
  })

  it('複数のフィルターを組み合わせて使える', () => {
    render(<VocabularyPage />)
    
    // タイプと難易度の組み合わせ
    const typeSelect = screen.getAllByRole('combobox')[0]
    const difficultySelect = screen.getAllByRole('combobox')[1]
    
    fireEvent.change(typeSelect, { target: { value: 'writing' } })
    fireEvent.change(difficultySelect, { target: { value: '6' } })
    
    expect(screen.getByText('漢字の書き問題')).toBeInTheDocument()
    expect(screen.queryByText('漢字の読み問題')).not.toBeInTheDocument()
    expect(screen.queryByText('意味問題')).not.toBeInTheDocument()
    expect(screen.getByText('1 件の語彙が見つかりました')).toBeInTheDocument()
  })

  it('フィルター結果が0件の場合のメッセージが表示される', () => {
    render(<VocabularyPage />)
    
    // 存在しない検索語でフィルター
    const searchInput = screen.getByPlaceholderText('漢字や読みを検索...')
    fireEvent.change(searchInput, { target: { value: '存在しない検索語' } })
    
    expect(screen.getByText('該当する語彙が見つかりませんでした')).toBeInTheDocument()
    expect(screen.getByText('0 件の語彙が見つかりました')).toBeInTheDocument()
  })

  it('問題の難易度とタイプが表示される', () => {
    render(<VocabularyPage />)
    
    // 問題タイプが表示されている
    expect(screen.getByText('reading')).toBeInTheDocument()
    expect(screen.getByText('writing')).toBeInTheDocument()
    expect(screen.getByText('meaning')).toBeInTheDocument()
    
    // 難易度が表示されている
    expect(screen.getAllByText('5').length).toBeGreaterThan(0)
    expect(screen.getAllByText('6').length).toBeGreaterThan(0)
    expect(screen.getAllByText('7').length).toBeGreaterThan(0)
  })

  it('正解が表示される', () => {
    render(<VocabularyPage />)
    
    expect(screen.getAllByText('よみ1').length).toBeGreaterThan(0)
    expect(screen.getAllByText('書き1').length).toBeGreaterThan(0)
    expect(screen.getAllByText('意味1').length).toBeGreaterThan(0)
  })
})