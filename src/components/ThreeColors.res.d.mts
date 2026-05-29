export type Hsl = {
  readonly hue: number;
  readonly saturation: number;
  readonly lightness: number;
};

export function miniShapeColor(rand1: number, rand2: number): Hsl;
export function miniBloodColor(rand: number): Hsl;
export function inkColor(bucketRand: number, rand1: number, rand2: number): Hsl;
export function bgShapeColor(rand: number): Hsl;
