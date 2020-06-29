import { getRgba } from 'src/utils/getRgba'
import { toBrightness } from 'src/formula/toBrightness'

export function brightness(imageData: ImageData) {
  const data = imageData.data

  for (let i = 0; i < data.length; i += 4) {
    const rgba = getRgba(data, i)
    const { R, G, B } = toBrightness(rgba, 80)

    data[i] = R
    data[i + 1] = G
    data[i + 2] = B
  }
}
