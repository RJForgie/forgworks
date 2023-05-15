import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-5xl font-sans">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-400 font-sans">
          {intro}
        </p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}