import Main from '../layouts/Main'
import style from '../styles/contact.module.css'

export default function Contact ({ name }) {
  return (
    <Main>
      <h2 className={style.header}>Contact Page</h2>
      <p className={style.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magnam
        dolor unde consequatur excepturi nam porro aliquid? Recusandae vero,
        excepturi dolores, cumque, laborum ex exercitationem laboriosam in modi
        doloribus perferendis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Praesentium nam quis doloribus. Odit reprehenderit,
        earum ea beatae impedit dolore, id praesentium ad accusantium placeat
        perspiciatis, hic rem. Voluptatum, laborum dicta?
      </p>
    </Main>
  )
}
