import React from 'react'
import Main from '../../layouts/Main'
import Head from 'next/head'

export default function Products ({ params, title }) {
  console.log(params)
  return (
    <Main>
      <Head>
        <title>{title}</title>
      </Head>
      <div>Catch all routes == {params.slug.join('/')}</div>
    </Main>
  )
}

export async function getServerSideProps ({ params }) {
  console.log(params)

  return {
    props: { params, title: params.slug[1] }
  }
}
