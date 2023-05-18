describe('Authorization in the student account', () => {
  it('  Authorization in the student account', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://canary.ismart.org/')
    // После авторизации выбрать профиль ученика
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type('Parent@ismart.org')
    cy.xpath('//input[@name="password"]').type('123456')
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//div[@class="ismart-z951zb-Flexbox-container"]//div[2]//div[2]').click()
    cy.xpath(
      '//body/div[@id="app"]/div[@class="ismart-r38pru-ScrollView-wrapper"]/div[@class="ismart-1xtyevz-ScrollView-container"]/div[@class="ismart-zz75lc-ScrollView-content"]/div[@class="ismart-4o5ltj-Flexbox-container"]/div[@class="ismart-1xt4q15-Flexbox-container"]/div[@class="ismart-z951zb-Flexbox-container"]/form[@class="ismart-m9p5u1"]/div[@class="ismart-v8c4be-Flexbox-container"]/div[@class="ismart-5gneco-Grid-container"]/div[2]'
    ).click()
    // Переход в аккаунт родителя
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Родительский аккаунт")]').click()
    cy.xpath('//p[@class="ismart-1pjcu8j-Paragraph-container"]')
      .invoke('text')
      .should('eq', 'Test1')
    // Через меню родителя
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath(
      '//body/div[@class="ismart-rtrrel-Drop-container"]/div[@class="ismart-r6rs4d-Flexbox-container"]/div[@class="ismart-16e4mz2-ScrollView-wrapper"]/div[@class="ismart-1xtyevz-ScrollView-container"]/div[@class="ismart-7t7otd-ScrollView-content"]/div[1]'
    ).click()
    cy.xpath('//p[@class="ismart-1pjcu8j-Paragraph-container"]')
      .invoke('text')
      .should('eq', 'Вася Пуговкин')
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Родительский аккаунт")]').click()
    // Через Кабинет родителя
    cy.xpath('//span[contains(text(),"Кабинет родителя")]').click()
    cy.xpath('//button[contains(text(),"Войти как ученик")]').click()
    cy.xpath('//p[@class="ismart-1pjcu8j-Paragraph-container"]')
      .invoke('text')
      .should('eq', 'Вася Пуговкин')
  })
})
