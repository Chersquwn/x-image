import { toRetro } from 'src/formula/toRetro'

export function retro(imageData: ImageData) {
  const data = imageData.data

  const retroData = toRetro(data)

  retroData.forEach((component, i) => (data[i] = component))
}
