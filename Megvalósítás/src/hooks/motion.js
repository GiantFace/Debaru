// Globális "csökkentett mozgás" preferencia — animáció-hookok közös kapcsolója.
export const prefersReducedMotion =
  typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion:reduce)').matches
