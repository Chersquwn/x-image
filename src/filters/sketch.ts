import { getRgba } from 'src/utils/getRgba'
import { toGaussBlur } from 'src/formula/toGaussBlur'
import { toDodgeColor } from 'src/formula/toDodgeColor'
import { gray } from './gray'
import { invert } from './invert'

export function sketch(imageData: ImageData) {
  const { data, width, height } = imageData
  const copyImageData = new ImageData(
    Uint8ClampedArray.prototype.slice.apply(data),
    width,
    height
  )

  gray(copyImageData)

  const copyData = copyImageData.data

  invert(imageData)

  toGaussBlur(data, width, height, 10, 10)

  for (let i = 0; i < data.length; i += 4) {
    const rgba = getRgba(data, i)
    const copyRgba = getRgba(copyData, i)
    const originRgba = {
      R: copyRgba.R,
      G: copyRgba.R,
      B: copyRgba.R,
      A: copyRgba.A,
    }
    const mixinRgba = {
      R: rgba.R,
      G: rgba.R,
      B: rgba.R,
      A: rgba.A,
    }
    const { R, G, B } = toDodgeColor(originRgba, mixinRgba)

    data[i] = R
    data[i + 1] = G
    data[i + 2] = B
  }
}
