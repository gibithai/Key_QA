describe('Create a class', () => {
  it('Create a class', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://canary.ismart.org/')
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type('mareseva1974@yandex.ru')
    cy.xpath('//input[@name="password"]').type('123456')
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//span[contains(text(),"Кабинет учителя")]').click()
    cy.wait(15000)
    cy.xpath('//button[contains(text(),"Новый класс")]').click()
  })
})
