describe('AuthorizationISMART', () => {
  it('AuthorizationISMART', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://beta.ismart.org/')
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type('Parent@ismart.org')
    cy.xpath('//input[@name="password"]').type('123456')
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//div[@class="ismart-mj4ckr-Flexbox-container"]').click()
    cy.contains('Test1').should('be.visible')
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Выйти")]').contains('Выйти').click()

    // Авторизация за ученика

    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type('Parent@ismart.org')
    cy.xpath('//input[@name="password"]').type('123456')
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//h1[contains(text(),"Вася Пуговкин")]').click()
    cy.contains('Вася Пуговкин').should('be.visible')
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Выйти")]').contains('Выйти').click()
  })
})
