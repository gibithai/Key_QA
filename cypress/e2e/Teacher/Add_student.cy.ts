describe('Add student', () => {
  const userEmail = 'mareseva1974@yandex.ru'
  const userPassword = '123456'
  const studentName = 'Тестовый студент'

  it('Add student', () => {
    cy.viewport(1920, 1080)
    cy.visit(String(Cypress.env('BASE_URL')) + 'auth')
    cy.xpath('//input[@name="login"]').type(userEmail)
    cy.xpath('//input[@name="password"]').type(userPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//span[contains(text(),"Кабинет учителя")]').click()
    cy.xpath('//button[contains(text(),"Управление классами")]').click()
    cy.xpath('//button[contains(text(),"Добавить ученика")]').click()
    cy.xpath('//textarea[@placeholder="Каждый ученик с новой строки"]').type(studentName)
    cy.xpath('//button[contains(text(),"Сохранить")]').click()
    cy.contains(studentName).should('be.visible')
  })
})
