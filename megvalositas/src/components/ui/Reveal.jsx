import { Children, cloneElement, isValidElement, useEffect, useState } from 'react'
import { useInView } from '../../hooks/useInView.js'
import { prefersReducedMotion } from '../../hooks/motion.js'

// Egy elem belépő fade/translate animációja, ha a viewportba ér.
// A belépés lefutása után a transition-delay-t töröljük, hogy a hover NE legyen lassú.
export function Reveal({ as: Tag = 'div', delay = 0, children, className = '', style, ...rest }) {
  const [ref, inView] = useInView()
  const [settled, setSettled] = useState(prefersReducedMotion)
  useEffect(() => {
    if (!inView || !delay || settled) return
    const t = setTimeout(() => setSettled(true), delay + 700)
    return () => clearTimeout(t)
  }, [inView, delay, settled])
  const cls = [inView && 'in', className].filter(Boolean).join(' ')
  const st = delay && !settled ? { ...style, transitionDelay: `${delay}ms` } : style
  return (
    <Tag ref={ref} data-reveal="" className={cls} style={st} {...rest}>
      {children}
    </Tag>
  )
}

// Gyerekek lépcsőzött belépése. A belépés lefutása után a delay-t töröljük,
// így a hover (pl. bento kártyák) azonnal reagál, nem várja ki a stagger-késleltetést.
export function RevealStagger({ as: Tag = 'div', step = 90, children, className = '', ...rest }) {
  const [ref, inView] = useInView()
  const [settled, setSettled] = useState(prefersReducedMotion)
  const count = Children.count(children)
  useEffect(() => {
    if (!inView || settled) return
    const t = setTimeout(() => setSettled(true), count * step + 700)
    return () => clearTimeout(t)
  }, [inView, settled, count, step])
  const cls = [inView && 'in', className].filter(Boolean).join(' ')
  const kids = Children.map(children, (child, i) =>
    isValidElement(child)
      ? cloneElement(child, { style: settled ? child.props.style : { ...child.props.style, transitionDelay: `${i * step}ms` } })
      : child,
  )
  return <Tag ref={ref} data-reveal-stagger="" className={cls} {...rest}>{kids}</Tag>
}
