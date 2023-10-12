import { Layout } from 'antd'
import Header from './share/Header'
import Footer from './share/Footer'
import Sidebar from './share/Sidebar'
import '../assets/css/general.css'

const { Content } = Layout

function App () {
  return (
    <Layout>
      <Header />
      <Layout hasSider>
        <Sidebar />
        <Content className='content'>Content</Content>
      </Layout>
      <Footer />
    </Layout>
  )
}

export default App
