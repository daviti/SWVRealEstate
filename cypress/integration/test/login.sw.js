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
    cy.get('.MuiBox-root.jss8')
    .type('ortizcdavid@gmail.com')
    cy.get('#passwordField').click({force: true})
    .type('75202c50')
    cy.contains('Sign in').click()
    cy.get('.connect-wallet__cardBtns.connect-wallet__redBtn').click({force: true})
cy.pause()
  })

  it('type into an element to add a metamask wallet', () => {
    //log in to SW real ESTATE
    cy.get('.MuiBox-root.jss8')
    .type('ortizcdavid@gmail.com')
    cy.get('#passwordField').click({force: true})
    .type('75202c50')
    cy.contains('Sign in').click()
    cy.get('.connect-wallet__cardBtns.connect-wallet__redBtn').click({force: true})

  })





  .end()
})
