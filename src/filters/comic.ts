import { getRgba } from 'src/utils/getRgba'
import { toComic } from 'src/formula/toComic'

export function comic(imageData: ImageData) {
  const data = imageData.data

  for (let i = 0; i < data.length; i += 4) {
    const rgba = getRgba(data, i)
    const { R, G, B } = toComic(rgba)

    data[i] = R
    data[i + 1] = G
    data[i + 2] = B
  }
}
