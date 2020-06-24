import { Rgba } from 'src/utils/getRgba'

export function toGray({ R, G, B, A }: Rgba) {
  const gray = 0.3 * R + 0.59 * G + 0.11 * B

  return {
    R: gray,
    G: gray,
    B: gray,
    A,
  }
}
