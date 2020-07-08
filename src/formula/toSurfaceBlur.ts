// eslint-disable-next-line max-params
export function toSurfaceBlur(
  uintc8: Uint8ClampedArray,
  width: number,
  height: number,
  radius: number = 3,
  threshold: number = 35
) {
  if (radius < 1 || radius > 100 || threshold < 2 || threshold > 255) return

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4
      let numR = 0
      let numG = 0
      let numB = 0
      // let numA = 0
      let denoR = 0
      let denoG = 0
      let denoB = 0
      // let denoA = 0

      for (let n = -radius; n <= radius; n++) {
        for (let m = -radius; m <= radius; m++) {
          let dx = x + m
          let dy = y + n

          if (dx < 0 || dx >= width || dy < 0 || dy >= height) continue

          const di = (dy * width + dx) * 4

          const kr = 1 - Math.abs(uintc8[di] - uintc8[i]) / (2.5 * threshold)
          const kg =
            1 - Math.abs(uintc8[di + 1] - uintc8[i + 1]) / (2.5 * threshold)
          const kb =
            1 - Math.abs(uintc8[di + 2] - uintc8[i + 2]) / (2.5 * threshold)
          // const ka =
          //   1 - Math.abs(uintc8[di + 3] - uintc8[i + 3]) / (2.5 * threshold)

          numR += kr * uintc8[di]
          numG += kg * uintc8[di + 1]
          numB += kb * uintc8[di + 2]
          // numA += ka * uintc8[di + 3]
          denoR += kr
          denoG += kg
          denoB += kb
          // denoA += ka
        }
      }

      const R = (numR / denoR) >> 0
      const G = (numG / denoG) >> 0
      const B = (numB / denoB) >> 0
      // const A = (numA / denoA) >> 0

      // uintc8[i] = Math.min(R, 255)
      // uintc8[i + 1] = Math.min(G, 255)
      // uintc8[i + 2] = Math.min(B, 255)
      // uintc8[i + 3] = Math.min(A, 255)
      uintc8[i] = R < 255 && R > 0 ? R : uintc8[i]
      uintc8[i + 1] = G < 255 && G > 0 ? G : uintc8[i + 1]
      uintc8[i + 2] = B < 255 && B > 0 ? B : uintc8[i + 2]
      // uintc8[i + 3] = A < 255 && A > 0 ? A : uintc8[i + 3]
    }
  }
}
