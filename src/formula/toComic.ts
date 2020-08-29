import { Rgba } from 'src/utils/getRgba'

/**
 * 连环画
 *
 * @export
 * @param {Rgba} { R, G, B, A }
 * @return {*}
 */
export function toComic({ R, G, B, A }: Rgba) {
  return {
    R: (Math.abs(G - B + G + R) * R) / 256,
    G: (Math.abs(B - G + B + R) * R) / 256,
    B: (Math.abs(B - G + B + R) * G) / 256,
    A,
  }
}
