import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link href={href} className="transition hover:text-orange-400">
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-slate-700/40 pb-16 pt-10">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 font-mono text-sm font-medium text-slate-200">
                <NavLink href="/about">ABOUT</NavLink>
                <NavLink href="/uses">USES</NavLink>
              </div>
              <p className="font-mono text-sm text-slate-400">
                &copy; {new Date().getFullYear()} RYAN FORGIE. ALL RIGHTS
                RESERVED.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
