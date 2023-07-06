describe('Edit student', () => {
  const userEmail = 'mareseva1974@yandex.ru'
  const userPassword = '123456'
  const newStudentName = 'Имя изменено'
  it('Edit student', () => {
    cy.viewport(1920, 1080)
    // Авторизация в аккаунт
    cy.visit(String(Cypress.env('BASE_URL')) + 'auth')
    cy.xpath('//input[@name="login"]').type(userEmail)
    cy.xpath('//input[@name="password"]').type(userPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//span[contains(text(),"Кабинет учителя")]').click()
    cy.xpath('//button[contains(text(),"Управление классами")]').click()
    cy.xpath(
      '//div[@class="ismart-aniv23-Flexbox-container"]//div[3]//div[1]//button[1]//span[1]//*[name()="svg"]'
    ).click()
    // Редактируем имя и фамилию
    cy.xpath('//p[contains(text(),"Редактировать")]').click()
    cy.xpath('//input[@placeholder="Фамилия и Имя"]').clear().type(newStudentName)
    cy.xpath('//span[@class="ismart-1wt7gtz-Icon-container"]//*[name()="svg"]').click()
    cy.contains(newStudentName).should('be.visible')
  })
})
