import { Rgba } from 'src/utils/getRgba'

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
