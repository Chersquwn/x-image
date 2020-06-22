import { toCasting } from 'src/formula/toCasting'

export function casting(imageData: ImageData) {
  const data = imageData.data

  const castingData = toCasting(data)

  castingData.forEach((component, i) => (data[i] = component))
}
