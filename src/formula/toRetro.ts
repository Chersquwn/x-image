import { Uint8ClampedArrayToPixelArray } from 'src/utils/Uint8ClampedArrayToPixelArray'
import { PixelArrayToUint8ClampedArray } from 'src/utils/PixelArrayToUint8ClampedArray'

export function toRetro(uintc8: Uint8ClampedArray) {
  const pixelArray = Uint8ClampedArrayToPixelArray(uintc8)

  const retroPixelArray = pixelArray.map(({ R, G, B, A }) => ({
    R: Math.min(255, 0.393 * R + 0.769 * G + 0.189 * B),
    G: Math.min(255, 0.349 * R + 0.686 * G + 0.168 * B),
    B: Math.min(255, 0.272 * R + 0.534 * G + 0.131 * B),
    A,
  }))

  return PixelArrayToUint8ClampedArray(retroPixelArray)
}
