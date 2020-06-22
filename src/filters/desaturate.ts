import { toDesaturate } from 'src/formula/toDesaturate'

export function desaturate(imageData: ImageData) {
  const data = imageData.data

  const desaturatedData = toDesaturate(data)

  desaturatedData.forEach((component, i) => (data[i] = component))
}
