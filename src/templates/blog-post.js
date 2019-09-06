import React, { Fragment } from 'react';
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import setRandomColors from '../components/random-color';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  setRandomColors();

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post.frontmatter.title}</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <Layout>
        <div className="l--blog-post">
          <span className="first-stripe"></span>
          <span className="second-stripe"></span>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    </Fragment>
  )
}

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt(pruneLength: 150)
    }
  }
`
