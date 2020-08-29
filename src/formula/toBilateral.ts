// eslint-disable-next-line max-params
export function toBilateral(
  uintc8: Uint8ClampedArray,
  width: number,
  height: number,
  radius: number = 30,
  sigmaSpace: number = 20,
  sigmaColor: number = 50
) {
  const spaceArray = getSpaceArray(sigmaSpace, radius)
  const colorArray = getColorArray(sigmaColor)

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let i = (y * width + x) * 4
      let sum = 0
      // let r = 0
      // let g = 0
      // let b = 0

      for (let n = -radius; n <= radius; n++) {
        for (let m = -radius; m <= radius; m++) {
          let dx = x + m
          let dy = y + n
          let k = n + radius
          let l = m + radius

          if (dx < 0 || dx >= width || dy < 0 || dy >= height) continue

          let di = (dy * width + dx) * 4

          const value = Math.abs(
            uintc8[i] +
              uintc8[i + 1] +
              uintc8[i + 2] -
              uintc8[di] -
              uintc8[di + 1] -
              uintc8[di + 2]
          )
          sum += colorArray[value] * spaceArray[k][l]
        }
      }

      for (let n = -radius; n <= radius; n++) {
        for (let m = -radius; m <= radius; m++) {
          let dx = x + m
          let dy = y + n
          let k = n + radius
          let l = m + radius

          if (dx < 0 || dx >= width || dy < 0 || dy >= height) continue

          let di = (dy * width + dx) * 4

          let value = Math.abs(
            uintc8[i] +
              uintc8[i + 1] +
              uintc8[i + 2] -
              uintc8[di] -
              uintc8[di + 1] -
              uintc8[di + 2]
          )
          let weight = (colorArray[value] * spaceArray[k][l]) / sum

          uintc8[i] += Math.floor(uintc8[di] * weight)
          uintc8[i + 1] += Math.floor(uintc8[di + 1] * weight)
          uintc8[i + 2] += Math.floor(uintc8[di + 2] * weight)
        }
      }

      // uintc8[i] = r
      // uintc8[i + 1] = g
      // uintc8[i + 2] = b
    }
  }
}

function getColorArray(sigmaColor: number, channels: number = 4) {
  const colorArray = []
  const length = 255 * channels + 1

  for (let i = 0; i < length; i++) {
    colorArray[i] = Math.exp((-1 * (i * i)) / (2 * (sigmaColor * sigmaColor)))
    // colorArray[length] += colorArray[i]
  }

  return colorArray
}

function getSpaceArray(sigmaSpace: number, radius: number) {
  const length = 2 * radius + 1
  const spaceArray = Array.from({ length: length + 1 }, () =>
    Array.from({ length }, () => 0)
  )

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      spaceArray[i][j] = Math.exp(
        (-1 * ((i - radius) * (i - radius) + (j - radius) * (j - radius))) /
          (2 * (sigmaSpace * sigmaSpace))
      )
      // spaceArray[length][0] += spaceArray[i][j]
    }
  }

  return spaceArray
}
