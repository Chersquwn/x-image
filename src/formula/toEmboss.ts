import { Rgba } from 'src/utils/getRgba'
import { toGray } from './toGray'

/**
 * 浮雕
 *
 * @export
 * @param {Rgba} rgba
 * @param {Rgba} preRgba
 * @return {*}
 */
export function toEmboss(rgba: Rgba, preRgba: Rgba) {
  const pixel = {
    R: rgba.R - preRgba.R + 128,
    G: rgba.G - preRgba.G + 128,
    B: rgba.B - preRgba.B + 128,
    A: rgba.A,
  }

  return toGray(pixel)
}
