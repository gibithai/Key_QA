describe('Creating homework', () => {
  const userEmail = 'mareseva1974@yandex.ru'
  const userPassword = '123456'
  const currentDate = new Date().getDate().toString()

  it('Creating homework', () => {
    cy.viewport(1920, 1080)
    cy.visit(String(Cypress.env('BASE_URL')) + 'auth')
    cy.xpath('//input[@name="login"]').type(userEmail)
    cy.xpath('//input[@name="password"]').type(userPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//button[contains(text(),"Создать задание")]').click()
    cy.xpath('//button[@class="ismart-omlitb-Button-container"]').click()
    cy.xpath('//span[@class="ismart-43gl9z-Icon-container"]//*[name()="svg"]').click()
    cy.xpath('//button[@class="ismart-1m7kcmj-Button-container"]').click()
    cy.xpath('//h4[contains(text(),"Математика (Расширенная версия)")]').click()
    cy.xpath(
      '//a[contains(text(),"Пространственные представления: наверху - внизу")]'
    ).click()
    cy.xpath(
      '//p[contains(text(),"Пространственные представления: наверху - внизу")]'
    ).click()
    cy.xpath('//button[@class="ismart-16zkzwl-Button-container"]').click()
    cy.contains(currentDate).should('exist')
  })
})
