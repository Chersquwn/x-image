/**
 * 雾化
 *
 * @export
 * @param {Uint8ClampedArray} uintc8
 * @param {number} width
 * @param {number} height
 * @param {number} [v=6]
 */
export function toFog(
  uintc8: Uint8ClampedArray,
  width: number,
  height: number,
  v: number = 6
) {
  const copyUintc8 = Uint8ClampedArray.prototype.slice.apply(uintc8)

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const k = Math.floor(Math.random() * v)
      let dx = x + k
      let dy = y + k

      if (dx >= width) dx = width - 1
      if (dy >= height) dy = height - 1

      const i = (y * width + x) * 4
      const di = (dy * width + dx) * 4

      uintc8[i] = copyUintc8[di]
      uintc8[i + 1] = copyUintc8[di + 1]
      uintc8[i + 2] = copyUintc8[di + 2]
    }
  }
}
