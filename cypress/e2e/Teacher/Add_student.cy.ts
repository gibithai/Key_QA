describe('test registration', () => {
  const userEmail = Math.random().toString(16) + '@ismart.org'
  const userPassword = 'Santasan11'
  const userName = 'Mister Key'
  const userNumber = '+7 (930) 444-44-44'

  it('test registration positive', () => {
    cy.visit(Cypress.env('BASE_URL' + 'auth / register'))
    cy.xpath('//div[@class="ismart-4sxigk-Flexbox-container"]').click()

    // cy.get('.ismart-mgi866-Flexbox-container')
    // .should('contain', 'Регистрация')
    // доп проверка что это форма регистрации

    cy.xpath('//input[@placeholder="Ваша электронная почта"]')
      .type(userEmail)
      .should('have.value', userEmail)

    cy.xpath('//input[@placeholder="Придумайте пароль"]')
      .type(userPassword)
      .should('have.value', userPassword)

    cy.xpath('//button[contains(text(),"Продолжить")]').click()
    /* заканчивается форма регистрации
           и дальше отркывается окно с именем и номером */

    cy.xpath('//div[@class="ismart-15vthlk-username-content"]').click()

    cy.xpath('//input[@placeholder="Иванова Мария Александровна"]')
      .type(userName)
      .should('have.value', userName)

    cy.xpath('//input[@placeholder="+7 (999) 999-99-99"]')
      .type(userNumber.slice(2))
      .should('have.value', userNumber)

    cy.xpath('//button[contains(text(),"Продолжить")]').click()

    cy.reload()
  })
})