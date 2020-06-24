import { blobToFile } from './blobToFile'

export function dataUrlToFile(dataUrl: string, filename: string = 'image') {
  let data = dataUrl
  let mime = 'image/png'

  if (/data:[/\w]+;base64,/.test(dataUrl)) {
    const arr = data.split(',')

    mime = arr[0].match(/:(.*?);/)![1]
    data = arr[1]
  }

  const bstr = atob(data)
  const n = bstr.length
  const u8arr = new Uint8Array(n).map((value, index) => bstr.charCodeAt(index))
  let file: File

  if (File) {
    file = new File([u8arr], filename, { type: mime })
  } else {
    const blob = new Blob([u8arr], { type: mime })

    file = blobToFile(blob, filename)
  }

  return file
}
