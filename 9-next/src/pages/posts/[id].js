import axios from 'axios'
import Main from '../../layouts/Main'
import Head from 'next/head'

export default function Post ({ post = {} }) {
  return (
    <Main>
      <Head>
        <title>{post.title}</title>
      </Head>

      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </Main>
  )
}

export async function getStaticPaths () {
  // const paths = [
  //   { params: { id: '1' } },
  //   { params: { id: '2' } },
  //   { params: { id: '3' } }
  // ]

  const { data: posts } = await axios('https://jsonplaceholder.ir/posts')

  const paths = posts
    .slice(0, 10)
    .map(post => ({ params: { id: `${post.id}` } }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps ({ params }) {
  try {
    const { data: post } = await axios(
      `https://jsonplaceholder.ir/posts/${params.id}`
    )

    return {
      props: {
        post
      },
      revalidate: 5
    }
  } catch (e) {
    if (e.response.status === 404) {
      return {
        props: {},
        notFound: true
      }
    } else {
      throw new Error(e)
    }
  }
}
