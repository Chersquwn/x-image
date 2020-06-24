import { getRgba } from 'src/utils/getRgba'
import { toEmboss } from 'src/formula/toEmboss'

export function emboss(imageData: ImageData) {
  const data = imageData.data
  const copyData = Uint8ClampedArray.from(data)

  for (let i = 0; i < data.length; i += 4) {
    if (i === 0) continue

    const rgba = getRgba(data, i)
    const preRgba = getRgba(copyData, i - 4)
    const { R, G, B } = toEmboss(rgba, preRgba)

    data[i] = R
    data[i + 1] = G
    data[i + 2] = B
  }
}
