import { Uint8ClampedArrayToPixelArray } from 'src/utils/Uint8ClampedArrayToPixelArray'
import { PixelArrayToUint8ClampedArray } from 'src/utils/PixelArrayToUint8ClampedArray'

export function toBlackWhite(uintc8: Uint8ClampedArray) {
  const pixelArray = Uint8ClampedArrayToPixelArray(uintc8)

  const blackWhitePixelArray = pixelArray.map(({ R, G, B, A }) => {
    const avg = (R + G + B) / 3
    const com = avg >= 100 ? 255 : 0

    return {
      R: com,
      G: com,
      B: com,
      A,
    }
  })

  return PixelArrayToUint8ClampedArray(blackWhitePixelArray)
}
