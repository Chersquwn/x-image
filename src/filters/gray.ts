import { getRgba } from 'src/utils/getRgba'
import { toGray } from 'src/formula/toGray'

export function gray(imageData: ImageData) {
  const data = imageData.data

  for (let i = 0; i < data.length; i += 4) {
    const rgba = getRgba(data, i)
    const { R, G, B } = toGray(rgba)

    data[i] = R
    data[i + 1] = G
    data[i + 2] = B
  }
}
