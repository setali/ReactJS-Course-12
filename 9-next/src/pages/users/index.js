import Link from '../../components/utils/Link'
import Main from '../../layouts/Main'

export default function Users ({ users }) {
  return (
    <Main>
      <h2>User list</h2>
      <div>
        <ol>
          {users.map(user => (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ol>
      </div>
    </Main>
  )
}

export async function getServerSideProps ({ req }) {
  //   const { data: users } = await axios('https://jsonplaceholder.ir/users')

  const res = await fetch('https://jsonplaceholder.ir/users')
  const users = await res.json()

  return {
    props: {
      users
    }
  }
}
