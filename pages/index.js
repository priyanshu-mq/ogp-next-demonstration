import Head from "next/head"
import Link from "next/link"

const Home = ({ photo }) => {
  return (
    <div>
      <Head>
        <title>Index Meta Test Title</title>

        <meta
          name="description"
          content="index meta test desc"
          key="description"
        />

        <meta
          property="og:title"
          key="og-title"
          content="index meta test Title"
        />
        <meta
          property="og:description"
          key="og-description"
          content="index meta test desc"
        />

        <meta
          property="og:url"
          key="og-url"
          content="https://swaneesoft.com/"
        />

        {/* twitter cards */}
        <meta
          name="twitter:title"
          key="twitter_title"
          content="index Test Twitter"
        />
        <meta
          name="twitter:description"
          key="twitter_description"
          content="index Test Desc Twitter"
        />
      </Head>
      <h1 style={{ fontSize: "40px", marginBottom: "24px" }}>{photo?.title}</h1>
      <Link href="/about">
        <a>About Us</a>
      </Link>
      <Link href="/contact">
        <a style={{ marginLeft: "12px" }}>Contact Us</a>
      </Link>
      <Link href="/blogs">
        <a style={{ marginLeft: "12px" }}>Blogs</a>
      </Link>
    </div>
  )
}
export default Home

export const getServerSideProps = async () => {
  let photo = null
  await fetch("https://jsonplaceholder.typicode.com/photos/1")
    .then((response) => response.json())
    .then((json) => {
      photo = json
    })

  return {
    props: {
      photo
    }
  }
}
