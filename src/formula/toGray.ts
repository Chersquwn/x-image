import { Uint8ClampedArrayToPixelArray } from 'src/utils/Uint8ClampedArrayToPixelArray'
import { PixelArrayToUint8ClampedArray } from 'src/utils/PixelArrayToUint8ClampedArray'

export function toGray(uintc8: Uint8ClampedArray) {
  const pixelArray = Uint8ClampedArrayToPixelArray(uintc8)

  const grayPixelArray = pixelArray.map(({ R, G, B, A }) => {
    const gray = 0.3 * R + 0.59 * G + 0.11 * B

    return {
      R: gray,
      G: gray,
      B: gray,
      A,
    }
  })

  return PixelArrayToUint8ClampedArray(grayPixelArray)
}
