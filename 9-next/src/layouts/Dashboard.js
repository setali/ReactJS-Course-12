import Header from '../components/share/Header'
import Footer from '../components/share/Footer'

export default function DashboardLayout ({ children }) {
  return (
    <div>
      <Header />
      <section style={{ display: 'flex' }}>
        <article>{children}</article>
      </section>
      <Footer />
    </div>
  )
}
