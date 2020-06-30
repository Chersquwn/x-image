import { toFog } from 'src/formula/toFog'

export function fog(imageData: ImageData) {
  const { data, width, height } = imageData

  toFog(data, width, height)
}
