import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  // prefix="og: https://ogp.me/ns#"

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" key="icon_favicon" href="/favicon.ico" />

          {/* og */}
          <meta property="og:locale" key="og_locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" key="og-site_name" content="MultiQoS" />
          <meta
            property="og:image"
            key="og-image"
            content="https://blog.multiqos.com:8443/wp-content/uploads/2021/01/site-preview.jpg"
          />
          <meta property="og:image:width" key="og-image_width" content="800" />
          <meta
            property="og:image:height"
            key="og-image_height"
            content="600"
          />

          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}

          <meta
            name="twitter:card"
            key="twitter_card"
            content="summary_large_image"
          />
          <meta name="twitter:site" key="twitter_site" content="@MultiQoS" />
          <meta
            name="twitter:image"
            key="twitter_image"
            content="https://blog.multiqos.com:8443/wp-content/uploads/2021/01/site-preview.jpg"
          />
          <meta
            name="twitter:label1"
            key="twitter_label1"
            content="Est. reading time"
          />
          <meta name="twitter:data1" key="twitter_data1" content="10 minutes" />
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-K5LM4KF"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
