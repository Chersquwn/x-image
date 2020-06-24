import { Rgba } from 'src/utils/getRgba'

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
