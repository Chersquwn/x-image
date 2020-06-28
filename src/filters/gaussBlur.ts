import { toGaussBlur } from 'src/formula/toGaussBlur'

export function gaussBlur(imageData: ImageData) {
  const data = imageData.data

  toGaussBlur(data, imageData.width, imageData.height)
}
