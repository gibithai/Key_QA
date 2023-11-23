/*
As a user
I want to make negative authorization to platform
And check negative authorization process for 3 roles (Parent, Teacher, Admin)
And the result of this test should failed
*/
describe('AuthorizationISMART', () => {
  // Parent
  const parentEmail = 'parent@ismart.org'
  const parentPassword = '123456'
  const negParentEmail = 'parentismart.org'
  const negParentPassword = '124567'

  // Teacher
  const teacherEmail = 'teacher@ismart.org'
  const teacherPassword = '123456'
  const negTeacherEmail = 'Teacherismart.org'
  const negTeacherPassword = '124567'

  // Admin
  const adminEmail = 'admin@ismart.org'
  const adminPassword = '123456'
  const negAdminEmail = 'adminismart.org'
  const negAdminPassword = '124567'

  it('Negative authorization for Parent with invalid email', () => {
    cy.visit(Cypress.env('BASE_URL'))
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]')
      .click()
      .xpath('//p[contains(text(),"Войти")]')
      .click()
    cy.xpath('//input[@name="login"]').type(negParentEmail)
    cy.xpath('//input[@name="password"]').type(parentPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Неверный логин или пароль').should('be.visible')
  })

  it('Negative authorization for Parent with invalid password', () => {
    cy.visit(Cypress.env('BASE_URL'))
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]')
      .click()
      .xpath('//p[contains(text(),"Войти")]')
      .click()
    cy.xpath('//input[@name="login"]').clear().type(parentEmail)
    cy.xpath('//input[@name="password"]').clear().type(negParentPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Неверный логин или пароль').should('be.visible')
  })

  it('Negative authorization for Parent with invalid email and password', () => {
    cy.visit(Cypress.env('BASE_URL'))
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]')
      .click()
      .xpath('//p[contains(text(),"Войти")]')
      .click()
    cy.xpath('//input[@name="login"]').clear().type(negParentEmail)
    cy.xpath('//input[@name="password"]').clear().type(negParentPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Неверный логин или пароль').should('be.visible')
  })

  it('Negative authorization for Teacher with invalid email', () => {
    cy.visit(Cypress.env('BASE_URL'))
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]')
      .click()
      .xpath('//p[contains(text(),"Войти")]')
      .click()
    cy.xpath('//input[@name="login"]').clear().type(negTeacherEmail)
    cy.xpath('//input[@name="password"]').clear().type(teacherPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Неверный логин или пароль').should('be.visible')
  })

  it('Negative authorization for Teacher with invalid password', () => {
    cy.visit(Cypress.env('BASE_URL'))
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]')
      .click()
      .xpath('//p[contains(text(),"Войти")]')
      .click()
    cy.xpath('//input[@name="login"]').clear().type(teacherEmail)
    cy.xpath('//input[@name="password"]').clear().type(negTeacherPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Неверный логин или пароль').should('be.visible')
  })

  it('Negative authorization for Teacher with invalid email and password', () => {
    cy.visit(Cypress.env('BASE_URL'))
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]')
      .click()
      .xpath('//p[contains(text(),"Войти")]')
      .click()
    cy.xpath('//input[@name="login"]').clear().type(negTeacherEmail)
    cy.xpath('//input[@name="password"]').clear().type(negTeacherPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Неверный логин или пароль').should('be.visible')
  })

  it('Negative authorization for Admin with invalid email', () => {
    cy.visit(Cypress.env('BASE_URL'))
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]')
      .click()
      .xpath('//p[contains(text(),"Войти")]')
      .click()
    cy.xpath('//input[@name="login"]').clear().type(negAdminEmail)
    cy.xpath('//input[@name="password"]').clear().type(adminPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Неверный логин или пароль').should('be.visible')
  })

  it('Negative authorization for Admin with invalid password', () => {
    cy.visit(Cypress.env('BASE_URL'))
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]')
      .click()
      .xpath('//p[contains(text(),"Войти")]')
      .click()
    cy.xpath('//input[@name="login"]').clear().type(adminEmail)
    cy.xpath('//input[@name="password"]').clear().type(negAdminPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Неверный логин или пароль').should('be.visible')
  })

  it('Negative authorization for Admin with invalid email and password', () => {
    cy.visit(Cypress.env('BASE_URL'))
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]')
      .click()
      .xpath('//p[contains(text(),"Войти")]')
      .click()
    cy.xpath('//input[@name="login"]').clear().type(negAdminEmail)
    cy.xpath('//input[@name="password"]').clear().type(negAdminPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Неверный логин или пароль').should('be.visible')
  })
})
