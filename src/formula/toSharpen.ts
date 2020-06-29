import { Rgba } from 'src/utils/getRgba'

export function toSharpen(rgba: Rgba, gaussRgba: Rgba, k: number = 0.6) {
  return {
    R: (rgba.R - k * gaussRgba.R) / (1 - k),
    G: (rgba.G - k * gaussRgba.G) / (1 - k),
    B: (rgba.B - k * gaussRgba.B) / (1 - k),
    A: rgba.A,
  }
}
