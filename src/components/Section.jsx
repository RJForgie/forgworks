import { useId } from 'react'

export function Section({ title, children }) {
  let id = useId()

  return (
    <section
      aria-labelledby={id}
      className="font-sans md:border-l md:border-gray-950 md:pl-6"
    >
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2 id={id} className="text-sm font-semibold text-gray-950">
          {title}
        </h2>
        <div className="md:col-span-3">{children}</div>
      </div>
    </section>
  )
}
