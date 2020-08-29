import { Rgba } from 'src/utils/getRgba'

/**
 * 颜色减淡
 *
 * @export
 * @param {Rgba} rgba
 * @param {Rgba} mixinRgba
 * @return {*}
 */
export function toDodgeColor(rgba: Rgba, mixinRgba: Rgba) {
  const R = rgba.R + (rgba.R * mixinRgba.R) / (255 - mixinRgba.R)
  const G = rgba.G + (rgba.G * mixinRgba.G) / (255 - mixinRgba.G)
  const B = rgba.B + (rgba.B * mixinRgba.B) / (255 - mixinRgba.B)

  return { R, G, B, A: rgba.A }
}
