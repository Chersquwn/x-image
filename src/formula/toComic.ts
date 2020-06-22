import { Uint8ClampedArrayToPixelArray } from 'src/utils/Uint8ClampedArrayToPixelArray'
import { PixelArrayToUint8ClampedArray } from 'src/utils/PixelArrayToUint8ClampedArray'

export function toComic(uintc8: Uint8ClampedArray) {
  const pixelArray = Uint8ClampedArrayToPixelArray(uintc8)

  const comicPixelArray = pixelArray.map(({ R, G, B, A }) => ({
    R: (Math.abs(G - B + G + R) * R) / 256,
    G: (Math.abs(B - G + B + R) * R) / 256,
    B: (Math.abs(B - G + B + R) * G) / 256,
    A,
  }))

  return PixelArrayToUint8ClampedArray(comicPixelArray)
}
