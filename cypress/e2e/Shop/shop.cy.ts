import { contains } from 'cypress/types/jquery'

describe('shop test', () => {
  it('shop test', () => {
    // Авторизация в аккаунт с нужными кредами
    cy.visit(String(Cypress.env('BASE_URL')))
    cy.xpath('//div[@class="ismart-i3f51a-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type('dougcarlin@tut.by')
    cy.xpath('//input[@name="password"]').type('123456')
    cy.xpath('//button[contains(text(),"Войти")]').click()
    // Авторизация в аккаунт с нужными кредами
    cy.xpath('//div[@class="ismart-mj4ckr-Flexbox-container"]').click()
    // Переход в магазин
    cy.visit(String(Cypress.env('BASE_URL')) + 'shop')
<<<<<<< HEAD
    cy.wait(1000)
    // Переход в магазин
=======
    cy.wait(2000 as number)
    // Фильтры по предметам в магизине (радио кнопки)
>>>>>>> other
    cy.xpath(
      '//div[@class="ismart-milwcx-Block-container"]//div[1]//div[1]//div[1]//span[1]//*[name()="svg"]'
    ).click()
    cy.xpath('//p[contains(text(),"Русский язык")]').click()
    // Выбор предметов, нажатие кнопки "в корзину", переход в корзину
    cy.xpath(
      '//div[@class="ismart-klwhgf-Block-container"]//div[2]//div[1]//div[2]//div[3]//button[2]'
    ).click()
    // Фильтры по предметам в магизине (радио кнопки)
    cy.xpath(
      '//div[@class="ismart-be45cp-Flexbox-container"]//div[3]//div[1]//div[1]//div[3]//button[2]'
    ).click()
    cy.xpath('//div[4]//div[1]//div[2]//div[3]//button[2]').click()
    cy.xpath('//span[@class="ismart-3nfsk1-Icon-container"]//*[name()="svg"]').click()
    cy.xpath('//button[@class="ismart-1kxq8zk-Button-container"]').click()
<<<<<<< HEAD
    // Переход в корзину с товарами
    cy.wait(3000)
=======
    // Заполнение карточной формы (данные по карте и клик на оплату)
    cy.wait(3000 as number)
>>>>>>> other
    cy.get('iframe')
      .eq(0)
      .then((iframe) => {
        const body = iframe.contents().find('body')
        const cvc = body.find('[automation-id="tui-input-card-grouped__cvc"]')
        cy.wrap(cvc).focus().type('123')
        cy.wait(2000)
        const payButton = body.find('[automation-id="card-form__submit"]')
        cy.wrap(payButton).click()
        // Заполнение карточной формы (данные по карте и клик на оплату)
      })
  })
})
