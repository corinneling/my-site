describe('Notes', () => {
  it('The notes link takes you to the blog page', () => {
    // Arrange
    cy.visit('http://localhost:8000')

    // Act
    cy.get('a.cmp-nav__link').contains('Notes').click()
    // cy.get('a.cmp-nav__link').contains('Notes').debug().click() // -> debug
    // cy.get('h1').contains('Notes') // -> doesnt work

    // Assert
    cy.url() // -> Gets the current URL of the page that is currently active.
      .should('include', '/blog')
  });

  it('grid item contains a the correct url', () => {
    // Arrange
    cy.visit('http://localhost:8000/blog')

    // Act
    cy.get('a.cmp-blog__link').contains('CSS Combinator Selectors')

    // Assert
      .should('have.attr', 'href', '/css-combinator-selectors')
  });
});