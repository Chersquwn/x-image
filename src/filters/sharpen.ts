import { gaussBlur } from './gaussBlur'
import { getRgba } from 'src/utils/getRgba'
import { toSharpen } from 'src/formula/toSharpen'

export function sharpen(imageData: ImageData) {
  const { data, width, height } = imageData
  const copyImageData = new ImageData(
    Uint8ClampedArray.prototype.slice.apply(data),
    width,
    height
  )
  const copyData = copyImageData.data

  gaussBlur(copyImageData)

  for (let i = 0; i < data.length; i += 4) {
    const rgba = getRgba(data, i)
    const gaussRgba = getRgba(copyData, i)
    const { R, G, B } = toSharpen(rgba, gaussRgba)

    data[i] = R
    data[i + 1] = G
    data[i + 2] = B
  }
}
