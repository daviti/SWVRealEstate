/// <reference types="cypress" />

context('Location', () => {
  beforeEach(() => {
    cy.visit('https://www.superworldapp.com/')
  })

  it('cy.hash() - get the current URL hash', () => {
    // https://www.superworldapp.com/hash
    cy.hash().should('be.empty')
  })

  it('cy.location() - get window.location', () => {
    // https://www.superworldapp.com/location
    cy.location().should((location) => {
      expect(location.hash).to.be.empty
      expect(location.href).to.eq('https://www.superworldapp.com/')
      expect(location.host).to.eq('www.superworldapp.com')
      expect(location.hostname).to.eq('www.superworldapp.com')
      expect(location.origin).to.eq('https://www.superworldapp.com')
      expect(location.pathname).to.eq('/')
      expect(location.port).to.eq('')
      expect(location.protocol).to.eq('https:')
      expect(location.search).to.be.empty

    })
  })

  it('cy.url() - get the current URL', () => {
    // https://www.superworldapp.com/url
    cy.url().should('eq', 'https://www.superworldapp.com/')
    .end()
  })
})
