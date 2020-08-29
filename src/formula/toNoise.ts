import { Rgba } from 'src/utils/getRgba'

/**
 * 生成高斯白噪声
 *
 * @export
 * @param {number} [mean=0.5]
 * @param {number} [sigma=1]
 * @return {*}
 */
export function generateGaussianNoise(mean: number = 0.5, sigma: number = 1) {
  let x1 = 0
  let x2 = 0
  let w = 0

  while (w === 0 || w >= 1) {
    x1 = Math.random() * 2 - 1
    x2 = Math.random() * 2 - 1
    w = x1 * x1 + x2 * x2
  }

  let c = Math.sqrt((-2 * Math.log(w)) / w)
  let y1 = x1 * c
  // let y2 = x2 * c

  return mean + y1 * sigma
}

/**
 * 噪声
 *
 * @export
 * @param {Rgba} rgba
 * @param {number} [mean=0]
 * @param {number} [sigma=1]
 * @param {number} [k=100]
 * @return {*}
 */
export function toNoise(
  rgba: Rgba,
  mean: number = 0,
  sigma: number = 1,
  k: number = 100
) {
  const noiseRgba = { ...rgba }
  // const noise = (0.5 - Math.random()) * k
  const noise = k * generateGaussianNoise(mean, sigma)

  Object.keys(rgba).forEach((channel) => {
    noiseRgba[channel] += noise
  })

  return noiseRgba
}
