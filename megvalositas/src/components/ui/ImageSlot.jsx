// Kép-helykitöltő az eredeti <image-slot> web-komponens helyett.
// `src` megadásakor a képet jeleníti meg, különben a leíró placeholder szöveget.
// ⚠️ ELŐNÉZET: ha nincs valódi `src`, de a placeholderhez tartozik ideiglenes
// stock fotó (data/stockPhotos.js), azt mutatjuk. Kikapcsolás: állítsd a
// STOCK_PHOTOS_ENABLED-et false-ra, vagy töröld a stockPhotos.js-t és az alábbi
// import + `preview` sort.
import { STOCK_PHOTOS_ENABLED, stockPhotos } from '../../data/stockPhotos.js'

export function ImageSlot({ src, alt = '', placeholder = '', className = '' }) {
  const preview = !src && STOCK_PHOTOS_ENABLED ? stockPhotos[placeholder] : null
  const img = src || preview
  return (
    <div className={['img-slot', img && 'has-img', className].filter(Boolean).join(' ')}>
      {img
        ? <img src={img} alt={alt || placeholder} loading="lazy" decoding="async" />
        : <span>{placeholder}</span>}
    </div>
  )
}
