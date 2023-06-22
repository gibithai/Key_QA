describe('Task from parent to student', () => {
  const userEmail = 'Parent@ismart.org'
  const userPassword = '123456'

  it('Task from parent to student', () => {
    cy.viewport(1920, 1080)
    cy.visit(String(Cypress.env('BASE_URL')) + 'auth')
    cy.xpath('//input[@name="login"]').type(userEmail)
    cy.xpath('//input[@name="password"]').type(userPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//h1[normalize-space()="Test1"]').click()
    cy.xpath('//span[contains(text(),"Кабинет родителя")]').click()
    cy.xpath('//button[@class="ismart-5akzmu-Button-container"]').click()
    cy.xpath('//span[@class="ismart-1twvswa"]').type(' Test1')
    cy.xpath('//h4[contains(text(),"Математика (Расширенная версия)")]').click()
    cy.xpath(
      '//a[contains(text(),"Пространственные представления: наверху - внизу")]'
    ).click()
    cy.xpath(
      '//p[contains(text(),"Пространственные представления: наверху - внизу")]'
    ).click()
    cy.xpath('//button[@class="ismart-16zkzwl-Button-container"]').click()
    cy.xpath('//button[contains(text(),"Войти как ученик")]').click()
    cy.contains('Задание от родителей').should('be.visible')
  })
})
