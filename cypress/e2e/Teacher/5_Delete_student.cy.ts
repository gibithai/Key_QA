describe('Delete student', () => {
  const userEmail = 'mareseva1974@yandex.ru'
  const userPassword = '123456'
  it('Delete student', () => {
    // Авторизуемся под учеником
    cy.viewport(1920, 1080)
    cy.visit(String(Cypress.env('BASE_URL')) + 'auth')
    cy.xpath('//input[@name="login"]').type(userEmail)
    cy.xpath('//input[@name="password"]').type(userPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    // переходим в кабинет учителя
    cy.xpath('//span[contains(text(),"Кабинет учителя")]').click()
    cy.xpath('//button[contains(text(),"Управление классами")]').click()
    cy.xpath(
      '//button[@class="ismart-fgqv0o-Button-container"]//span[@class="ismart-1d58i9n-Icon-container"]//*[name()="svg"]'
    ).click()
    // Удаление ученика
    cy.xpath('//p[contains(text(),"Удалить")]').click()
    cy.xpath('//button[contains(text(),"Отмена")]').click()
    cy.xpath(
      '//button[@class="ismart-fgqv0o-Button-container"]//span[@class="ismart-1d58i9n-Icon-container"]//*[name()="svg"]'
    ).click()
    cy.xpath('//p[contains(text(),"Удалить")]').click()
    cy.xpath('//button[contains(text(),"Продолжить")]').click()
  })
})
