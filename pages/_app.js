import "../styles/globals.css"
import Layout from "./components/Layout"

// **nprogess
import Router from "next/router"
import NProgress from "nprogress" //nprogress module
import "../styles/nprogress.css" //styles of
import Head from "next/head"

//  **if it is
Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
