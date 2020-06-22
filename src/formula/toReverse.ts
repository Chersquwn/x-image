import { Uint8ClampedArrayToPixelArray } from 'src/utils/Uint8ClampedArrayToPixelArray'
import { PixelArrayToUint8ClampedArray } from 'src/utils/PixelArrayToUint8ClampedArray'

export function toReverse(uintc8: Uint8ClampedArray) {
  const pixelArray = Uint8ClampedArrayToPixelArray(uintc8)

  const reversePixelArray = pixelArray.map(({ R, G, B, A }) => ({
    R: 255 - R,
    G: 255 - G,
    B: 255 - B,
    A,
  }))

  return PixelArrayToUint8ClampedArray(reversePixelArray)
}
