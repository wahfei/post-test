import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
// import Layout from "./layout"
import Seo from "./seo"

const WordpressPostList = props => {
  console.log(props)
  const data = useStaticQuery(query)
  const blogs = data.allWpPost.edges
  console.log(blogs)
  return (
    <>
      <h4>Posts</h4>
      {/* {data.allWpPost.edges.map(({ node }) => ( */}
      {blogs.map(({ node }) => (
        <div>
          <p>
            <Link to={`/${node.slug}/`}>{node.title}</Link>
          </p>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </>
  )
}

export const query = graphql`
  {
    allWpPost(sort: { date: ASC }) {
      edges {
        node {
          title
          excerpt
          link
          slug
        }
      }
    }
  }
`

export const Head = () => <Seo title="Post List Page" />

export default WordpressPostList
