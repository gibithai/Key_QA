describe('Delete class', () => {
  const userEmail = 'mareseva1974@yandex.ru'
  const userPassword = '123456'

  // Удаление класса
  it('Delete class', () => {
    cy.viewport(1920, 1080)
    cy.visit(String(Cypress.env('BASE_URL')) + 'auth')
    cy.xpath('//input[@name="login"]').type(userEmail)
    cy.xpath('//input[@name="password"]').type(userPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//span[contains(text(),"Кабинет учителя")]').click()
    cy.xpath('//button[contains(text(),"Управление классами")]').click()
    cy.xpath('//button[@class="ismart-nb4590-Button-container"]').invoke('show').click()
    cy.xpath('//p[contains(text(),"Удалить")]').click()
    cy.xpath('//button[contains(text(),"Да, удалить")]').click()
  })
})
