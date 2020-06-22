import { Uint8ClampedArrayToPixelArray } from 'src/utils/Uint8ClampedArrayToPixelArray'
import { PixelArrayToUint8ClampedArray } from 'src/utils/PixelArrayToUint8ClampedArray'

export function toCasting(uintc8: Uint8ClampedArray) {
  const pixelArray = Uint8ClampedArrayToPixelArray(uintc8)

  const castingPixelArray = pixelArray.map(({ R, G, B, A }) => ({
    R: Math.min(255, (R * 128) / (G + B + 1)),
    G: Math.min(255, (G * 128) / (G + B + 1)),
    B: Math.min(255, (B * 128) / (G + R + 1)),
    A,
  }))

  return PixelArrayToUint8ClampedArray(castingPixelArray)
}
