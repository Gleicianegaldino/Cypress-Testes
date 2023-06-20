describe('casos de testes do site seu barriga', () => {
  it('autenticacao', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('#email').type('gle@gmail.com')
    cy.get('#senha').type('123456789')
    cy.get('.btn').click()
    cy.get('.alert').should('be.visible').and('contain', 'Bem vindo, Gleiciane')
  })
  it('criacao de nova conta', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('#email').type('gle@gmail.com')
    cy.get('#senha').type('123456789')
    cy.get('.btn').click()
    cy.get('.alert').should('be.visible').and('contain', 'Bem vindo, Gleiciane!')
    cy.get('.dropdown-toggle').click()
    cy.get('.dropdown-menu > :nth-child(1) > a').click()
    cy.get('#nome').type('Conta numero 4')
    cy.get('.btn').click()
    cy.get('.alert').should('be.visible')
    .and('contain', 'Conta adicionada com sucesso!')
  })
  
})