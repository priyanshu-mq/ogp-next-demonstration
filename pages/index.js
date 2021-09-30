import Head from "next/head"
import Link from "next/link"

const Home = ({ photo }) => {
  return (
    <div>
      <Head>
        <title>Social Media Preview</title>
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={photo?.title} />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Hurray!! Yes Social Media Preview is Working"
        />
        <meta property="og:image" content={photo?.url} />
      </Head>
      <h1 style={{ fontSize: "40px", marginBottom: "24px" }}>{photo?.title}</h1>
      <Link href="/about">
        <a>About Us</a>
      </Link>
      <Link href="/contact">
        <a style={{ marginLeft: "12px" }}>Contact Us</a>
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
