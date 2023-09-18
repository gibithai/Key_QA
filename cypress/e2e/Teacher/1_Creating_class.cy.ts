describe('Creating class', () => {
  const userEmail = 'mareseva1974@yandex.ru'
  const userPassword = '123456'
  const aClass = 'А'

  // Добавление нового ученика//
  it('Creating class', () => {
    cy.viewport(1920, 1080)
    cy.visit(String(Cypress.env('BASE_URL')) + 'auth')
    cy.xpath('//input[@name="login"]').type(userEmail)
    cy.xpath('//input[@name="password"]').type(userPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//span[contains(text(),"Кабинет учителя")]').click()
    cy.xpath('//button[contains(text(),"Новый класс")]').click()
    cy.xpath('//div[@class="ismart-1yej63f-Select-selectedArea"]').click()
    cy.xpath('//div[normalize-space()="1"]').click()
    cy.xpath('//input[@placeholder="Например, Б"]').type(aClass)
    cy.xpath('//button[contains(text(),"Добавить")]').click()
    cy.contains(aClass).should('be.visible')
  })
})
