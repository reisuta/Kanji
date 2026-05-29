export type Vec3 = { readonly x: number; readonly y: number; readonly z: number };

export type FrameTransform = {
  readonly rotationDeltaX: number;
  readonly rotationDeltaY: number;
  readonly rotationDeltaZ: number;
  readonly positionDeltaX: number;
  readonly positionDeltaY: number;
  readonly positionDeltaZ: number;
  readonly scale: number;
};

export function miniShapeFrame(time: number, index: number): FrameTransform;

export type MiniLightFrame = {
  readonly light1X: number;
  readonly light1Y: number;
  readonly light1Intensity: number;
  readonly light2X: number;
  readonly light2Z: number;
};

export function miniLightFrame(time: number): MiniLightFrame;

export function bgShapeFrame(time: number, index: number): FrameTransform;
export function bgBrushStrokeX(time: number): number;

export type BgCameraFrame = { readonly x: number; readonly y: number };

export function bgCameraFrame(time: number): BgCameraFrame;

export function brushCurvePoint(t: number): Vec3;
export function brushCurvePoints(count: number): Vec3[];

export function sphericalToCartesian(
  radius: number,
  theta: number,
  phi: number,
): Vec3;
