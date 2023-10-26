import Header from '../components/share/Header'
import Sidebar from '../components/share/Sidebar'
import Footer from '../components/share/Footer'

export default function Main ({ children }) {
  return (
    <div>
      <Header />
      <section style={{ display: 'flex' }}>
        <Sidebar />
        <article>{children}</article>
      </section>
      <Footer />
    </div>
  )
}
