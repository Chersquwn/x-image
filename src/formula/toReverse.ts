import { Rgba } from 'src/utils/getRgba'

export function toReverse({ R, G, B, A }: Rgba) {
  return {
    R: 255 - R,
    G: 255 - G,
    B: 255 - B,
    A,
  }
}
