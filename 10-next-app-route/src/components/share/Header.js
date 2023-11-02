'use client'

export default function Header () {
  const color = 'gray'

  return (
    <header>
      <div className='header'>
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
