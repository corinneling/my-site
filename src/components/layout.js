import React from 'react';
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import "../scss/base.scss"

 const Layout = ({ children }) => (
  <div className="l--site-container">
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout;