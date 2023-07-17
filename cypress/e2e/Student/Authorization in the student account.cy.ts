describe('Авторизация в аккаунте ученика', () => {
  const parentEmail = 'parent@ismart.org'
  const parentPassword = '123456'

  it('Авторизироваться сразу в ученкиа', () => {
    cy.viewport(1920, 1080)
    cy.visit(Cypress.env('BASE_URL'))
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type(parentEmail)
    cy.xpath('//input[@name="password"]').type(parentPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//h1[contains(text(),"Вася Пуговкин")]')
      .invoke('text')
      .should('eq', 'Вася Пуговкин')
  })

  it('переключение через меню родителя', () => {
    cy.visit(Cypress.env('BASE_URL'))
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type(parentEmail)
    cy.xpath('//input[@name="password"]').type(parentPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//h1[normalize-space()="Test1"]').click()
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Вася Пуговкин")]').click()
    cy.xpath('//p[@class="ismart-1pjcu8j-Paragraph-container"]')
      .invoke('text')
      .should('eq', 'Вася Пуговкин')
  })

  it('переключение через профиль родителя', () => {
    cy.visit(Cypress.env('BASE_URL'))
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type(parentEmail)
    cy.xpath('//input[@name="password"]').type(parentPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//h1[normalize-space()="Test1"]').click()
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]').click()
    cy.xpath('//span[contains(text(),"Кабинет родителя")]').click()
    cy.xpath('//button[contains(text(),"Войти как ученик")]').click()
    cy.xpath('//p[@class="ismart-1pjcu8j-Paragraph-container"]')
      .invoke('text')
      .should('eq', 'Вася Пуговкин')
  })
})
