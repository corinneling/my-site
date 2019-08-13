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
          {/* <h2>{data.allMarkdownRemark.totalCount} Posts</h2> */}
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id} className="cmp-blog">
                <Link to={node.fields.slug} className="cmp-blog__link">
                  <h3 className="cmp-blog__title">
                    {node.frontmatter.title}{" "}
                  </h3>
                </Link>
                <p className="cmp-blog__date">{node.frontmatter.date}</p>
                <p>{node.excerpt}</p>
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