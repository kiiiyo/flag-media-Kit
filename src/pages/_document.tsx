import { Head, Html, Main, NextScript } from 'next/document'

const CustomDocument = () => {
  const title = '🏁Flag Media Kit'

  return (
    <Html className="light">
      <Head>
        {/* OGP */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta name="format-detection" content="telephone=no" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default CustomDocument
