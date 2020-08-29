import { Rgba } from 'src/utils/getRgba'

/**
 * 黑白
 *
 * @export
 * @param {Rgba} { R, G, B, A }
 * @return {*}
 */
export function toBlackWhite({ R, G, B, A }: Rgba) {
  const avg = (R + G + B) / 3
  const com = avg >= 128 ? 255 : 0

  return {
    R: com,
    G: com,
    B: com,
    A,
  }
}
