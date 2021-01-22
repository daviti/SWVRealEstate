/// <reference types="cypress" />
describe('Log in to Superworld', () => {
  it('logs in to purchase plot of land', () => {
    expect(true).to.equal(true)
    cy.visit('https://www.superworldapp.com/')
    cy.contains('Get Started').click()
    cy.wait(2000)
    cy.contains('BUY REAL ESTATE').click()
    cy.wait(2000)
    cy.contains('Click Here').click()

  })

  it('type into an element to log in', () => {
    //log in to SW real ESTATE
    cy.get('div.MuiBox-root.jss8').click({force: true})
    .type('superworldqaapp@gmail.com')
    cy.get('#passwordField').click({force: true})
    .type('Testtest1!')
    cy.contains('Sign in').click()
    cy.get('.connect-wallet__cardBtns.connect-wallet__redBtn').click({force: true})
    cy.wait(10000)
  })

  it('type into an element to serach for plots of land', () => {
    //log in to SW real ESTATE
    cy.get('input').type('Tulum')
    //cy.get('.popover').should('be.visible').contains('Tulum, Quintana Roo, Mexico').click()
    .end()

  })





})
