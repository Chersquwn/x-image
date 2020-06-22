import { FilterType, XImage } from './XImage'

export class Layer {
  // public canvas: OffscreenCanvas

  // public context: OffscreenCanvasRenderingContext2D

  public canvas: HTMLCanvasElement

  public context: CanvasRenderingContext2D

  public constructor(width: number, height: number) {
    // this.canvas = new OffscreenCanvas(width, height)
    this.canvas = document.createElement('canvas')
    this.context = this.canvas.getContext('2d')!

    this.canvas.width = width
    this.canvas.height = height
  }

  public getImageData() {
    return this.context.getImageData(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    )
  }

  public filter(name: FilterType) {
    const imageData = this.getImageData()

    XImage.useFilter(name, imageData)

    this.context.putImageData(imageData, 0, 0)

    return this
  }

  public draw(img: HTMLImageElement) {
    this.context.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)

    return this
  }

  public toDataUrl() {
    return this.canvas.toDataURL()
  }
}
