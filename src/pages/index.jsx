import Head from 'next/head'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllPosts } from '@/lib/getAllPosts'

function BriefcaseIcon(props) {
  return (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.75 9.75C4.75 8.64543 5.64543 7.75 6.75 7.75H17.25C18.3546 7.75 19.25 8.64543 19.25 9.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V9.75Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.75 7.5V6.75C8.75 5.64543 9.64543 4.75 10.75 4.75H13.25C14.3546 4.75 15.25 5.64543 15.25 6.75V7.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5 13.25H19"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.75 11.75V14.25"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.25 11.75V14.25"
      />
    </svg>
  )
}

function Post({ post }) {
  return (
    <Card as="article">
      <Card.Title href={`/posts/${post.slug}`}>{post.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={post.date} decorate>
        {formatDate(post.date)}
      </Card.Eyebrow>
      <Card.Description>{post.description}</Card.Description>
      <Card.Cta>Read post</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-slate-400 transition group-hover:fill-slate-300" />
    </Link>
  )
}

function Resume() {
  let resume = [
    {
      company: 'xDesign',
      title: 'Principal Software Engineer',
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'xDesign',
      title: 'Senior Software Engineer',
      start: '2021',
      end: '2022',
    },
    {
      company: 'Float Cashflow Forecasting',
      title: 'Software Engineer',
      start: '2020',
      end: '2021',
    },
    {
      company: 'Zonal',
      title: 'Software Engineer',
      start: '2018',
      end: '2020',
    },
  ]

  return (
    <div className="rounded-2xl border border-slate-700/90 p-6">
      <h2 className="flex font-mono text-sm font-semibold text-slate-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Recent Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4 font-sans">
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-slate-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-slate-400">{role.title}</dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs uppercase text-slate-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Ryan Forgie - Software Engineer</title>
        <meta
          name="description"
          content="I’m Ryan, a software engineer based in Edinburgh."
        />
      </Head>
      <Container className="mt-24">
        <div className="max-w-2xl">
          <h1 className=" font-mono text-2xl font-bold tracking-tight text-slate-100 sm:text-5xl">
            <q cite="https://www.defprogramming.com/quotes-by/john-johnson/">
              First, solve the problem. Then, write the code.
            </q>
          </h1>
          <p className="mt-6 font-sans text-base text-slate-400">
            I’m Ryan, a software engineer based in Edinburgh.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/RJForgie"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/ryan-forgie/"
              aria-label="Connect on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {posts.map((post) => (
              <Post key={post.slug} post={post} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">{/* <Resume /> */}</div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      posts: (await getAllPosts())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
