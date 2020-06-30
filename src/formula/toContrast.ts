import { Rgba } from 'src/utils/getRgba'

export function toContrast({ R, G, B, A }: Rgba, k: number = 0.6) {
  return {
    R: (R - 128) * k + R,
    G: (G - 128) * k + G,
    B: (B - 128) * k + B,
    A,
  }
}
