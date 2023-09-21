import ThemeProvider from './ThemeProvider'
import AuthProvider from './AuthProvider'

export default function Providers ({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  )
}
