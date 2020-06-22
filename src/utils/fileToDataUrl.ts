export async function fileToDataUrl(file: File) {
  const fileReader = new FileReader()

  fileReader.addEventListener('load', (e) => {
    Promise.resolve(e.target?.result)
  })
  fileReader.addEventListener('error', (e) => {
    Promise.reject(e)
  })
  fileReader.readAsDataURL(file)
}
