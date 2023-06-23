describe('Delete student', () => {
  const userEmail = 'mareseva1974@yandex.ru'
  const userPassword = '123456'
  it('Delete student', () => {
    cy.viewport(1920, 1080)
    cy.visit(String(Cypress.env('BASE_URL')) + 'auth')
    cy.xpath('//input[@name="login"]').type(userEmail)
    cy.xpath('//input[@name="password"]').type(userPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//span[contains(text(),"Кабинет учителя")]').click()
    cy.xpath('//button[contains(text(),"Управление классами")]').click()
    cy.xpath(
      '//div[@class="ismart-aniv23-Flexbox-container"]//div[3]//div[1]//button[1]//span[1]//*[name()="svg"]'
    ).click()
    cy.xpath('//p[contains(text(),"Удалить")]').click()
    cy.xpath('//button[contains(text(),"Отмена")]').click()
    cy.xpath(
      '//div[@class="ismart-aniv23-Flexbox-container"]//div[3]//div[1]//button[1]//span[1]//*[name()="svg"]'
    ).click()
    cy.xpath('//p[contains(text(),"Удалить")]').click()
    cy.xpath('//button[contains(text(),"Продолжить")]').click()
  })
})
