import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { getAllPosts } from '@/lib/getAllPosts'
import Link from 'next/link'

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

export default function PostsIndex({ posts }) {
  return (
    <>
      <Head>
        <title>Posts - Ryan Forgie</title>
        <meta name="description" content="All Posts" />
      </Head>
      <SimpleLayout title="All Posts">
        <div className="flex flex-col">
          {posts.map((post) => (
            <Post key={post.slug} post={post} />
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: (await getAllPosts()).map(({ component, ...meta }) => meta),
    },
  }
}
