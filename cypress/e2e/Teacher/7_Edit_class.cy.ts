describe('Edit class', () => {
  const userEmail = 'mareseva1974@yandex.ru'
  const userPassword = '123456'

  // Изменение класса
  it('Edit class', () => {
    cy.viewport(1920, 1080)
    cy.visit(String(Cypress.env('BASE_URL')) + 'auth')
    cy.xpath('//input[@name="login"]').type(userEmail)
    cy.xpath('//input[@name="password"]').type(userPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//span[contains(text(),"Кабинет учителя")]').click()
    cy.xpath('//button[contains(text(),"Управление классами")]').click()
    cy.xpath('//button[@class="ismart-nb4590-Button-container"]').invoke('show').click()
    cy.xpath('//p[contains(text(),"Редактировать")]').click()
    cy.xpath('//input[@placeholder="Например, Б"]').clear().type('Имя изменено')
    cy.xpath('//div[@class="ismart-1yej63f-Select-selectedArea"]').click()
    cy.xpath('//div[normalize-space()="2"]').click()
    cy.wait(1000 as number)
    cy.xpath('//button[contains(text(),"Обновить")]').click()
    cy.contains('Имя изменено').should('be.visible')
  })
})
