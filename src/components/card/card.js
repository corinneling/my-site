import React from 'react';

const Card = () => {
  return (
    <section className="cmp-card">
      <h1 className="cmp-card__title">
      <span className="cmp-card__intro">Hi, I'm Corinne</span> 
        & I love to <span className="cmp-gradient"> build cool things </span>
      </h1>
      <p className="cmp-card__subtitle">I have a passion for collaborating with others to create quality websites and tools, through Progressive Enhancement, accessibility, and meaningful user interfaces.</p>
    </section>
  );
}

export default Card;