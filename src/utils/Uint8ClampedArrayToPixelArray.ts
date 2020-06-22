export interface Pixel {
  R: number
  G: number
  B: number
  A: number
}

export function Uint8ClampedArrayToPixelArray(uintc8: Uint8ClampedArray) {
  const pixelArray: Pixel[] = []

  for (let i = 0; i < uintc8.length; i += 4) {
    const pixel = {
      R: uintc8[i],
      G: uintc8[i + 1],
      B: uintc8[i + 2],
      A: uintc8[i + 3],
    }

    pixelArray.push(pixel)
  }

  return pixelArray
}
