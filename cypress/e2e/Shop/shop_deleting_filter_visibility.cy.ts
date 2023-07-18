describe('shop test', () => {
  it('Фильтры, удаление и редактирование корзины', () => {
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

    // Проверка, что заголовок страницы содержит 'Магазин — iSmart'
    cy.title().should('include', 'Магазин — iSmart')

    // Проверка, что содержимое корзины соответствует выбранным позициям
    cy.contains('Русский язык ОГЭ').should('have.text', 'Русский язык ОГЭ')
    cy.xpath(
      '//span[@class="ismart-1qc69st-Text-container"][contains(text(),"300 ₽")]'
    ).should('have.text', '300 ₽')
    cy.xpath(
      '//span[@class="ismart-fl2eb0-Text-container"][contains(text(),"1 800 ₽")]'
    ).should('have.text', '1 800 ₽')
    cy.contains('Русский язык ЕГЭ').should('contain', 'Русский язык ЕГЭ')

    // Проверка отображения суммы Итого
    cy.xpath('//span[@class="ismart-kb87dw-Text-container"]').should('be.visible')
    // Удаление выбранных позиций из корзины
    cy.xpath('//span[@class="ismart-1yjihfb-Icon-container"]//*[name()="svg"]').click()
    cy.xpath('(//div[@class="ismart-17an9po-Flexbox-container"])[3]').click()
    cy.xpath('//button[contains(text(),"Удалить (1)")]').click()
  })
})
