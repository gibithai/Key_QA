describe('AuthorizationISMART', () => {
  // Parent
  const parentEmail = 'parent@ismart.org'
  const parentPassword = '123456'
  const negParentEmailP = 'Parent@ismart.org' // для тестирования верхнего регистра

  // Teacher
  const teacherEmail = 'teacher@ismart.org'
  const teacherPassword = '123456'
  const negTeacherEmailP = 'Teacher@ismart.org' // для тестирования верхнего регистра

  // Admin
  const adminEmail = 'admin@ismart.org'
  const adminPassword = '123456'
  const negAdminEmailP = 'Admin@ismart.org' // для тестирования верхнего регистра

  it('Positive authorization for Parent', () => {
    cy.visit(Cypress.env('BASE_URL'))
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]')
      .click()
      .xpath('//p[contains(text(),"Войти")]')
      .click()
    cy.xpath('//input[@name="login"]').type(parentEmail)
    cy.xpath('//input[@name="password"]').type(parentPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//div[@class="ismart-mj4ckr-Flexbox-container"]').click()
    cy.contains('Test1').should('be.visible')
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Выйти")]').click()
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]')
      .click()
      .xpath('//p[contains(text(),"Войти")]')
      .click()
    cy.xpath('//input[@name="login"]').type(negParentEmailP)
    cy.xpath('//input[@name="password"]').type(parentPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//div[@class="ismart-mj4ckr-Flexbox-container"]').click()
    cy.contains('Test1').should('be.visible')
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Выйти")]').click()
  })

  it('Positive authorization for Teacher', () => {
    cy.visit(Cypress.env('BASE_URL'))
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]')
      .click()
      .xpath('//p[contains(text(),"Войти")]')
      .click()
    cy.xpath('//input[@name="login"]').clear().type(teacherEmail)
    cy.xpath('//input[@name="password"]').clear().type(teacherPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Выйти")]').click()
    cy.wait(3000 as number)
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]')
      .click()
      .xpath('//p[contains(text(),"Войти")]')
      .click()
    cy.xpath('//input[@name="login"]').type(negTeacherEmailP)
    cy.xpath('//input[@name="password"]').type(teacherPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Учитель').should('be.visible')
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Выйти")]').click()
  })

  it('Positive authorization for Admin', () => {
    cy.visit(Cypress.env('BASE_URL'))
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]')
      .click()
      .xpath('//p[contains(text(),"Войти")]')
      .click()
    cy.xpath('//input[@name="login"]').clear().type(adminEmail)
    cy.xpath('//input[@name="password"]').clear().type(adminPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]')
      .click()
      .xpath('//p[contains(text(),"Выйти")]')
      .click()
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type(negAdminEmailP)
    cy.xpath('//input[@name="password"]').type(adminPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Администратор').should('be.visible')
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Выйти")]').click()
  })
})
