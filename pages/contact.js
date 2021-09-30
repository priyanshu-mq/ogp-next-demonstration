import Head from "next/head"

const Contact = () => {
  return (
    <>
      <Head>
        <title>About - Web Design and Development Company India & USA</title>

        <meta
          name="description"
          content=" - India's Fastest Growing Custom Mobile App and Web Development Company provides expertise solutions across 40+ countries globally. CONTACT US TODAY!"
          key="description"
        />
        <meta name="twitter:card" content="summary" />

        <meta
          property="og:title"
          key="og-title"
          content="About - Mobile Apps and Enterprise Web Apps Development Company"
        />
        <meta
          property="og:description"
          key="og-description"
          name="description"
          content="is leading mobile apps and enterprise web app development company and providing solutions across 40+ countries globally."
        />
        <meta property="og:image" content="../public/image.png" />
        <meta property="og:url" key="og-url" content="" />

        {/* twitter cards */}
        <meta
          name="twitter:title"
          key="twitter_title"
          content="About - Web Design and Development Company India & USA"
        />
        <meta
          name="twitter:description"
          key="twitter_description"
          content="is leading mobile apps and enterprise web app development company and providing solutions across 40+ countries globally."
        />
      </Head>
      <h1 style={{ fontSize: "80px", marginBottom: "24px" }}>Contact</h1>
    </>
  )
}

export default Contact
