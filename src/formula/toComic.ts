// import { Uint8ClampedArrayToPixelArray } from 'src/utils/Uint8ClampedArrayToPixelArray'
import { Rgba } from 'src/utils/getRgba'

export function toComic({ R, G, B, A }: Rgba) {
  return {
    R: (Math.abs(G - B + G + R) * R) / 256,
    G: (Math.abs(B - G + B + R) * R) / 256,
    B: (Math.abs(B - G + B + R) * G) / 256,
    A,
  }
}
