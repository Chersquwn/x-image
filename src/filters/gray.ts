import { toGray } from 'src/formula/toGray'

export function gray(imageData: ImageData) {
  const data = imageData.data
  const grayData = toGray(data)

  grayData.forEach((component, i) => (data[i] = component))
}
