import React from 'react'
import Main from '../../layouts/Main'

export default function Gallery ({ params }) {
  console.log(params)
  return (
    <Main>
      <div>Optional catch all routes == {params.slug?.join('/')}</div>
    </Main>
  )
}

export async function getServerSideProps ({ params }) {
  console.log(params)

  return {
    props: { params }
  }
}
