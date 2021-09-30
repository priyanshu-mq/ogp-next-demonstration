import Head from "next/head"

const About = () => {
  return (
    <div>
      <Head>
        <title style={{ fontSize: "80px" }}>About Us</title>
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us OG" />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Hurray!! Yes About us is Working"
        />
        <meta
          property="og:image"
          content="https://via.placeholder.com/600/92c952"
        />
      </Head>
      <h1 style={{ fontSize: "80px", marginBottom: "24px" }}>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam debitis
        consectetur quod optio placeat illum totam, voluptas corrupti nisi
        tempore. Nobis sit id voluptatem quasi sunt corporis tempora ex ullam?
      </p>
    </div>
  )
}

export default About
