import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import StartScreen from '../../components/StartScreen'

vi.mock('../../components/MiniThreeVisualization', () => ({
  default: () => <div data-testid="mini-three-visualization">MiniThreeVisualization</div>
}))

describe('StartScreen', () => {
  it('タイトルが正しく表示される', () => {
    const mockOnStart = vi.fn()
    render(<StartScreen onStart={mockOnStart} />)
    
    expect(screen.getByText('漢検一級')).toBeInTheDocument()
    expect(screen.getByText('深淵への誘い')).toBeInTheDocument()
  })

  it('説明文が表示される', () => {
    const mockOnStart = vi.fn()
    render(<StartScreen onStart={mockOnStart} />)
    
    expect(screen.getByText(/千年の呪いが宿る漢字の深淵へ/)).toBeInTheDocument()
  })

  it('試練の詳細が表示される', () => {
    const mockOnStart = vi.fn()
    render(<StartScreen onStart={mockOnStart} />)
    
    expect(screen.getByText('問題数：五つの呪い')).toBeInTheDocument()
    expect(screen.getByText('制限時間：永劫')).toBeInTheDocument()
    expect(screen.getByText('難易度：悪魔級')).toBeInTheDocument()
    expect(screen.getByText('形式：魂の選択')).toBeInTheDocument()
  })

  it('開始ボタンをクリックするとonStartが呼ばれる', () => {
    const mockOnStart = vi.fn()
    render(<StartScreen onStart={mockOnStart} />)
    
    const startButton = screen.getByText('深淵に堕ちよ')
    fireEvent.click(startButton)
    
    expect(mockOnStart).toHaveBeenCalledTimes(1)
  })

  it('語彙学習リンクが正しく表示される', () => {
    const mockOnStart = vi.fn()
    render(<StartScreen onStart={mockOnStart} />)
    
    const vocabularyLink = screen.getByText('語彙を学ぶ')
    expect(vocabularyLink).toBeInTheDocument()
    expect(vocabularyLink).toHaveAttribute('href', '/vocabulary')
  })

  it('MiniThreeVisualizationコンポーネントが表示される', () => {
    const mockOnStart = vi.fn()
    render(<StartScreen onStart={mockOnStart} />)
    
    expect(screen.getByTestId('mini-three-visualization')).toBeInTheDocument()
  })
})