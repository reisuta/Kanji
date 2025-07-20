import { describe, it, expect, vi } from 'vitest'

// Next.jsのフォントとCSSインポートをモック
vi.mock('next/font/google', () => ({
  Geist: vi.fn(() => ({
    variable: '--font-geist-sans',
    className: 'geist-sans'
  })),
  Geist_Mono: vi.fn(() => ({
    variable: '--font-geist-mono',
    className: 'geist-mono'
  }))
}))

vi.mock('../../app/globals.css', () => ({}))
vi.mock('../../styles/horror-fonts.css', () => ({}))

import RootLayout, { metadata } from '../../app/layout'

describe('RootLayout', () => {
  it('正しいメタデータが設定されている', () => {
    expect(metadata.title).toBe("漢検一級 - 深淵への挑戦")
    expect(metadata.description).toBe("恐怖と畏敬の漢字世界へ。至高の境地を目指す者のみに許された試練。")
  })

  it('RootLayoutコンポーネントが正しく定義されている', () => {
    expect(RootLayout).toBeDefined()
    expect(typeof RootLayout).toBe('function')
  })

  it('RootLayoutが子要素を受け取るpropsを持つ', () => {
    const testChild = <div>テスト子要素</div>
    
    // コンポーネントの関数として実行してエラーが出ないことを確認
    expect(() => {
      RootLayout({ children: testChild })
    }).not.toThrow()
  })

  it('RootLayoutがnullの子要素でもエラーが発生しない', () => {
    expect(() => {
      RootLayout({ children: null })
    }).not.toThrow()
  })

  it('RootLayoutが文字列の子要素を受け入れる', () => {
    expect(() => {
      RootLayout({ children: 'テキストコンテンツ' })
    }).not.toThrow()
  })

  it('RootLayoutが複数の子要素を受け入れる', () => {
    const multipleChildren = [
      <div key="1">子要素1</div>,
      <div key="2">子要素2</div>
    ]
    
    expect(() => {
      RootLayout({ children: multipleChildren })
    }).not.toThrow()
  })

  it('RootLayoutがReactノードを受け入れる', () => {
    const ReactComponent = () => <div>Reactコンポーネント</div>
    
    expect(() => {
      RootLayout({ children: <ReactComponent /> })
    }).not.toThrow()
  })

  it('RootLayoutが配列の子要素を受け入れる', () => {
    const arrayChildren = [
      <div key="1">配列子要素1</div>,
      <div key="2">配列子要素2</div>
    ]
    
    expect(() => {
      RootLayout({ children: arrayChildren })
    }).not.toThrow()
  })

  it('RootLayoutがネストした子要素を受け入れる', () => {
    const nestedChildren = (
      <div>
        <div>ネストした子要素</div>
      </div>
    )
    
    expect(() => {
      RootLayout({ children: nestedChildren })
    }).not.toThrow()
  })

  it('RootLayoutが空のフラグメントを受け入れる', () => {
    expect(() => {
      RootLayout({ children: <></> })
    }).not.toThrow()
  })
})