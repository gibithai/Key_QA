describe('ParentProfile', () => {
  const teacherLogin = 'mareseva1974@yandex.ru'
  const teacherPassword = '123456'
  const BASE_URL = Cypress.env('BASE_URL')
  const searchText = /TestHomework1/

  function loginTeacher() {
    cy.visit(BASE_URL)
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type(teacherLogin)
    cy.xpath('//input[@name="password"]').type(teacherPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//span[contains(text(),"Кабинет учителя")]').click()
  }

  function creatingHomework() {
    cy.xpath('//button[contains(text(),"Создать занятие")]').click()
    cy.xpath('//button[@class="ismart-omlitb-Button-container"]').click()
    cy.xpath('//span[@class="ismart-43gl9z-Icon-container"]//*[name()="svg"]').click()
    cy.xpath('//button[@class="ismart-1m7kcmj-Button-container"]').click()
    cy.xpath('//span[@class="ismart-1twvswa"]').type('TestHomework1')
    cy.xpath('//h1[contains(text(),"Логика")]').click()
    cy.xpath('//a[contains(text(),"Логические задачи 1 класс (часть 1)")]').click()
    cy.xpath('//p[contains(text(),"Задачи на внимание")]').click()
    cy.xpath('//button[@class="ismart-16zkzwl-Button-container"]').click()
  }
  function TcreatingHomework() {
    cy.xpath('//button[contains(text(),"Создать занятие")]').click()
    cy.xpath('//button[@class="ismart-omlitb-Button-container"]').click()
    cy.xpath('//button[@class="ismart-1m7kcmj-Button-container"]').click()
    cy.xpath('//span[@class="ismart-1twvswa"]').type('TestHomework2')
    cy.xpath('//h1[contains(text(),"Логика")]').click()
    cy.xpath('//a[contains(text(),"Логические задачи 1 класс (часть 1)")]').click()
    cy.xpath('//p[contains(text(),"Задачи на внимание")]').click()
    cy.xpath('//button[@class="ismart-16zkzwl-Button-container"]').click()
  }

  before(() => {
    loginTeacher()
  })

  it('creatingHomework', () => {
    creatingHomework()
    TcreatingHomework()
  })

  it('Удаление домашней работы', () => {
    loginTeacher()
    cy.xpath('//span[contains(text(),"Домашняя работа от 19 ИюляTestHomework1")]')
      .contains(/TestHomework1/)
      .click()
    cy.xpath('//div[@class="ismart-1hhozt1-Flexbox-container"]').click()
    cy.xpath('//span[@class="ismart-1a764mv-Text-container"]').click()
    cy.xpath('//button[contains(text(),"Удалить задание")]').click()
    cy.contains(/TestHomework1/).should('have.length', 1)
  })
})
