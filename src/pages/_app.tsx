import Head from 'next/head'
import type { AppProps } from 'next/app'

import 'sanitize.css'
import '@/styles/app.css'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default CustomApp
