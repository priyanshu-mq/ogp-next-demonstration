import Head from "next/head"
import { getAllPostsWithSlug, getPost } from "../lib/api"
import { useRouter } from "next/router"

const Post = ({ postData }) => {
  const router = useRouter()

  console.log(router.asPath)

  // error handling
  if (!router.isFallback && !postData?.slug) {
    return (
      <main className="error-page-content">
        <div className="containerGlobal">
          <div className="content-holder">
            <h1>
              <span>Sorry, we can’t find the page you were looking for.</span>
              404
            </h1>
            <div className="error-image">Image</div>
          </div>
        </div>
      </main>
    )
  }
  return (
    <>
      <Head>
        <title key="title">{postData.seo.metaTitle}</title>
        <meta
          name="description"
          content={postData.seo.metaDesc}
          key="description"
        />

        <meta
          property="og:title"
          key="og-title"
          content={postData.seo.metaTitle}
        />
        <meta
          property="og:description"
          key="og-description"
          content={postData.seo.metaDesc}
        />
        <meta property="og:url" key="og-url" content="" />

        {/* twitter cards */}

        <meta
          name="twitter:title"
          key="twitter_title"
          content={postData.seo?.metaTitle}
        />
        <meta
          name="twitter:description"
          key="twitter_description"
          content={postData.seo.metaDesc}
        />
      </Head>
      <article className="article-main">
        <div className="featured-image">
          <h1>{postData.title}</h1>
          <img
            src={postData.featuredImage?.node.mediaItemUrl}
            alt={postData.title}
          />
        </div>
        <div className="hero-info">
          <div className="blog-overview">
            <div
              className="excerpt"
              dangerouslySetInnerHTML={{ __html: postData.excerpt }}
            ></div>
            <div className="author-info">
              <div className="author-image">
                <img
                  src={postData.author.node.avatar.url}
                  alt={postData.title}
                />
              </div>
              <div className="author-name">
                <p>
                  By - <span>{postData.author.node.firstName}</span>
                  <span>{postData.author.node.lastName}</span>
                  <span>{postData.date}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="blog-content">
            <div
              className="inner-blog-container"
              dangerouslySetInnerHTML={{ __html: postData.content }}
            />
          </div>
          <div className="author-bottom-row">
            <div className="author-info">
              <div className="author-image">
                <img
                  src={postData.author.node.avatar.url}
                  alt={postData.title}
                />
              </div>
              <div className="author-name">
                <p>
                  By - <span>{postData.author.node.firstName}</span>
                  <span>{postData.author.node.lastName}</span>
                  <span>{postData.date}</span>
                </p>
              </div>
            </div>
            <div className="author-desc">
              <p>{postData.author.node.description}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default Post

// fetch data from api and pass to page as props
export async function getStaticProps({ params }) {
  const data = await getPost(params.slug)

  return {
    props: {
      postData: data.post
    }
    // revalidate: 10
  }
}

// assign dynamic paths
export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/${node.slug}`) || [],
    fallback: "blocking"
  }
}
