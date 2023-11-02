import axios from 'axios'
import Main from '../../layouts/Main'

export default function User ({ user }) {
  return (
    <Main>
      <h2>{user.name}</h2>
    </Main>
  )
}

export async function getServerSideProps ({ params }) {
  const { data: user } = await axios(
    `https://jsonplaceholder.ir/users/${params.id}`
  )

  return {
    props: {
      user
    }
  }
}
