import { Layer } from 'src'

const $origin = document.getElementById('origin') as HTMLImageElement
const $blackWhite = document.getElementById('blackWhite') as HTMLImageElement
const $casting = document.getElementById('casting') as HTMLImageElement
const $comic = document.getElementById('comic') as HTMLImageElement
const $desaturate = document.getElementById('desaturate') as HTMLImageElement
const $emboss = document.getElementById('emboss') as HTMLImageElement
const $gaussBlur = document.getElementById('gaussBlur') as HTMLImageElement
const $gray = document.getElementById('gray') as HTMLImageElement
const $sepia = document.getElementById('sepia') as HTMLImageElement
const $invert = document.getElementById('invert') as HTMLImageElement
const $sketch = document.getElementById('sketch') as HTMLImageElement
const $noise = document.getElementById('noise') as HTMLImageElement

const width = $origin.width
const height = $origin.height

$blackWhite.src = new Layer(width, height)
  .draw($origin)
  .filter('blackWhite')
  .toDataUrl()

$casting.src = new Layer(width, height)
  .draw($origin)
  .filter('casting')
  .toDataUrl()

$comic.src = new Layer(width, height).draw($origin).filter('comic').toDataUrl()

$desaturate.src = new Layer(width, height)
  .draw($origin)
  .filter('desaturate')
  .toDataUrl()

$emboss.src = new Layer(width, height)
  .draw($origin)
  .filter('emboss')
  .toDataUrl()

$gaussBlur.src = new Layer(width, height)
  .draw($origin)
  .filter('gaussBlur')
  .toDataUrl()

$gray.src = new Layer(width, height).draw($origin).filter('gray').toDataUrl()

$sepia.src = new Layer(width, height).draw($origin).filter('sepia').toDataUrl()

$invert.src = new Layer(width, height)
  .draw($origin)
  .filter('invert')
  .toDataUrl()

$sketch.src = new Layer(width, height)
  .draw($origin)
  .filter('sketch')
  .toDataUrl()

$noise.src = new Layer(width, height)
  .draw($origin)
  // .filter('gray')
  .filter('noise')
  .toDataUrl()
