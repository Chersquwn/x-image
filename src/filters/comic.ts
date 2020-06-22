import { toComic } from 'src/formula/toComic'

export function comic(imageData: ImageData) {
  const data = imageData.data

  const comicData = toComic(data)

  comicData.forEach((component, i) => (data[i] = component))
}
