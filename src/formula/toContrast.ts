import { Rgba } from 'src/utils/getRgba'

/**
 * 调整对比度
 *
 * @export
 * @param {Rgba} { R, G, B, A }
 * @param {number} [k=0.6]
 * @return {*}
 */
export function toContrast({ R, G, B, A }: Rgba, k: number = 0.6) {
  return {
    R: (R - 128) * k + R,
    G: (G - 128) * k + G,
    B: (B - 128) * k + B,
    A,
  }
}
