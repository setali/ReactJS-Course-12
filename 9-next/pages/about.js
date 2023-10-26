import Main from '../layouts/Main'

export default function About () {
  return (
    <Main>
      <h2>About Page</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
        voluptatibus repellendus laborum rem vitae porro, unde, facilis error
        excepturi dignissimos dolorum sequi fugit amet odio expedita. Quaerat
        sit vitae quis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ipsa asperiores laudantium cum commodi, alias vel quo quibusdam
        voluptatibus repellendus libero hic optio dolore dolorum cumque ducimus
        porro? Blanditiis, distinctio rem!
      </p>
      <style jsx global>{`
        h2 {
          color: red;
        }
        p {
          color: blue;
          padding: 5px;
        }
      `}</style>
    </Main>
  )
}
