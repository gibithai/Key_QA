describe('Task from parent to student', () => {
  it('Task from parent to student', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://canary.ismart.org/')
    // После авторизации выбрать профиль ученика
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type('Parent@ismart.org')
    cy.xpath('//input[@name="password"]').type('123456')
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//h1[normalize-space()="Test1"]').click()
    cy.xpath('//span[contains(text(),"Кабинет родителя")]').click()
    cy.xpath('//button[@class="ismart-19yjot2-Button-container"]').click()
    cy.xpath('//span[@class="ismart-1twvswa"]').type(' Test1')
    cy.xpath('//h4[contains(text(),"Математика (Расширенная версия)")]').click()
    cy.xpath(
      '//a[contains(text(),"Пространственные представления: наверху - внизу")]'
    ).click()
    cy.xpath(
      '//p[contains(text(),"Пространственные представления: наверху - внизу")]'
    ).click()
    cy.xpath('//button[@class="ismart-16zkzwl-Button-container"]').click()
    cy.xpath('//button[contains(text(),"Войти как ученик")]').click()
    cy.contains('Задание от родителей').should('be.visible')
  })
})
