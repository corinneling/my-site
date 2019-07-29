import React, { Fragment } from 'react'
import Header from "../components/header/header";
import("../scss/base.scss")

 const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <main class="cmp-container">
      {children}
    </main>
  </Fragment>
)

export default Layout;