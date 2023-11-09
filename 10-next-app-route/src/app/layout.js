import Header from '@/components/share/Header'
import './globals.css'
import Sidebar from '@/components/share/Sidebar'
import Footer from '@/components/share/Footer'

export const metadata = {
  title: 'Ali',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>
        <div>
          <Header />
          <section style={{ display: 'flex' }}>
            <Sidebar />
            <article>{children}</article>
          </section>
          <Footer />
        </div>
      </body>
    </html>
  )
}