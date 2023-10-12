import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { ConfigProvider } from 'antd'
import faIR from 'antd/locale/fa_IR'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <ConfigProvider
    direction='rtl'
    locale={faIR}
    theme={{ token: { fontFamily: 'vazir' } }}
  >
    <App />
  </ConfigProvider>
  // </React.StrictMode>
)
