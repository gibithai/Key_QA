describe('Add students', () => {
  const userEmail = 'mareseva1974@yandex.ru'
  const userPassword = '123456'

  it('Create a class', () => {
    cy.viewport(1920, 1080)
    cy.visit(Cypress.env('BASE_URL'))
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type(userEmail)
    cy.xpath('//input[@name="password"]').type(userPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//span[contains(text(),"Кабинет учителя")]').click()
    cy.xpath('//button[contains(text(),"Управление классами")]').click()
  })
})
