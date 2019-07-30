import React from 'react';
import Layout from '../components/layout'


const Projects = () => {
  return (
    <Layout>
      <section class="cmp-cta">
      <h1 class="cmp-cta__title">
        Some Things 
        <span class="cmp-cta__subtitle">that helped me learn</span> 
        <span class="cmp-cta__subtitle--sub">more about web development</span>
      </h1>
      <a class="cmp-cta__link" href="https://github.com/corinneling/a11y-control-panel">
        <div class="cmp-cta__item">
          <div class="cmp-cta__content">
            <h2>A11y Bookmarklet</h2>
            <p>A minimalist control panel that allows users to change the aesthetics of a page to make
              it more accessible, such as increasing contrast or font size.</p>
          </div>
        </div>
      </a>
      <a class="cmp-cta__link" href="https://codepen.io/corinneling/pen/MGoRN">
      <div class="cmp-cta__item">
        <div class="cmp-cta__content">
          <h2>Event Card</h2>
          <p>A project prompt from the Full Stack Apprenticeship at Sparkbox. I worked with a designer to bring their mockup
            to life, while creating an accessible card with BEM naming conventions.</p>
        </div>
      </div>
      </a>
      <a class="cmp-cta__link" href="https://github.com/corinneling/to-the-browser">
        <div class="cmp-cta__item">
          <div class="cmp-cta__content">
            <h2>Code Katas</h2>
            <p>
              I completed these katas as an apprentice at Sparkbox then transformed them into programs that could perform in the
              browser, while maintaining test coverage.</p>
          </div>
        </div>
      </a>
      <a class="cmp-cta__link" href="https://codepen.io/corinneling/pen/mLwKaG">
        <div class="cmp-cta__item">
          <div class="cmp-cta__content">
            <h2>Newsletter Sign Up</h2>
            <p>A codepen I created based on a dribble design to practice the flow of animation through the process of a sign
              up form.</p>
          </div>
        </div>
      </a>
    </section>
    </Layout>
  )
}

export default Projects