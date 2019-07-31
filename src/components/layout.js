import React from 'react';
import Header from "../components/header/header";
import "../scss/base.scss"

 const Layout = ({ children }) => (
  <div className="l--site-container">
    <Header />
    <main>
      {children}
    </main>
  </div>
)

export default Layout;