import { Rgba } from 'src/utils/getRgba'

export function toSepia({ R, G, B, A }: Rgba) {
  return {
    R: Math.min(255, 0.393 * R + 0.769 * G + 0.189 * B),
    G: Math.min(255, 0.349 * R + 0.686 * G + 0.168 * B),
    B: Math.min(255, 0.272 * R + 0.534 * G + 0.131 * B),
    A,
  }
}
