import { Pixel } from './Uint8ClampedArrayToPixelArray'

export function PixelArrayToUint8ClampedArray(pixelArray: Pixel[]) {
  const uint8ClampedArray = new Uint8ClampedArray(pixelArray.length * 4)

  for (let i = 0; i < pixelArray.length; i++) {
    Object.keys(pixelArray[i]).forEach((key, index) => {
      uint8ClampedArray[i * 4 + index] = pixelArray[i][key]
    })
  }

  return uint8ClampedArray
}
