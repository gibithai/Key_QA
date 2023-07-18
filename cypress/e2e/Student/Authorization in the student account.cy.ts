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
<<<<<<< HEAD
    cy.xpath('//h1[contains(text(),"Вася Пуговкин")]').click()
    cy.xpath(
      '//body/div[@id="app"]/div[@class="ismart-r38pru-ScrollView-wrapper"]/div[@class="ismart-1xtyevz-ScrollView-container"]/div[@class="ismart-zz75lc-ScrollView-content"]/div[@class="ismart-4o5ltj-Flexbox-container"]/div[@class="ismart-1xt4q15-Flexbox-container"]/div[@class="ismart-z951zb-Flexbox-container"]/form[@class="ismart-m9p5u1"]/div[@class="ismart-v8c4be-Flexbox-container"]/div[@class="ismart-5gneco-Grid-container"]/div[2]'
    ).click()
<<<<<<< HEAD:cypress/e2e/Student/Authorization in the student account.cy.ts
=======
    cy.xpath('//p[@class="ismart-1pjcu8j-Paragraph-container"]')
      .invoke('text')
      .should('eq', 'Вася Пуговкин')
>>>>>>> other:cypress/e2e/Student/Student_auth.cy.ts
    // Переход в аккаунт родителя
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Родительский аккаунт")]').click()
    cy.xpath('//p[@class="ismart-1pjcu8j-Paragraph-container"]')
      .invoke('text')
      .should('eq', 'Test1')
=======
    cy.xpath('//h1[contains(text(),"Вася Пуговкин")]')
      .invoke('text')
      .should('eq', 'Вася Пуговкин')
  })
>>>>>>> 34d8bdc9d50472ea3d17db99b60645467a72261d

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
