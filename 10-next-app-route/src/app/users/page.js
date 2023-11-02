import Link from 'next/link'

export default async function Users () {
  const res = await fetch('https://jsonplaceholder.ir/users')
  const users = await res.json()

  return (
    <div>
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
    </div>
  )
}
