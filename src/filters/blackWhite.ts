import { toBlackWhite } from 'src/formula/toBlackWhite'

export function blackWhite(imageData: ImageData) {
  const data = imageData.data
  const blackWhiteData = toBlackWhite(data)

  blackWhiteData.forEach((component, i) => (data[i] = component))
}
