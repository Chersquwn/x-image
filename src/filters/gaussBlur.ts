import { toGaussBlur } from 'src/formula/toGaussBlur'

export function gaussBlur(imageData: ImageData) {
  const data = imageData.data

  const gaussBlurData = toGaussBlur(data, imageData.width, imageData.height)

  gaussBlurData.forEach((component, i) => (data[i] = component))
}
