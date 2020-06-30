import { getRgba } from 'src/utils/getRgba'
import { toContrast } from 'src/formula/toContrast'

export function contrast(imageData: ImageData) {
  const data = imageData.data

  for (let i = 0; i < data.length; i += 4) {
    const rgba = getRgba(data, i)
    const { R, G, B } = toContrast(rgba)

    data[i] = R
    data[i + 1] = G
    data[i + 2] = B
  }
}
