export function toGaussBlur(
  uintc8: Uint8ClampedArray,
  width: number,
  height: number,
  radius: number = 3,
  sigma: number = radius / 3
) {
  const gaussMatrix = []
  let gaussSum = 0
  let x
  let y
  let r
  let g
  let b
  let a
  let i
  let j
  let k
  let len

  a = 1 / (Math.sqrt(2 * Math.PI) * sigma)
  b = -1 / (2 * sigma * sigma)

  //生成高斯矩阵
  for (i = 0, x = -radius; x <= radius; x++, i++) {
    g = a * Math.exp(b * x * x)
    gaussMatrix[i] = g
    gaussSum += g
  }

  //归一化, 保证高斯矩阵的值在[0,1]之间
  for (i = 0, len = gaussMatrix.length; i < len; i++) {
    gaussMatrix[i] /= gaussSum
  }

  //x 方向一维高斯运算
  for (y = 0; y < height; y++) {
    for (x = 0; x < width; x++) {
      r = g = b = a = 0
      gaussSum = 0

      for (j = -radius; j <= radius; j++) {
        k = x + j

        if (k >= 0 && k < width) {
          //确保 k 没超出 x 的范围
          //r,g,b,a 四个一组
          i = (y * width + k) * 4
          r += uintc8[i] * gaussMatrix[j + radius]
          g += uintc8[i + 1] * gaussMatrix[j + radius]
          b += uintc8[i + 2] * gaussMatrix[j + radius]
          // a += uintc8[i + 3] * gaussMatrix[j];
          gaussSum += gaussMatrix[j + radius]
        }
      }

      i = (y * width + x) * 4
      // 除以 gaussSum 是为了消除处于边缘的像素, 高斯运算不足的问题
      // console.log(gaussSum)
      uintc8[i] = r / gaussSum
      uintc8[i + 1] = g / gaussSum
      uintc8[i + 2] = b / gaussSum
    }
  }

  //y 方向一维高斯运算
  for (x = 0; x < width; x++) {
    for (y = 0; y < height; y++) {
      r = g = b = a = 0
      gaussSum = 0

      for (j = -radius; j <= radius; j++) {
        k = y + j
        if (k >= 0 && k < height) {
          //确保 k 没超出 y 的范围
          i = (k * width + x) * 4
          r += uintc8[i] * gaussMatrix[j + radius]
          g += uintc8[i + 1] * gaussMatrix[j + radius]
          b += uintc8[i + 2] * gaussMatrix[j + radius]
          // a += uintc8[i + 3] * gaussMatrix[j];
          gaussSum += gaussMatrix[j + radius]
        }
      }

      i = (y * width + x) * 4
      uintc8[i] = r / gaussSum
      uintc8[i + 1] = g / gaussSum
      uintc8[i + 2] = b / gaussSum
    }
  }

  return uintc8
}
