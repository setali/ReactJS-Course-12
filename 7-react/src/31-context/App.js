import './assets/styles/style.css'
import Home from './components/general/Home'
import Footer from './components/share/Footer'
import Header from './components/share/Header'
import Sidebar from './components/share/Sidebar'
import Providers from './providers'

export default function App () {
  return (
    <div>
      <Providers>
        <Header />
        <section className='main'>
          <Sidebar />
          <div className='content'>
            <Home />
          </div>
        </section>
        <Footer />
      </Providers>
    </div>
  )
}
