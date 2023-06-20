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
    cy.xpath('//button[contains(text(),"Управление классами")]').click()
    cy.xpath('//button[contains(text(),"Новый класс")]').click()
    cy.xpath('//div[@class="ismart-1yej63f-Select-selectedArea"]').click()
    cy.xpath('//div[normalize-space()="1"]').click()

    // Генерируем случайную букву английского алфавита
    const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26))

    // Вводим случайную букву в поле ввода
    cy.xpath('//input[@placeholder="Например, Б"]').clear().type(randomLetter)
    cy.xpath('//button[@class="ismart-ohzuu7-Button-container"]').click()
    cy.wait(2000)
    cy.xpath(
      '//div[@class="ismart-18ha755-Flexbox-container"]//div[@class="ismart-1wgs5pq-Block-container"]'
    )
      .trigger('mouseover', { force: true })
      .click()
    cy.xpath('//p[contains(text(),"Редактировать")]').click()
    cy.xpath('//div[@class="ismart-1yej63f-Select-selectedArea"]').click()
    cy.xpath('//div[normalize-space()="2"]').click()
    cy.xpath('//button[contains(text(),"Обновить")]').click()
    /* cy.xpath('//button[contains(text(),"Добавить ученика")]').click()
    const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26))

    // Вводим случайную букву в поле ввода
    cy.xpath('//textarea[@placeholder="Каждый ученик с новой строки"]')
      .clear()
      .type(randomLetter)
    cy.xpath('//button[contains(text(),"Сохранить")]').click()
    cy.wait(1000)
    cy.xpath('//div[13]//div[1]//button[1]').click()
    cy.xpath('//p[contains(text(),"Редактировать")]').click()
    cy.xpath('//input[@placeholder="Фамилия и Имя"]').clear().type('Test1')
    cy.xpath('//button[@class="ismart-q760xa-Button-container"]').click()
    cy.contains('Test1').should('be.visible') */
  })
})
