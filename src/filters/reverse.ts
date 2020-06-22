import { toReverse } from 'src/formula/toReverse'

export function reverse(imageData: ImageData) {
  const data = imageData.data

  const reverseData = toReverse(data)

  reverseData.forEach((component, i) => (data[i] = component))
}
