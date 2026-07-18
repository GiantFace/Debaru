// Kép-helykitöltő az eredeti <image-slot> web-komponens helyett.
// `src` megadásakor a képet jeleníti meg, különben a leíró placeholder szöveget.
export function ImageSlot({ src, alt = '', placeholder = '', className = '' }) {
  return (
    <div className={['img-slot', className].filter(Boolean).join(' ')}>
      {src ? <img src={src} alt={alt} /> : <span>{placeholder}</span>}
    </div>
  )
}
