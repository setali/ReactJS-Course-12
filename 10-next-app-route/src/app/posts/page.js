'use client'

import Link from 'next/link'
import { Suspense } from 'react'

// export const metadata = {
//   title: 'Posts',
//   description: 'Generated by create next app'
// }

async function getData (url, options) {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('Error')
  }

  return res.json()
}

export const revalidate = 10

export default async function Posts () {
  const posts = await getData('https://jsonplaceholder.ir/posts', {
    cache: 'no-store',
    next: {
      //   revalidate: 10,
    }
  })

  console.log('Salam')

  console.log('========>', posts.length)

  return (
    <div>
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
    </div>
  )
}