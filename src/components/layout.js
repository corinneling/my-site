import React from 'react';
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import ControlPanel from "../components/control-panel/control-panel";
import "../scss/base.scss"

 const Layout = ({ children }) => (
  <div className="l--site-container">
    <Header />
    <main>
      {children}
    </main>
    <ControlPanel />
    <Footer />
  </div>
)

export default Layout;