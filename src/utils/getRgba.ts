export interface Rgba {
  R: number
  G: number
  B: number
  A: number
}

export function getRgba(uintc8: Uint8ClampedArray, i: number): Rgba {
  const R = uintc8[i]
  const G = uintc8[i + 1]
  const B = uintc8[i + 2]
  const A = uintc8[i + 3]

  return { R, G, B, A }
}
