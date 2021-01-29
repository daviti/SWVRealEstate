/// Log in to Superworld
describe('Log in to Superworld', () => {
  it('logs in to purchase plot of land', () => {
    expect(true).to.equal(true)
    cy.visit('https://superworldappdev.herokuapp.com/')
    cy.contains('ENTER SUPERWORLD').click()
    cy.wait(3000)
    cy.contains('Click Here').click()
  })

  it('type into an element to log in', () => {
    //log in to SW real ESTATE
    cy.wait(3000)
    cy.get('.MuiBox-root.jss22').click({force: true})
    .type('superworldqaapp@gmail.com')
    cy.get('input[type=password]').click({force: true})
    .type('Testtest1!')
    cy.contains('Sign in').click()
    cy.wait(5000)
    cy.get('.connect-wallet__cardBtns.connect-wallet__redBtn').click({force: true})
    cy.wait(5000)
  })

  // it('connects MetaMask Notification', () => {
  //   cy.window()
  //   cy.visit('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpknn/popup.html')
  //   cy.get('#password').click({force: true})
  // })

  it('type into an element to serach for plots of land', () => {
    //Search for plots of land
    cy.get('.MuiAutocomplete-hasPopupIcon').type('Mexico City')
    cy.wait(10000)
    cy.contains('Mexico City').click({force: true})
    cy.wait(10000)
    cy.end()

  })





})
