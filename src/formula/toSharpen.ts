import { Rgba } from 'src/utils/getRgba'

/**
 * 锐化
 *
 * @export
 * @param {Rgba} rgba
 * @param {Rgba} gaussRgba
 * @param {number} [k=0.6]
 * @return {*}
 */
export function toSharpen(rgba: Rgba, gaussRgba: Rgba, k: number = 0.6) {
  return {
    R: (rgba.R - k * gaussRgba.R) / (1 - k),
    G: (rgba.G - k * gaussRgba.G) / (1 - k),
    B: (rgba.B - k * gaussRgba.B) / (1 - k),
    A: rgba.A,
  }
}
