import { toEmboss } from 'src/formula/toEmboss'

export function emboss(imageData: ImageData) {
  const data = imageData.data

  const embossData = toEmboss(data)

  embossData.forEach((component, i) => (data[i] = component))
}
