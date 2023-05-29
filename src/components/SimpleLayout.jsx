import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="font-sans text-2xl font-bold tracking-tight text-slate-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 font-sans text-base text-slate-400">{intro}</p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}
