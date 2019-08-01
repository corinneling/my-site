import React, { Fragment } from 'react';
import { Helmet } from "react-helmet"
import Layout from '../components/layout'

const Projects = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Projects | Web Developer | Corinne Ling</title>
        <meta name="description" content="Front-end projects I've worked on that taught me more about web development." />
      </Helmet>
      <Layout>
        <section className="cmp-cta">
        <div className="cmp-cta__wrapper">
          <h1 className="cmp-cta__title">Projects</h1>
          <p className="cmp-cta__description">Some things that helped me learn more about web development</p>
        </div>
        <a className="cmp-cta__link" href="https://github.com/corinneling/a11y-control-panel">
          <div className="cmp-cta__item">
            <div className="cmp-cta__content">
              <h2>A11y Bookmarklet</h2>
              <p>A minimalist control panel that allows users to change the aesthetics of a page to make
                it more accessible, such as increasing contrast or font size.</p>
            </div>
          </div>
        </a>
        <a className="cmp-cta__link" href="https://codepen.io/corinneling/pen/MGoRN">
        <div className="cmp-cta__item">
          <div className="cmp-cta__content">
            <h2>Event Card</h2>
            <p>A project prompt from the Full Stack Apprenticeship at Sparkbox. I worked with a designer to bring their mockup
              to life, while creating an accessible card with BEM naming conventions.</p>
          </div>
        </div>
        </a>
        <a className="cmp-cta__link" href="https://github.com/corinneling/to-the-browser">
          <div className="cmp-cta__item">
            <div className="cmp-cta__content">
              <h2>Code Katas</h2>
              <p>
                I completed these katas as an apprentice at Sparkbox then transformed them into programs that could perform in the
                browser, while maintaining test coverage.</p>
            </div>
          </div>
        </a>
        <a className="cmp-cta__link" href="https://codepen.io/corinneling/pen/mLwKaG">
          <div className="cmp-cta__item">
            <div className="cmp-cta__content">
              <h2>Newsletter Sign Up</h2>
              <p>A codepen I created based on a dribble design to practice the flow of animation through the process of a sign
                up form.</p>
            </div>
          </div>
        </a>
      </section>
      </Layout>
    </Fragment>
  )
}

export default Projects