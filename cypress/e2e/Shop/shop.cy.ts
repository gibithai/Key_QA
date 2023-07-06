describe('shop test', () => {
  it('shop test', () => {
    cy.visit(String(Cypress.env('BASE_URL')))
    cy.viewport(1920, 1080)
    cy.xpath('//div[@class="ismart-i3f51a-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type('dougcarlin@tut.by')
    cy.xpath('//input[@name="password"]').type('123456')
    cy.xpath('//button[contains(text(),"Войти")]').click()
    // Авторизация в аккаунт с нужными кредеами
    cy.xpath('//div[@class="ismart-mj4ckr-Flexbox-container"]').click()
    cy.visit(String(Cypress.env('BASE_URL')) + 'shop')
    cy.wait(1000)
    // Переход в магазин
    cy.xpath(
      '//div[@class="ismart-milwcx-Block-container"]//div[1]//div[1]//div[1]//span[1]//*[name()="svg"]'
    ).click()
    cy.xpath('//p[contains(text(),"Русский язык")]').click()
    cy.xpath(
      '//div[@class="ismart-klwhgf-Block-container"]//div[2]//div[1]//div[2]//div[3]//button[2]'
    ).click()
    // Фильтры по предметам в магизине (радио кнопки)
    cy.xpath(
      '//div[@class="ismart-4g250r-Flexbox-container"]//div[3]//div[1]//div[1]//div[3]//button[2]'
    ).click()
    cy.xpath(
      '//span[@class="ismart-3nfsk1-Icon-container"]//*[name()="svg"]//*[name()="path" and contains(@clip-rule,"evenodd")]'
    ).click()
    cy.xpath('//button[@class="ismart-1kxq8zk-Button-container"]').click()
    // Переход в корзину с товарами
    cy.wait(3000)
    cy.get('iframe')
      .eq(0)
      .then((iframe) => {
        const body = iframe.contents().find('body')
        const cvc = body.find('[automation-id="tui-input-card-grouped__cvc"]')
        cy.wrap(cvc).focus().type('123')
        cy.wait(2000)
        const payButton = body.find('[automation-id="card-form__submit"]')
        cy.wrap(payButton).click()
        // Заполнение карточной формы (данные дебитовой карты и клик на оплату)
      })
  })
})
