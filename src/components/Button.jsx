import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'font-semibold text-slate-100 bg-slate-700 hover:bg-slate-600 active:bg-slate-700 active:text-slate-100/70',
  secondary:
    'font-medium bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-slate-50 active:bg-slate-800/50 active:text-slate-50/70',
}

export function Button({ variant = 'primary', className, href, ...props }) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
