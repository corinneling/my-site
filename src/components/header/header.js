import React from 'react';
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <nav className="cmp-nav">
        <ul className="cmp-nav__list">
          <li className="cmp-nav__item">
            <Link to="/" className="cmp-nav__link">Home</Link>
          </li>
          <li className="cmp-nav__item">
            <Link to="/projects/" className="cmp-nav__link">Projects</Link>
          </li>
          <li className="cmp-nav__item">
            <Link to="/blog/" className="cmp-nav__link">Notes</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;