import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex font-sans text-sm font-medium text-slate-200 transition hover:text-orange-500"
      >
        <Icon className="h-6 w-6 flex-none fill-slate-500 transition group-hover:fill-orange-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Ryan Forgie</title>
        <meta
          name="description"
          content="I’m Ryan Forgie. I live in Edinburgh, where I build web applications."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-xl bg-slate-800 object-cover"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="font-sans text-2xl font-bold tracking-tight text-slate-100 sm:text-5xl">
              I’m Ryan Forgie. I live in Edinburgh, where I build web
              applications.
            </h1>
            <div className="mt-6 space-y-7 font-sans text-base text-slate-400">
              <p>
                I work across the web stack; primarily in the JavaScript
                ecosystem. Outside of work I have a soft spot for Ruby and
                Python.
              </p>
              <p>
                The aim of this site is to learn in public, share thoughts on
                building software and document the journey to &nbsp;
                <a
                  href="https://jvns.ca/blog/so-you-want-to-be-a-wizard/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-decoration-color:orange-500/0.2 text-decoration-color:orange-500 text-orange-500 underline hover:text-orange-600"
                >
                  become a software wizard
                </a>
                .
              </p>
              <p>
                In my free time I run up hills, ride my bike and lift weights.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://github.com/RJForgie"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/ryan-forgie/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Connect on LinkedIn
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
