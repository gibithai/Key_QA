describe('shop test', () => {
  it('shop test', () => {
    // Авторизация в аккаунт с нужными кредами
    cy.visit(String(Cypress.env('BASE_URL')))
    cy.xpath('//div[@class="ismart-i3f51a-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type('dougcarlin@tut.by')
    cy.xpath('//input[@name="password"]').type('123456')
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//div[@class="ismart-mj4ckr-Flexbox-container"]').click()
    // Переход в магазин
    cy.visit(String(Cypress.env('BASE_URL')) + 'shop')
    cy.wait(2000 as number)
    // Фильтры по предметам в магизине (радио кнопки)
    cy.xpath(
      '//div[@class="ismart-milwcx-Block-container"]//div[1]//div[1]//div[1]//span[1]//*[name()="svg"]'
    ).click()
    cy.xpath('//p[contains(text(),"Русский язык")]').click()
    // Выбор предметов, нажатие кнопки "в корзину", переход в корзину
    cy.xpath(
      '//div[@class="ismart-klwhgf-Block-container"]//div[2]//div[1]//div[2]//div[3]//button[2]'
    ).click()
    cy.xpath(
      '//div[@class="ismart-be45cp-Flexbox-container"]//div[3]//div[1]//div[1]//div[3]//button[2]'
    ).click()
    cy.xpath('//div[4]//div[1]//div[2]//div[3]//button[2]').click()
    cy.xpath('//span[@class="ismart-3nfsk1-Icon-container"]//*[name()="svg"]').click()

    // Проверка выбранных позиций в корзине Полная нЯЯЯЯЯЯЯ!!!!!!!!!!!!!!
    cy.xpath('//div[@class="ismart-1ur7znn-Modal-wrapper"]').should('have.length', 1)
    cy.contains('Математика ОГЭ').should('be.visible')
    cy.contains('Русский язык ОГЭ').should('be.visible')
    cy.contains('Контрольные по математики').should('be.visible')
  })
})
