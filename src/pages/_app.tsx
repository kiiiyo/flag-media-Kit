import 'sanitize.css'
import '@/styles/global.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeContextProvider } from '@/features/context/'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  )
}

export default CustomApp
