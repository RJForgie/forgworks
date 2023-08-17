import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="mb-4 font-sans text-lg text-gray-950">{title}</h1>
      </header>
      <div>{children}</div>
    </Container>
  )
}
