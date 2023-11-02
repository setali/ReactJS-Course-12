import axios from 'axios'
import Link from '../../components/utils/Link'
import Main from '../../layouts/Main'
import Head from 'next/head'

export default function Posts ({ posts }) {
  return (
    <Main>
      <Head>
        <title>Post list</title>
      </Head>
      <h2>Post list</h2>
      <div>
        <ol>
          {posts.map(post => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ol>
      </div>
    </Main>
  )
}

export async function getStaticProps () {
  const { data: posts } = await axios('https://jsonplaceholder.ir/posts')

  return {
    props: {
      posts
    }
    // revalidate: 10
  }
}
