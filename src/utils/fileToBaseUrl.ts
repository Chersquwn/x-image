export async function fileToBaseURL(file: File) {
  return new Promise<string>((resolve, reject) => {
    if (!file || !file.type.includes('image')) {
      return reject(new Error(`${file} is not an image.`))
    }

    const fileReader = new FileReader()

    fileReader.addEventListener('load', (e) => {
      const url = URL.createObjectURL(e.target?.result)

      resolve(url)
    })

    fileReader.addEventListener('error', (e) => {
      reject(e)
    })

    fileReader.readAsDataURL(file)
  })
}
