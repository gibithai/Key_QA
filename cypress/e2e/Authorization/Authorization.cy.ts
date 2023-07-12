describe('AuthorizationISMART', () => {
  const parentEmail = 'parent@ismart.org'
  const parentPassword = '123456'
  const negParentEmail = 'parentismart.org'
  const negParrentPassword = '124567'

  const teachertEmail = 'teacher@ismart.org'
  const teacherPassword = '123456'
  const negTeacherEmail = 'Teacherismart.org'
  const negTeacherPassword = '124567'

  const admintEmail = 'admin@ismart.org'
  const adminPassword = '123456'
  const negAdminEmail = 'adminismart.org'
  const negAdminPassword = '124567'

  it('AuthorizationISMART', () => {
    // Parent

    // Позитивный
    cy.visit(Cypress.env('BASE_URL'))
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type(parentEmail)
    cy.xpath('//input[@name="password"]').type(parentPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//div[@class="ismart-mj4ckr-Flexbox-container"]').click()
    cy.contains('Test1').should('be.visible')

    // Негативный кейс parent email
    cy.xpath('//p[@class="ismart-1pjcu8j-Paragraph-container"]').click()
    cy.xpath('//p[contains(text(),"Выйти")]').click()
    cy.xpath('//p[@class="ismart-1pjcu8j-Paragraph-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type(negParentEmail)
    cy.xpath('//input[@name="password"]').type(parentPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Неверный логин или пароль').should('be.visible')
    // Негативный кейс parent password
    cy.xpath('//input[@name="login"]').clear().type(parentEmail)
    cy.xpath('//input[@name="password"]').clear().type(negParrentPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Неверный логин или пароль').should('be.visible')

    // Teacher

    // Позитивный
    cy.xpath('//input[@name="login"]').clear().type(teachertEmail)
    cy.xpath('//input[@name="password"]').clear().type(teacherPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//p[@class="ismart-1pjcu8j-Paragraph-container"]').click()
    cy.xpath('//p[contains(text(),"Выйти")]').click()
    cy.wait(5000)
    // Негативный кейс teacher email
    cy.xpath('//p[@class="ismart-1pjcu8j-Paragraph-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type(negTeacherEmail)
    cy.xpath('//input[@name="password"]').type(teacherPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Неверный логин или пароль').should('be.visible')
    // Негативный кейс teacher password
    cy.xpath('//input[@name="login"]').clear().type(teachertEmail)
    cy.xpath('//input[@name="password"]').clear().type(negTeacherPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Неверный логин или пароль').should('be.visible')

    // Admin

    // Позитивный
    cy.xpath('//input[@name="login"]').clear().type(admintEmail)
    cy.xpath('//input[@name="password"]').clear().type(adminPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//p[@class="ismart-1pjcu8j-Paragraph-container"]').click()
    cy.xpath('//p[contains(text(),"Выйти")]').click()
    cy.wait(5000)
    // Негативный кейс admin email
    cy.xpath('//p[@class="ismart-1pjcu8j-Paragraph-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type(negAdminEmail)
    cy.xpath('//input[@name="password"]').type(adminPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Неверный логин или пароль').should('be.visible')
    // Негативный кейс admin password
    cy.xpath('//input[@name="login"]').clear().type(admintEmail)
    cy.xpath('//input[@name="password"]').clear().type(negAdminPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Неверный логин или пароль').should('be.visible')
  })
})
