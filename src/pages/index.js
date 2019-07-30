import React, { Fragment } from "react";
import { Helmet } from "react-helmet"
import Layout from '../components/layout'
import Card from "../components/card/card";

export default () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Full Stack Web Developer | Corinne Ling</title>
    </Helmet>
    <Layout>
      <Card />
    </Layout>
  </Fragment>
)
