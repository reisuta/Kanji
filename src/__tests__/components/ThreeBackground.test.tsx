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
    setAttribute: vi.fn(),
    setFromPoints: vi.fn()
  })),
  BufferAttribute: vi.fn(),
  PointsMaterial: vi.fn(),
  Points: vi.fn(() => ({
    rotation: { x: 0, y: 0, z: 0 }
  })),
  BoxGeometry: vi.fn(),
  ConeGeometry: vi.fn(),
  SphereGeometry: vi.fn(),
  MeshBasicMaterial: vi.fn(),
  LineBasicMaterial: vi.fn(),
  Mesh: vi.fn(() => ({
    position: { set: vi.fn(), x: 0, y: 0 },
    rotation: { set: vi.fn(), x: 0, y: 0, z: 0 },
    scale: { setScalar: vi.fn() }
  })),
  Line: vi.fn(() => ({
    rotation: { z: 0 },
    position: { x: 0 }
  })),
  Color: vi.fn(() => ({
    setHSL: vi.fn(),
    r: 1,
    g: 0,
    b: 0
  })),
  Vector3: vi.fn(),
  AdditiveBlending: 'AdditiveBlending'
}))

// ThreeBackgroundコンポーネントのインポート
import ThreeBackground from '../../components/ThreeBackground'

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

Object.defineProperty(window, 'innerWidth', {
  value: 1024,
  writable: true
})

Object.defineProperty(window, 'innerHeight', {
  value: 768,
  writable: true
})

describe('ThreeBackground', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('コンポーネントが正しくレンダリングされる', () => {
    const { container } = render(<ThreeBackground />)
    
    const backgroundDiv = container.firstChild as HTMLElement
    expect(backgroundDiv).toBeInTheDocument()
    expect(backgroundDiv).toHaveClass('fixed', 'inset-0', 'pointer-events-none', 'z-0')
  })

  it('スタイルプロパティが正しく設定される', () => {
    const { container } = render(<ThreeBackground />)
    
    const backgroundDiv = container.firstChild as HTMLElement
    expect(backgroundDiv).toHaveStyle({ zIndex: '-1' })
  })

  it('固定位置でポインターイベントが無効になっている', () => {
    const { container } = render(<ThreeBackground />)
    
    const backgroundDiv = container.firstChild as HTMLElement
    expect(backgroundDiv).toHaveClass('fixed', 'inset-0', 'pointer-events-none')
  })

  it('コンポーネントがアンマウントされても例外が発生しない', () => {
    const { unmount } = render(<ThreeBackground />)
    
    // アンマウント時に例外が発生しないかテスト
    expect(() => unmount()).not.toThrow()
  })

  it('リサイズイベントリスナーが追加される', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener')
    
    render(<ThreeBackground />)
    
    expect(addEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function))
  })

  it('アニメーションが開始される', () => {
    const mockRequestAnimationFrame = vi.fn()
    Object.defineProperty(window, 'requestAnimationFrame', {
      value: mockRequestAnimationFrame,
      writable: true
    })

    render(<ThreeBackground />)
    
    expect(mockRequestAnimationFrame).toHaveBeenCalled()
  })

  it('背景要素が適切なクラスを持つ', () => {
    const { container } = render(<ThreeBackground />)
    
    const backgroundDiv = container.firstChild as HTMLElement
    expect(backgroundDiv).toHaveClass('fixed')
    expect(backgroundDiv).toHaveClass('inset-0')
    expect(backgroundDiv).toHaveClass('pointer-events-none')
    expect(backgroundDiv).toHaveClass('z-0')
  })

  it('コンポーネントが単一の要素をレンダリングする', () => {
    const { container } = render(<ThreeBackground />)
    
    expect(container.children).toHaveLength(1)
  })
})