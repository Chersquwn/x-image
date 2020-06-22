import { Uint8ClampedArrayToPixelArray } from 'src/utils/Uint8ClampedArrayToPixelArray'
import { toGray } from './toGray'
import { PixelArrayToUint8ClampedArray } from 'src/utils/PixelArrayToUint8ClampedArray'

export function toEmboss(uintc8: Uint8ClampedArray) {
  const pixelArray = Uint8ClampedArrayToPixelArray(uintc8)

  const embossPixelArray = pixelArray.map(({ R, G, B, A }, index) => {
    if (index === 0) {
      return { R, G, B, A }
    }

    const prePixel = pixelArray[index - 1]

    return {
      R: R - prePixel.R + 128,
      G: G - prePixel.G + 128,
      B: B - prePixel.B + 128,
      A,
    }
  })

  return toGray(PixelArrayToUint8ClampedArray(embossPixelArray))
}
