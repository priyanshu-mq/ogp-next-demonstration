// fetch function to handle talking to our wp website

// refrence to API URL from .env file
const API_URL = process.env.NEXT_PUBLIC_WP_API_URL

async function fetchAPI(query, { variables } = {}) {
  // Set up some headers to tell the fetch call
  // that this is an application/json type
  const headers = { "Content-Type": "application/json" }

  // build out the fetch() call using the API_URL
  // environment variable pulled in at the start
  // Note the merging of the query and variables
  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables })
  })

  // error handling work
  const json = await res.json()
  if (json.errors) {
    console.log(json.errors)
    console.log("error details", query, variables)
    throw new Error("Failed to fetch API")
  }
  return json.data
}

export async function getAllPosts(preview) {
  const data = await fetchAPI(
    `
    {
      posts(first: 50, where: {orderby: {field: DATE, order: DESC}}) {
        edges {
          node {
            id
            featuredImage {
              node {
                mediaItemUrl      
              }
            }
            slug
            date
            title
            content(format: RAW)
            excerpt
            author {
              node {
                avatar {
                  url
                }
                firstName
                lastName
                description
              }
            }
            seo {
              metaTitle
              metaDesc
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        preview
      }
    }
  )

  return data?.posts
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(
    `
    {
      posts(first: 50) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `
  )

  return data?.posts
}

export async function getPost(slug) {
  const data = await fetchAPI(
    `
    fragment PostFields on Post {
      title
      slug
      date
      excerpt
      author {
        node {
          avatar {
            url
          }
          firstName
          lastName
          description
        }
      }
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      seo {
        metaTitle
        metaDesc
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
      }
    }
  `,
    {
      variables: {
        id: slug,
        idType: "SLUG"
      }
    }
  )

  return data
}
