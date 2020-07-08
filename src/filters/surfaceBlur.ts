import { toSurfaceBlur } from 'src/formula/toSurfaceBlur'

export function surfaceBlur(imageData: ImageData) {
  const data = imageData.data

  toSurfaceBlur(data, imageData.width, imageData.height)
}
