import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ScrollButton from '../components/ScrollButton'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <ScrollButton />
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
