import { Children, cloneElement, isValidElement } from 'react'
import { useInView } from '../../hooks/useInView.js'

// Egy elem belépő fade/translate animációja, ha a viewportba ér.
export function Reveal({ as: Tag = 'div', delay, children, className = '', style, ...rest }) {
  const [ref, inView] = useInView()
  const cls = [inView && 'in', className].filter(Boolean).join(' ')
  return (
    <Tag ref={ref} data-reveal="" className={cls} style={delay ? { ...style, transitionDelay: `${delay}ms` } : style} {...rest}>
      {children}
    </Tag>
  )
}

// Gyerekek lépcsőzött belépése — minden közvetlen gyerek `step` ms-mal később jelenik meg.
export function RevealStagger({ as: Tag = 'div', step = 90, children, className = '', ...rest }) {
  const [ref, inView] = useInView()
  const cls = [inView && 'in', className].filter(Boolean).join(' ')
  const kids = Children.map(children, (child, i) =>
    isValidElement(child)
      ? cloneElement(child, { style: { ...child.props.style, transitionDelay: `${i * step}ms` } })
      : child,
  )
  return <Tag ref={ref} data-reveal-stagger="" className={cls} {...rest}>{kids}</Tag>
}
