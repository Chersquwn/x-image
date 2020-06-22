import * as filters from './filters'

export type FilterType = keyof typeof filters

export interface XImageFilters {
  [key: string]: FilterHandler
}

export type FilterHandler = (imageData: ImageData) => void

export class XImage {
  private static filters: XImageFilters = { ...filters }

  public static addFilter(name: string, filterHandler: FilterHandler) {
    if (typeof filterHandler !== 'function')
      throw new Error('FilterHandler is not a function.')

    filters[name] = filterHandler
  }

  public static useFilter(name: FilterType | string, imageData: ImageData) {
    if (!XImage.filters[name]) throw new Error(`${name} filter is not found.`)

    XImage.filters[name](imageData)
  }
}
