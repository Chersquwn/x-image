import { Rgba } from 'src/utils/getRgba'

/**
 * 熔铸
 *
 * @export
 * @param {Rgba} { R, G, B, A }
 * @return {*}
 */
export function toCasting({ R, G, B, A }: Rgba) {
  return {
    R: Math.min(255, (R * 128) / (G + B + 1)),
    G: Math.min(255, (G * 128) / (G + B + 1)),
    B: Math.min(255, (B * 128) / (G + R + 1)),
    A,
  }
}
