import Image from 'next/image'
import logo from '../../public/logo.png'

export default function Header () {
  const color = 'gray'

  return (
    <header>
      <div className='header'>
        <Image src={logo} alt='logo' className='image' />
        {/* <img src='/logo.png' /> */}
        <h2>My Header</h2>
      </div>
      <style jsx>{`
        .header {
          color: ${color};
          margin: 1em;
          display: flex;
        }
        .image {
          margin: 1em;
          background-color: green;
        }
      `}</style>
    </header>
  )
}
