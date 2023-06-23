describe('Add student', () => {
  const userEmail = 'mareseva1974@yandex.ru'
  const userPassword = '123456'

  it('Add student', () => {
    cy.viewport(1920, 1080)
    cy.visit(String(Cypress.env('BASE_URL')) + 'auth')
    cy.xpath('//input[@name="login"]').type(userEmail)
    cy.xpath('//input[@name="password"]').type(userPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
  })
})
