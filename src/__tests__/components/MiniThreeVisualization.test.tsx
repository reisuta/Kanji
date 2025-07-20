import { render } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'

// Three.jsのモック
vi.mock('three', () => ({
  Scene: vi.fn(() => ({
    add: vi.fn()
  })),
  PerspectiveCamera: vi.fn(() => ({
    aspect: 1,
    updateProjectionMatrix: vi.fn(),
    position: { set: vi.fn(), x: 0, y: 0, z: 0 },
    lookAt: vi.fn()
  })),
  WebGLRenderer: vi.fn(() => ({
    setSize: vi.fn(),
    setClearColor: vi.fn(),
    render: vi.fn(),
    dispose: vi.fn(),
    domElement: document.createElement('canvas')
  })),
  BufferGeometry: vi.fn(() => ({
    setAttribute: vi.fn()
  })),
  BufferAttribute: vi.fn(),
  PointsMaterial: vi.fn(),
  Points: vi.fn(() => ({
    rotation: { x: 0, y: 0, z: 0 }
  })),
  ConeGeometry: vi.fn(),
  BoxGeometry: vi.fn(),
  SphereGeometry: vi.fn(),
  MeshBasicMaterial: vi.fn(),
  Mesh: vi.fn(() => ({
    position: { set: vi.fn(), x: 0, y: 0, z: 0 },
    rotation: { set: vi.fn(), x: 0, y: 0, z: 0 },
    scale: { setScalar: vi.fn() }
  })),
  PointLight: vi.fn(() => ({
    position: { set: vi.fn(), x: 0, y: 0, z: 0 },
    intensity: 1
  })),
  Color: vi.fn(() => ({
    setHSL: vi.fn(),
    r: 1,
    g: 0,
    b: 0
  })),
  AdditiveBlending: 'AdditiveBlending'
}))

import MiniThreeVisualization from '../../components/MiniThreeVisualization'

// WindowのモックAPI
Object.defineProperty(window, 'requestAnimationFrame', {
  value: vi.fn((callback) => {
    setTimeout(callback, 16)
    return 1
  }),
  writable: true
})

Object.defineProperty(window, 'cancelAnimationFrame', {
  value: vi.fn(),
  writable: true
})

describe('MiniThreeVisualization', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('デフォルトサイズでコンポーネントが正しくレンダリングされる', () => {
    const { container } = render(<MiniThreeVisualization />)
    
    const visualizationDiv = container.firstChild as HTMLElement
    expect(visualizationDiv).toBeInTheDocument()
    expect(visualizationDiv).toHaveClass('relative', 'overflow-hidden', 'rounded-lg', 'border', 'border-red-900/50')
    expect(visualizationDiv).toHaveStyle({ width: '300px', height: '200px' })
  })

  it('カスタムサイズでコンポーネントが正しくレンダリングされる', () => {
    const { container } = render(<MiniThreeVisualization width={400} height={300} />)
    
    const visualizationDiv = container.firstChild as HTMLElement
    expect(visualizationDiv).toHaveStyle({ width: '400px', height: '300px' })
  })

  it('ホラーテーマの色とスタイルが適用される', () => {
    const { container } = render(<MiniThreeVisualization />)
    
    const visualizationDiv = container.firstChild as HTMLElement
    expect(visualizationDiv).toHaveClass('border-red-900/50', 'shadow-2xl', 'shadow-red-900/30')
  })

  it('コンポーネントがアンマウントされても例外が発生しない', () => {
    const { unmount } = render(<MiniThreeVisualization />)
    
    // アンマウント時に例外が発生しないかテスト
    expect(() => unmount()).not.toThrow()
  })

  it('リサイズイベントリスナーが追加される', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener')
    
    render(<MiniThreeVisualization />)
    
    expect(addEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function))
  })

  it('アニメーションが開始される', () => {
    const mockRequestAnimationFrame = vi.fn()
    Object.defineProperty(window, 'requestAnimationFrame', {
      value: mockRequestAnimationFrame,
      writable: true
    })

    render(<MiniThreeVisualization />)
    
    expect(mockRequestAnimationFrame).toHaveBeenCalled()
  })

  it('プロパティが変更されたときに再レンダリングされる', () => {
    const { rerender } = render(<MiniThreeVisualization width={300} height={200} />)
    
    rerender(<MiniThreeVisualization width={400} height={300} />)
    
    // 再レンダリングが例外なく実行されることを確認
    expect(true).toBe(true)
  })

  it('visualizationコンテナが適切なクラスを持つ', () => {
    const { container } = render(<MiniThreeVisualization />)
    
    const visualizationDiv = container.firstChild as HTMLElement
    expect(visualizationDiv).toHaveClass('relative')
    expect(visualizationDiv).toHaveClass('overflow-hidden')
    expect(visualizationDiv).toHaveClass('rounded-lg')
    expect(visualizationDiv).toHaveClass('border')
  })

  it('デフォルトのwidth/heightプロパティが正しく動作する', () => {
    const { container } = render(<MiniThreeVisualization />)
    
    const visualizationDiv = container.firstChild as HTMLElement
    expect(visualizationDiv).toHaveStyle({ width: '300px' })
    expect(visualizationDiv).toHaveStyle({ height: '200px' })
  })

  it('コンポーネントが単一の要素をレンダリングする', () => {
    const { container } = render(<MiniThreeVisualization />)
    
    expect(container.children).toHaveLength(1)
  })

  it('カスタムpropsが正しく反映される', () => {
    const { container } = render(<MiniThreeVisualization width={500} height={350} />)
    
    const visualizationDiv = container.firstChild as HTMLElement
    expect(visualizationDiv).toHaveStyle({ width: '500px', height: '350px' })
  })
})