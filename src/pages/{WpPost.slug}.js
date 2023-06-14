import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import Seo from "../components/seo"

const PostTemplate = ({ data }) => {
  // const data = useStaticQuery(query)
  const { title, content } = data.wpPost

  console.log(data)

  console.log(title)
  console.log(content)
  // console.log(pageContext)
  return (
    <Layout>
      <main className="page">
        <div className="post-page">
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSinglePost($slug: String) {
    wpPost(slug: { eq: $slug }) {
      title
      content
      slug
    }
  }
`

// export const Head = () => <Seo title={title} />

export default PostTemplate
