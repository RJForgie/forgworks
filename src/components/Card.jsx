import Link from 'next/link'
import clsx from 'clsx'

export function Card({ as: Component = 'div', className, children }) {
  return (
    <Component
      className={clsx(
        className,
        'group relative flex flex-col items-start font-sans'
      )}
    >
      {children}
    </Component>
  )
}

Card.Link = function CardLink({ children, ...props }) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-gray-950 opacity-0 transition sm:-inset-x-6 sm:rounded-2xl" />
      <Link {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  )
}

Card.Title = function CardTitle({ as: Component = 'h2', href, children }) {
  return (
    <Component className="text-base font-semibold tracking-tight text-gray-950 group-hover:text-orange-500">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  )
}

Card.Description = function CardDescription({ children }) {
  return <p className="relative z-10 mt-2 text-sm text-gray-950">{children}</p>
}

Card.Cta = function CardCta({ children }) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-orange-500"
    >
      {children}
    </div>
  )
}

Card.Eyebrow = function CardEyebrow({
  as: Component = 'p',
  className,
  children,
  ...props
}) {
  return (
    <Component
      className="relative z-10 order-first mb-3 flex items-center font-sans text-sm uppercase text-gray-950"
      {...props}
    >
      {children}
    </Component>
  )
}
