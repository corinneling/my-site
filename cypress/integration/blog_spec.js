
describe('Notes', () => {

  it('home page notes link takes you to the blog', () => {
    // Arrange
    cy.visit('http://localhost:8000')

    // Act
    cy.get('a.cmp-nav__link').contains('Notes').click()

    // Assert
    cy.url()
      .should('include', 'blog')
  })

  it('grid item contains correct url', () => {
    
    cy.visit('http://localhost:8000/blog')

    cy.get('a.cmp-blog__link').contains('CSS Combinator Selectors')

      .should('have.attr', 'href', '/css-combinator-selectors/')
  })
})