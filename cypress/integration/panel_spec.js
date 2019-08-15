describe('Control Panel for Page Styles', () => {
  before(() => {
    cy.visit('http://localhost:8000')
  })

  it('The main button shows the panel list of icons', () => {
    cy.get('button.panel__main-button').click()
    cy.get('ul.panel__list')
      .should('be.visible')
  })

  it('Underline mode button adds underlines to every link on the page', () => {
    cy.get('button.icon-underline').click()
      .should('have.attr', 'aria-label', 'Add underline to links')

    cy.get('body').should('have.css', 'text-decoration')
      .and('match', /none/)
  })

  it('Dark mode button adds dark background to page', () => {
    cy.get('button.icon-contrast').click()
      .should('have.attr', 'aria-label', 'Switch page to dark mode')

    cy.get('body').should('have.class', 'js-add-contrast')
  })

  it('Dyslexia font button changes font site to OpenDyslexic', () => {  
    cy.get('button.icon-font').click()
      .should('have.attr', 'aria-label', 'Change page font to OpenDyslexic font')

    cy.get('body').should('have.css', 'font-family')
      .and('match', /Dyslexie, serif/)
  })


  it('Refresh button removes all custom styles', () => {  
    cy.get('button.icon-refresh').click()
      .should('have.attr', 'aria-label', 'Refresh page styling')

    cy.get('body').should('not.have.attr', 'class')
  })
})