import React, { Fragment } from 'react';
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'

const Blog = ({ data }) => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog | Web Developer | Corinne Ling</title>
        <meta name="description" content="A place to put my thoughts as I go through tutorials and learn new things." />
      </Helmet>
      <Layout>
        <div class="l--blog">
          <h1>Blog</h1>
          <h2>{data.allMarkdownRemark.totalCount} Posts</h2>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id}>
                <Link to={node.fields.slug}>
                  <h3>
                    {node.frontmatter.title}{" "}
                    <span>
                      — {node.frontmatter.date}
                    </span>
                  </h3>
                  <p>{node.excerpt}</p>
                </Link>
              </div>
            ))}
        </div>
      </Layout>
    </Fragment>
  )
}

export default Blog;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`