describe('ParentProfile', () => {
  const teacherLogin = 'mareseva1974@yandex.ru'
  const teacherPassword = '123456'
  const BASE_URL = Cypress.env('BASE_URL')

  // Функция для выполнения всех действий
  function authTeacher(teacherLogin, teacherPassword) {
    cy.visit(BASE_URL)
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type(teacherLogin)
    cy.xpath('//input[@name="password"]').type(teacherPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//span[contains(text(),"Кабинет учителя")]').click()
  }
  function creatingHomework(teacherLogin, teacherPassword) {
    cy.visit(BASE_URL)
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type(teacherLogin)
    cy.xpath('//input[@name="password"]').type(teacherPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//button[contains(text(),"Создать задание")]').click()
    cy.xpath('//button[@class="ismart-omlitb-Button-container"]').click()
    cy.xpath('//span[@class="ismart-43gl9z-Icon-container"]//*[name()="svg"]').click()
    cy.xpath('//button[@class="ismart-1m7kcmj-Button-container"]').click()
    cy.xpath('//span[@class="ismart-1twvswa"]').click().clear()
    cy.xpath('//div[@class="ismart-1t2g08f-Flexbox-container"]').type('TestHomework1')
    cy.xpath('//h1[contains(text(),"Логика")]').click()
    cy.xpath('//a[contains(text(),"Логические задачи 1 класс (часть 1)")]').click()
    cy.xpath('//p[contains(text(),"Задачи на внимание")]').click()
    cy.xpath('//button[@class="ismart-16zkzwl-Button-container"]').click()
    cy.xpath('//h2[contains(text(),"Задачи на внимание")]').should('exist')
  }
  it('creatingHomework', () => {
    creatingHomework(teacherLogin, teacherPassword)
})

  it('Удаление домашней работы', () => {
    authTeacher(teacherLogin, teacherPassword)
    cy.xpath('').click()
  })
})
