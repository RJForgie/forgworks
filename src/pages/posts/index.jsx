import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { getAllPosts } from '@/lib/getAllPosts'

function Post({ post }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/posts/${post.slug}`}>{post.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={post.date}
          className="md:hidden"
          decorate
        >
          {formatDate(post.date)}
        </Card.Eyebrow>
        <Card.Description>{post.description}</Card.Description>
        <Card.Cta>Read post</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={post.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(post.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function PostsIndex({ posts }) {
  return (
    <>
      <Head>
        <title>Posts - Ryan Forgie</title>
        <meta
          name="description"
          content="A mixture of TIL-type posts mixed in "
        />
      </Head>
      <SimpleLayout
        title="Short snippets and some thoughts."
        intro="A mixture of TIL-type posts mixed in with thoughts on software engineering"
      >
        <div className="md:border-l md:border-slate-700/40 md:pl-6">
          <div className="flex max-w-3xl flex-col space-y-16">
            {posts.map((post) => (
              <Post key={post.slug} post={post} />
            ))}
          </div>
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
