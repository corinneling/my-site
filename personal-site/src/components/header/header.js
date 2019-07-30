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
            <Link to="/learning/" className="cmp-nav__link">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;