import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ScrollButton from '../components/ScrollButton'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
      <Head>
      <link rel="icon" href="/favicon.ico" />
      </Head>
        <ScrollButton />
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
