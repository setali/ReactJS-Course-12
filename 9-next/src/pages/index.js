import Main from '../layouts/Main'

export default function Home () {
  return (
    <Main>
      <h1>{process.env.myName}</h1>
      <div>Home Page</div>
    </Main>
  )
}
