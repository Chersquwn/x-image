import { Rgba } from 'src/utils/getRgba'

/**
 * 负片
 *
 * @export
 * @param {Rgba} { R, G, B, A }
 * @return {*}
 */
export function toInvert({ R, G, B, A }: Rgba) {
  return {
    R: 255 - R,
    G: 255 - G,
    B: 255 - B,
    A,
  }
}
