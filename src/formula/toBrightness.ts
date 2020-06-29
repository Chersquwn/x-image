import { Rgba } from 'src/utils/getRgba'

export function toBrightness(rgba: Rgba, k: number) {
  const R = rgba.R + k
  const G = rgba.G + k
  const B = rgba.B + k

  return {
    R: R > 255 ? 255 : R < 0 ? 0 : R,
    G: G > 255 ? 255 : G < 0 ? 0 : G,
    B: B > 255 ? 255 : B < 0 ? 0 : B,
    A: rgba.A,
  }
}
