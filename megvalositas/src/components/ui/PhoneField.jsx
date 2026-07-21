import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import 'react-phone-number-input/style.css'

// A telefon-mező külön, lazy-töltött chunkban: a react-phone-number-input és a
// zászló-SVG-k így nem terhelik az űrlapoldal kezdeti bundle-jét, csak akkor
// töltődnek be, amikor a form megjelenik.
export default function PhoneField(props) {
  return <PhoneInput international defaultCountry="HU" flags={flags} {...props} />
}
