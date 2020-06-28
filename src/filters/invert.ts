import { getRgba } from 'src/utils/getRgba'
import { toInvert } from 'src/formula/toinvert'

export function invert(imageData: ImageData) {
  const data = imageData.data

  for (let i = 0; i < data.length; i += 4) {
    const rgba = getRgba(data, i)
    const { R, G, B } = toInvert(rgba)

    data[i] = R
    data[i + 1] = G
    data[i + 2] = B
  }
}
