import { useRouter } from 'next/router'
import '../styles/general.css'
import { useEffect, useState } from 'react'
import NextNProgress from 'nextjs-progressbar'
import dynamic from 'next/dynamic'
// import Random from '../components/utils/Random'
const Random = dynamic(() => import('../components/utils/Random'), {
  ssr: false
})

export default function MyApp ({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const loadingOn = () => setLoading(true)
  const loadingOff = () => setLoading(false)

  useEffect(() => {
    router.events.on('routeChangeStart', loadingOn)
    router.events.on('routeChangeComplete', loadingOff)

    return () => {
      router.events.off('routeChangeStart', loadingOn)
      router.events.off('routeChangeComplete', loadingOff)
    }
  }, [])

  return (
    <div>
      <Random />
      {loading && 'Loading .......'}
      <NextNProgress />
      <Component {...pageProps} />
    </div>
  )
}
