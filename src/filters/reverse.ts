import { getRgba } from 'src/utils/getRgba'
import { toReverse } from 'src/formula/toReverse'

export function reverse(imageData: ImageData) {
  const data = imageData.data

  for (let i = 0; i < data.length; i += 4) {
    const rgba = getRgba(data, i)
    const { R, G, B } = toReverse(rgba)

    data[i] = R
    data[i + 1] = G
    data[i + 2] = B
  }
}
