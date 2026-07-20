// Globális "csökkentett mozgás" preferencia — animáció-hookok közös kapcsolója.
export const prefersReducedMotion =
  typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion:reduce)').matches

// "Lite mód" — gyenge eszközön (kevés CPU-mag/RAM) a nehéz effektek kikapcsolása.
// Az osztályt az index.html-ben lévő korai szkript teszi a <html>-re; itt csak olvassuk.
export const liteMode =
  typeof document !== 'undefined' && document.documentElement.classList.contains('lite')
