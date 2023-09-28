import { BrowserRouter as Router } from 'react-router-dom'
import AuthProvider from './AuthProvider'
import ThemeProvider from './ThemeProvider'

export default function Providers ({ children }) {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </Router>
  )
}
