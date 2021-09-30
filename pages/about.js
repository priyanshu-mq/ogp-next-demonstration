import Head from "next/head"

const About = () => {
  return (
    <div>
      <Head>
        <title>About Meta Test Title</title>

        <meta
          name="description"
          content="about meta test desc"
          key="description"
        />

        <meta
          property="og:title"
          key="og-title"
          content="about meta test Title"
        />
        <meta
          property="og:description"
          key="og-description"
          name="description"
          content="about meta test desc"
        />

        <meta
          property="og:url"
          key="og-url"
          content="https://swaneesoft.com/about"
        />

        {/* twitter cards */}
        <meta
          name="twitter:title"
          key="twitter_title"
          content="About Test Twitter"
        />
        <meta
          name="twitter:description"
          key="twitter_description"
          content="About Test Desc Twitter"
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
