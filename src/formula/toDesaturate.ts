import { Uint8ClampedArrayToPixelArray } from 'src/utils/Uint8ClampedArrayToPixelArray'
import { PixelArrayToUint8ClampedArray } from 'src/utils/PixelArrayToUint8ClampedArray'

export function toDesaturate(uintc8: Uint8ClampedArray) {
  const pixelArray = Uint8ClampedArrayToPixelArray(uintc8)

  const desaturatePixelArray = pixelArray.map(({ R, G, B, A }) => {
    const max = Math.max(R, G, B)
    const min = Math.min(R, G, B)
    const avg = Math.floor((max + min) / 2)

    return {
      R: avg,
      G: avg,
      B: avg,
      A,
    }
  })

  return PixelArrayToUint8ClampedArray(desaturatePixelArray)
}
