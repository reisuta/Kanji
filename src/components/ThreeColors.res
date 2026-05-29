// HSL palette helpers shared between ThreeBackground and
// MiniThreeVisualization. The original code interleaved several Math.random()
// calls with conditional HSL ranges — by accepting the random values as
// arguments these helpers stay pure and the call sites read top-to-bottom.
type hsl = {hue: float, saturation: float, lightness: float}

// MiniThreeVisualization shapes — mostly the red end (hue 0.0), occasionally
// an amber accent (hue 0.1). Saturation is fixed; lightness drifts.
let miniShapeColor = (~rand1: float, ~rand2: float): hsl => {
  hue: rand1 < 0.7 ? 0.0 : 0.1,
  saturation: 0.9,
  lightness: 0.2 +. rand2 *. 0.3,
}

// MiniThreeVisualization "blood" particles — single deep red, lightness only.
let miniBloodColor = (~rand: float): hsl => {
  hue: 0.0,
  saturation: 0.9,
  lightness: 0.1 +. rand *. 0.3,
}

// ThreeBackground ink particles — three-bucket palette (gold / red / purple)
// chosen by a separate random; each bucket has its own hue & lightness span.
let inkColor = (~bucketRand: float, ~rand1: float, ~rand2: float): hsl =>
  if bucketRand < 0.4 {
    {hue: 0.1 +. rand1 *. 0.1, saturation: 0.8, lightness: 0.3 +. rand2 *. 0.3}
  } else if bucketRand < 0.7 {
    {hue: 0.0 +. rand1 *. 0.05, saturation: 0.9, lightness: 0.2 +. rand2 *. 0.3}
  } else {
    {hue: 0.8 +. rand1 *. 0.1, saturation: 0.7, lightness: 0.15 +. rand2 *. 0.2}
  }

// ThreeBackground kanji shapes — binary gold vs red, constant lightness.
let bgShapeColor = (~rand: float): hsl => {
  hue: rand < 0.5 ? 0.1 : 0.0,
  saturation: 0.8,
  lightness: 0.3,
}
