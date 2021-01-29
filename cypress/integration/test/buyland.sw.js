/// Log in to Superworld
describe('Log in to Superworld', () => {
  it('logs in to purchase plot of land', () => {
    expect(true).to.equal(true)
    cy.visit('https://superworldappdev.herokuapp.com/')
    cy.get('#gatsby-focus-wrapper > header > div.container-box > div > div > div.navigation-wrapper > a > span.MuiButton-label').click()
    cy.wait(3000)
    cy.contains('BUY REAL ESTATE').click()
    cy.wait(3000)
    cy.contains('Click Here').click()
  })

  it('type into an element to log in', () => {
    //log in to SW real ESTATE
    cy.get('div.MuiBox-root.jss8').click({force: true})
    .type('superworldqaapp@gmail.com')
    cy.get('div.MuiBox-root.jss9').click({force: true})
    .type('Testtest1!')
    cy.contains('Sign in').click()
    cy.get('.connect-wallet__cardBtns.connect-wallet__redBtn').click({force: true})
    cy.wait(10000)
  })

  // it('connects MetaMask Notification', () => {
  //   cy.window()
  //   cy.visit('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpknn/popup.html')
  //   cy.get('#password').click({force: true})
  // })

  it('type into an element to serach for plots of land', () => {
    //Search for plots of land
    cy.get('.MuiAutocomplete-hasPopupIcon').type('Mexico City')
    cy.contains('Mexico').click({force: true})
  cy.wait(1000)
    cy.get('button.mapboxgl-ctrl-icon.mapboxgl-ctrl-zoom-in').click().click().click() .click()
    .end()

  })





})
