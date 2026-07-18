import { Link } from 'react-router-dom'
import { Arrow } from './Icons.jsx'

// Globális gomb. Variánsok: primary | ghost | outline-light (vagy null = sima .btn).
// `to` → belső route (Link), `href` → külső/anchor (<a>), egyik sem → <button>.
export function Button({ variant = 'primary', to, href, arrow = false, children, className = '', ...rest }) {
  const cls = ['btn', variant && `btn-${variant}`, arrow && 'btn-arrow', className].filter(Boolean).join(' ')
  const inner = <>{children}{arrow && <Arrow />}</>
  if (to) return <Link className={cls} to={to} {...rest}>{inner}</Link>
  if (href) return <a className={cls} href={href} {...rest}>{inner}</a>
  return <button className={cls} {...rest}>{inner}</button>
}
