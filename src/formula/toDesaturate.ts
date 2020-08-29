import { Rgba } from 'src/utils/getRgba'

/**
 * 去饱和度
 *
 * @export
 * @param {Rgba} { R, G, B, A }
 * @return {*}
 */
export function toDesaturate({ R, G, B, A }: Rgba) {
  const max = Math.max(R, G, B)
  const min = Math.min(R, G, B)
  const avg = Math.floor((max + min) / 2)

  return {
    R: avg,
    G: avg,
    B: avg,
    A,
  }
}
