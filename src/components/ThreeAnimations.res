// Pure animation math shared between ThreeBackground and
// MiniThreeVisualization. Returns the per-frame deltas/positions for
// shapes/lights/camera so the component layer only handles Three.js mutation.
//
// Time is supplied in seconds (already divided by 1000 on the caller side).
type vec3 = {x: float, y: float, z: float}

// Per-shape transform delta applied each animation frame. rotationDelta* are
// `+=` increments to the rotation Euler angles. positionDelta* are `+=` to the
// position. `scale` is an absolute multiplier (caller does setScalar).
type frameTransform = {
  rotationDeltaX: float,
  rotationDeltaY: float,
  rotationDeltaZ: float,
  positionDeltaX: float,
  positionDeltaY: float,
  positionDeltaZ: float,
  scale: float,
}

// MiniThreeVisualization — shapes float, spin and pulse erratically.
let miniShapeFrame = (~time: float, ~index: int): frameTransform => {
  let i = Int.toFloat(index)
  let signX = mod(index, 3) === 0 ? 1.0 : -1.0
  let signY = mod(index, 2) === 0 ? 1.0 : -1.0
  {
    rotationDeltaX: 0.01 *. signX *. (1.0 +. Math.sin(time +. i) *. 0.5),
    rotationDeltaY: 0.008 *. signY *. (1.0 +. Math.cos(time *. 0.7 +. i) *. 0.3),
    rotationDeltaZ: 0.005 *. Math.sin(time *. 1.2 +. i),
    positionDeltaX: Math.sin(time *. 0.3 +. i) *. 0.05,
    positionDeltaY: Math.cos(time *. 0.4 +. i *. 0.7) *. 0.03,
    positionDeltaZ: Math.sin(time *. 0.2 +. i *. 1.3) *. 0.04,
    scale: 1.0 +. Math.sin(time *. 2.0 +. i) *. 0.2,
  }
}

// MiniThreeVisualization — two point lights orbit while pulsing intensity.
// Only the axes the caller mutates are returned; static axes carry over from
// scene initialization.
type miniLightFrame = {
  light1X: float,
  light1Y: float,
  light1Intensity: float,
  light2X: float,
  light2Z: float,
}

let miniLightFrame = (~time: float): miniLightFrame => {
  light1X: Math.sin(time *. 0.5) *. 15.0,
  light1Y: Math.cos(time *. 0.3) *. 10.0,
  light1Intensity: 1.5 +. Math.sin(time *. 3.0) *. 0.5,
  light2X: Math.cos(time *. 0.4) *. -12.0,
  light2Z: Math.sin(time *. 0.6) *. 8.0,
}

// ThreeBackground — slower drift, no scale pulse, no Z motion. Sign cycles by
// modulo of the shape index rather than continuously varying with time.
let bgShapeFrame = (~time: float, ~index: int): frameTransform => {
  let i = Int.toFloat(index)
  let signX = mod(index, 2) === 0 ? 1.0 : -1.0
  let signY = mod(index, 3) === 0 ? 1.0 : -1.0
  {
    rotationDeltaX: 0.005 *. signX,
    rotationDeltaY: 0.003 *. signY,
    rotationDeltaZ: 0.0,
    positionDeltaX: Math.sin(time *. 0.5 +. i) *. 0.02,
    positionDeltaY: Math.cos(time *. 0.3 +. i) *. 0.015,
    positionDeltaZ: 0.0,
    scale: 1.0,
  }
}

let bgBrushStrokeX = (time: float): float => Math.sin(time *. 0.2) *. 10.0

type bgCameraFrame = {x: float, y: float}

let bgCameraFrame = (~time: float): bgCameraFrame => {
  x: Math.sin(time *. 0.1) *. 2.0,
  y: Math.cos(time *. 0.15) *. 1.0,
}

// Static brush-stroke curve points used once at scene construction. `count`
// points are sampled with t∈[0, 1] across a sinusoidal path. Kept here so the
// shape stays consistent if other backdrops want to reuse it.
let brushCurvePoint = (t: float): vec3 => {
  x: Math.sin(t *. Math.Constants.pi *. 4.0) *. 30.0,
  y: Math.cos(t *. Math.Constants.pi *. 2.0) *. 20.0,
  z: t *. 40.0 -. 20.0,
}

let brushCurvePoints = (~count: int): array<vec3> => {
  let lastIndex = Int.toFloat(count - 1)
  Belt.Array.makeBy(count, i => brushCurvePoint(Int.toFloat(i) /. lastIndex))
}

// Spherical → Cartesian for ink particle placement. Caller picks radius/theta
// /phi (often via Math.random) and we return the world-space point.
let sphericalToCartesian = (~radius: float, ~theta: float, ~phi: float): vec3 => {
  x: radius *. Math.sin(phi) *. Math.cos(theta),
  y: radius *. Math.sin(phi) *. Math.sin(theta),
  z: radius *. Math.cos(phi),
}
