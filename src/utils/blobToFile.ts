export function blobToFile(blob: Blob, filename: string): File {
  const file = blob as any
  const date = new Date()

  file.name = filename
  file.lastModifiedDate = date
  file.lastModified = date.getTime()

  return file
}
