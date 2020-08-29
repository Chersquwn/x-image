import { toBilateral } from 'src/formula/toBilateral'

export function bilateral(imageData: ImageData) {
  const data = imageData.data

  toBilateral(data, imageData.width, imageData.height)
}
