import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllPosts } from '@/lib/getAllPosts'
import portraitImage from '@/images/portrait.jpg'

function Post({ post }) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div
        as="article"
        className="gap-y- flex flex-col border-b border-gray-950 pb-5 font-sans text-sm hover:text-orange-400 md:flex-row"
      >
        <span className="pt-5 md:w-1/6">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </span>
        <span className="pt-5 font-bold md:w-2/6">{post.title}</span>
        <span className="pt-5 md:w-3/6">{post.description}</span>
      </div>
    </Link>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-gray-950 transition group-hover:fill-orange-500" />
    </Link>
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
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="max-w-2xl">
            <p className="mt-6 font-sans text-base text-gray-950">
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
          <div className="ml-auto hidden lg:block">
            <Image
              src={portraitImage}
              alt="Photo of Ryan Forgie"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square object-cover"
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <h3 className="mb-4 mt-10 font-sans text-lg">Recent Posts</h3>
        <div className="flex flex-col">
          {posts.map((post) => (
            <Post key={post.slug} post={post} />
          ))}
        </div>
        <div className="space-y-10 lg:pl-16 xl:pl-24">{/* <Resume /> */}</div>
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
