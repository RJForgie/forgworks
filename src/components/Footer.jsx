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
        <div className="pb-16 pt-10">
          <Container.Inner>
            <div className="flex flex-col justify-between gap-6 sm:flex-row">
              <p className="font-sans text-sm text-gray-950">
                &copy; {new Date().getFullYear()} Ryan Forgie. All rights
                reserved.
              </p>
              <div className="flex gap-6 font-sans text-sm font-medium text-gray-950">
                {/* <NavLink href="/about">ABOUT</NavLink> */}
                {/* <NavLink href="/uses">USES</NavLink> */}
              </div>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
