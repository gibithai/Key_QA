describe('Creating homework', () => {
  const userEmail = 'mareseva1974@yandex.ru'
  const userPassword = '123456'
  const currentDate = new Date().getDate().toString()

  it('Creating homework', () => {
    // Для всего класса + с датой начала != текущему дню
    cy.viewport(1920, 1080)
    cy.visit(String(Cypress.env('BASE_URL')) + 'auth')
    cy.xpath('//input[@name="login"]').type(userEmail)
    cy.xpath('//input[@name="password"]').type(userPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//button[contains(text(),"Создать задание")]').click()
    cy.xpath('//button[@class="ismart-omlitb-Button-container"]').click()
    cy.xpath('//span[@class="ismart-43gl9z-Icon-container"]//*[name()="svg"]').click()
    cy.xpath('//button[@class="ismart-1m7kcmj-Button-container"]').click()
    cy.xpath('//h1[contains(text(),"Логика")]').click()
    cy.xpath('//p[contains(text(),"Задачи на внимание")]').click()
    cy.xpath('//button[@class="ismart-16zkzwl-Button-container"]').click()
    cy.contains(currentDate).should('exist')
    // Для одного ученика + с датой окончания != текущему дню
    cy.xpath('//button[contains(text(),"Создать занятие")]').click()
    cy.xpath('//button[@class="ismart-omlitb-Button-container"]').click()
    cy.xpath('//button[@class="ismart-1m7kcmj-Button-container"]').click()
    cy.xpath('//h1[contains(text(),"Логика")]').click()
    cy.xpath('//p[contains(text(),"Задачи на внимание")]').click()
    cy.xpath(
      '//button[@class="ismart-3qmtd6-Button-container"]//span[@class="ismart-1pqq9jl-Icon-container"]//*[name()="svg"]'
    ).click()
    cy.xpath(
      '//div[@class="ismart-wq0rxi-Flexbox-container"]//div[2]//div[2]//div[1]//div[1]//div[1]//div[1]//div[1]//input[1]'
    ).click()
    cy.xpath('//button[contains(text(),"Сегодня")]').should('be.disabled')
    cy.xpath('//span[contains(text(),"1 ученик")]').click()
    cy.xpath(
      '//div[@class="ismart-1yrf1jo-Flexbox-container"]//span[@class="ismart-w1blmz-Icon-container-Checkbox-icon"]//*[name()="svg"]'
    ).click()
    cy.xpath(
      '//div[@class="ismart-j3qx0u-ScrollView-content"]//div[1]//div[1]//div[1]//span[1]//*[name()="svg"]'
    ).click()
    cy.xpath('//span[contains(text(),"1 ученик")]').click()
    cy.xpath('//button[@class="ismart-16zkzwl-Button-container"]').click()
    cy.contains('1 ученик').should('be.visible')
    cy.contains(currentDate).should('exist')
  })
})
