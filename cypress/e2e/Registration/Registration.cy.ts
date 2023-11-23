/*
As a guest/visitor
I want to register in Ismart platform
And make sure that registration process is positive
*/
describe('test registration', () => {
  const userEmail = Math.random().toString(16) + '@ismart.org'
  const userPassword = 'Santasan11'
  const userName = 'MisterKey'
  const userNumber = '+7 (930) 444-44-44'
  const studentName = 'Mister A'
  it('test registration positive', () => {
    cy.visit(String(Cypress.env('BASE_URL')) + 'auth/register')
    cy.xpath('//div[@class="ismart-1q609jp-Flexbox-container"]').click()

    cy.xpath('//input[@placeholder="Ваша электронная почта"]')
      .type(userEmail)
      .should('have.value', userEmail)

    cy.xpath('//input[@placeholder="Придумайте пароль"]')
      .type(userPassword)
      .should('have.value', userPassword)

    cy.xpath('//button[contains(text(),"Продолжить")]').click()

    cy.xpath('//div[@class="ismart-1sxq380-username-field"]').type(userName)

    cy.xpath('//input[@placeholder="+7 (999) 999-99-99"]')
      .type(userNumber.slice(2))
      .should('have.value', userNumber)

    cy.xpath('//button[contains(text(),"Продолжить")]').click()

    cy.xpath('//div[@class="ismart-14hzrlr-Field-content"]').type(studentName)
    cy.xpath('//button[contains(text(),"Продолжить")]').click()
    cy.xpath('//button[contains(text(),"Пропустить обучение")]').click()
  })
})
