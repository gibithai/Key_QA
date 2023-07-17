describe('AuthorizationISMART', () => {
  // Parent
  const parentEmail = 'parent@ismart.org'
  const parentPassword = '123456'
  const negParentEmail = 'parentismart.org'
  const negParentPassword = '124567'
  const negParentEmailP = 'Parent@ismart.org' // для тестирования верхнего регистра

  // Teacher
  const teacherEmail = 'teacher@ismart.org'
  const teacherPassword = '123456'
  const negTeacherEmail = 'Teacherismart.org'
  const negTeacherPassword = '124567'
  const negTeacherEmailP = 'Teacher@ismart.org' // для тестирования верхнего регистра

  // Admin
  const adminEmail = 'admin@ismart.org'
  const adminPassword = '123456'
  const negAdminEmail = 'adminismart.org'
  const negAdminPassword = '124567'
  const negAdminEmailP = 'Admin@ismart.org' // для тестирования верхнего регистра

  it('AuthorizationISMART', () => {
    // Parent

    // Позитивный
    cy.visit(Cypress.env('BASE_URL'))
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type(parentEmail)
    cy.xpath('//input[@name="password"]').type(parentPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//div[@class="ismart-mj4ckr-Flexbox-container"]').click()
    cy.contains('Test1').should('be.visible')
    cy.xpath('//p[@class="ismart-1pjcu8j-Paragraph-container"]').click()
    cy.xpath('//p[contains(text(),"Выйти")]').click()
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type(negParentEmailP)
    cy.xpath('//input[@name="password"]').type(parentPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//div[@class="ismart-mj4ckr-Flexbox-container"]').click()
    cy.contains('Test1').should('be.visible')

    // Ученик
    cy.xpath('//p[@class="ismart-1pjcu8j-Paragraph-container"]').click()
    cy.xpath('//p[contains(text(),"Выйти")]').click()
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type(parentEmail)
    cy.xpath('//input[@name="password"]').type(parentPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//h1[contains(text(),"Вася Пуговкин")]').click()
    cy.contains('Вася Пуговкин').should('be.visible')

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
    cy.xpath('//input[@name="password"]').clear().type(negParentPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Неверный логин или пароль').should('be.visible')

    // Негативный кейс parent неверный логин и пароль
    cy.xpath('//input[@name="login"]').clear().type(negParentEmail)
    cy.xpath('//input[@name="password"]').clear().type(negParentPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Неверный логин или пароль').should('be.visible')

    // Teacher

    // Позитивный
    cy.xpath('//input[@name="login"]').clear().type(teacherEmail)
    cy.xpath('//input[@name="password"]').clear().type(teacherPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//p[@class="ismart-1pjcu8j-Paragraph-container"]').click()
    cy.xpath('//p[contains(text(),"Выйти")]').click()
    cy.wait(3000 as number)
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type(negTeacherEmailP)
    cy.xpath('//input[@name="password"]').type(teacherPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Учитель').should('be.visible')
    cy.xpath('//p[@class="ismart-1pjcu8j-Paragraph-container"]').click()
    cy.xpath('//p[contains(text(),"Выйти")]').click()
    cy.wait(3000 as number)

    // Негативный кейс teacher email
    cy.xpath('//p[@class="ismart-1pjcu8j-Paragraph-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type(negTeacherEmail)
    cy.xpath('//input[@name="password"]').type(teacherPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Неверный логин или пароль').should('be.visible')

    // Негативный кейс teacher password
    cy.xpath('//input[@name="login"]').clear().type(teacherEmail)
    cy.xpath('//input[@name="password"]').clear().type(negTeacherPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Неверный логин или пароль').should('be.visible')

    // Негативный кейс teacher неверный логин и пароль
    cy.xpath('//input[@name="login"]').clear().type(negTeacherEmail)
    cy.xpath('//input[@name="password"]').clear().type(negTeacherPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Неверный логин или пароль').should('be.visible')

    // Admin

    // Позитивный
    cy.xpath('//input[@name="login"]').clear().type(adminEmail)
    cy.xpath('//input[@name="password"]').clear().type(adminPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//p[@class="ismart-1pjcu8j-Paragraph-container"]').click()
    cy.xpath('//p[contains(text(),"Выйти")]').click()
<<<<<<< HEAD
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]').click()
=======
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
>>>>>>> other
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type(negAdminEmailP)
    cy.xpath('//input[@name="password"]').type(adminPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Администратор').should('be.visible')

    // Негативный кейс admin email
    cy.xpath('//p[@class="ismart-1pjcu8j-Paragraph-container"]').click()
    cy.xpath('//p[contains(text(),"Выйти")]').click()
    cy.xpath('//p[@class="ismart-1pjcu8j-Paragraph-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type(negAdminEmail)
    cy.xpath('//input[@name="password"]').type(adminPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Неверный логин или пароль').should('be.visible')

    // Негативный кейс admin password
    cy.xpath('//input[@name="login"]').clear().type(adminEmail)
    cy.xpath('//input[@name="password"]').clear().type(negAdminPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Неверный логин или пароль').should('be.visible')
    cy.xpath('//input[@name="login"]').clear().type(adminEmail)
    cy.xpath('//input[@name="password"]').clear().type(negTeacherPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Неверный логин или пароль').should('be.visible')
    cy.xpath('//input[@name="login"]').clear().type(negAdminEmailP)
    cy.xpath('//input[@name="password"]').type(adminPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Неверный логин или пароль').should('be.visible')

    // Негативный кейс admin неверный логин и пароль
    cy.xpath('//input[@name="login"]').clear().type(negAdminEmail)
    cy.xpath('//input[@name="password"]').clear().type(negAdminPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.contains('Неверный логин или пароль').should('be.visible')
  })
})
