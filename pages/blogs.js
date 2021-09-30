import React from "react"
import { getAllPosts } from "./lib/api"
import Head from "next/head"
import Link from "next/link"

const Blogs = ({ allPosts: { edges } }) => {
  return (
    <>
      <Head>
        <title>
          Blogs on Web & Mobile Application Design & Development By MultiQoS
        </title>
        <link rel="canonical" href="https://multiqos.com/blogs/" key="link" />
        <meta
          name="description"
          content="On the MultiQoS blog, Get the latest insights on Mobile app development, eCommerce market, UI/UX design, website design & development trends & much more."
          key="description"
        />

        <meta
          property="og:title"
          key="og-title"
          content="Blogs on Web & Mobile Application Design & Development By MultiQoS"
        />
        <meta
          property="og:description"
          key="og-description"
          name="description"
          content="On the MultiQoS blog, Get the latest insights on Mobile app development, eCommerce market, UI/UX design, website design & development trends & much more."
        />
        <meta
          property="og:url"
          key="og-url"
          content="https://multiqos.com/blogs/"
        />

        {/* twitter cards */}

        <meta
          name="twitter:title"
          key="twitter_title"
          content="Blogs on Web & Mobile Application Design & Development By MultiQoS"
        />
        <meta
          name="twitter:description"
          key="twitter_description"
          content="On the MultiQoS blog, Get the latest insights on Mobile app development, eCommerce market, UI/UX design, website design & development trends & much more."
        />
      </Head>
      <div>
        <h1>Blogs</h1>
        <section className="blogs-list">
          {edges?.map(({ node }) => (
            <div key={node.id}>
              <div className="blog-item " key={node.id}>
                <div className="blog-feature-image-info col-sm-6">
                  <h2>{node.title}</h2>
                  <div
                    className="excerpt"
                    dangerouslySetInnerHTML={{ __html: node.excerpt }}
                  ></div>
                  <Link href={node.slug}>
                    <a>Read More</a>
                  </Link>
                </div>
                <div
                  className="blog-feature-image col-sm-6"
                  style={{
                    backgroundImage: `url(${
                      node.featuredImage?.node.mediaItemUrl ??
                      "/images/blog-fallback-image.jpg"
                    })`,
                    width: "400px",
                    height: "400px"
                  }}
                >
                  <figure>
                    {/* <img
                    src={node.featuredImage.node.mediaItemUrl}
                    alt={node.title}
                  /> */}
                  </figure>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="pagination">
            <button onClick={handleNext}>next</button>
            <button onClick={handlePrev}>previous</button>
          </div> */}
        </section>
      </div>
    </>
  )
}

export default Blogs

// get all posts from api and list
export async function getServerSideProps() {
  const allPosts = await getAllPosts()
  return {
    props: {
      allPosts
    }
    // revalidate: 10
  }
}
