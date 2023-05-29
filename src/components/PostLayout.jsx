import Head from 'next/head'
import { useRouter } from 'next/router'

import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { formatDate } from '@/lib/formatDate'

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PostLayout({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
}) {
  let router = useRouter()

  if (isRssFeed) {
    return children
  }

  return (
    <>
      <Head>
        <title>{`${meta.title} - Ryan Forgie`}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            {previousPathname && (
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Go back to posts"
                className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/50 bg-slate-800 shadow-md shadow-slate-800/5 ring-0 ring-white/10 hover:border-slate-700 hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
              >
                <ArrowLeftIcon className="h-4 w-4 stroke-slate-500 transition group-hover:stroke-slate-400" />
              </button>
            )}
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 font-sans text-2xl font-bold tracking-tight text-slate-100 sm:text-5xl">
                  {meta.title}
                </h1>
                <time
                  dateTime={meta.date}
                  className="order-first flex items-center font-mono text-base uppercase text-slate-400"
                >
                  <span className="h-4 w-0.5 rounded-full bg-slate-400" />
                  <span className="ml-3">{formatDate(meta.date)}</span>
                </time>
              </header>
              <Prose className="mt-8 font-sans">{children}</Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}
