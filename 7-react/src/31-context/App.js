import { Route, Routes } from 'react-router-dom'
import './assets/styles/style.css'
import Login from './components/auth/Login'
import About from './components/general/About'
import Contact from './components/general/Contact'
import Dashboard from './components/general/Dashboard'
import Home from './components/general/Home'
import Page404 from './components/general/Page404'
import Profile from './components/general/Profile'
import PostRoute from './components/post/Route'
import Footer from './components/share/Footer'
import Header from './components/share/Header'
import Sidebar from './components/share/Sidebar'
import RequireAuth from './components/utils/RequireAuth'
import Providers from './providers'

export default function App () {
  return (
    <div>
      <Providers>
        <Header />
        <section className='main'>
          <Sidebar />
          <div className='content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/posts/*' element={<PostRoute />} />
              <Route path='/login' element={<Login />} />
              <Route
                path='/profile'
                element={
                  <RequireAuth>
                    <Profile />
                  </RequireAuth>
                }
              />
              <Route
                path='/dashboard'
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              />
              <Route path='*' element={<Page404 />} />
            </Routes>
          </div>
        </section>
        <Footer />
      </Providers>
    </div>
  )
}
