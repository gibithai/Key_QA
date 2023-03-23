describe('test registration', () => {
  const userEmail = Math.random().toString(16) + '@ismart.org'
  const userPassword = 'Santasan11'
  const userName = 'Mister Key'
  const userNumber = '+7 (930) 444-44-44'

  it('test registration positive', () => {
    cy.visit('https://canary.ismart.org/auth/register')

    cy.get('.ismart-4sxigk-Flexbox-container').click()

    // cy.get('.ismart-mgi866-Flexbox-container')
    // .should('contain', 'Регистрация')
    // доп проверка что это форма регистрации

    cy.get('.ismart-k1l7r3-email-content > .ismart-d3nllz-TextField-input')
      .type(userEmail)
      .should('have.value', userEmail)

    cy.get('.ismart-1ppyx0w-password-content > .ismart-d3nllz-TextField-input')
      .type(userPassword)
      .should('have.value', userPassword)

    cy.get('.ismart-19ev8bo-Button-container').click()
    /* заканчивается форма регистрации
           и дальше отркывается окно с именем и номером */

    cy.get('.ismart-87he7f-Button-container').click()

    cy.get('.ismart-d3nllz-TextField-input').type(userName).should('have.value', userName)

    cy.get('.form-control').type(userNumber.slice(2)).should('have.value', userNumber)

    cy.get('.ismart-87he7f-Button-container').click()

    cy.reload()
  })
})
