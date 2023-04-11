describe('Correct and incorrect answer to the question', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('https://canary.ismart.org/')
    cy.get('.ismart-1p15wet-Flexbox-container').click()
    cy.contains('Войти').click()
    cy.get('input[name="login"]').type('Parent@ismart.org')
    cy.get('input[name="password"]').type('123456')
    cy.contains('Войти').click()
    cy.get('.ismart-mj4ckr-Flexbox-container').click()
    cy.visit('https://canary.ismart.org/user')
  })

  it('Correct and incorrect answer to the question', () => {
    cy.visit('https://canary.ismart.org/')
    cy.xpath('//span[contains(text(),"Математика (Расширенная версия)")]').click()
    cy.xpath(
      '//a[contains(text(),"Пространственные представления: наверху - внизу")]'
    ).click()
    cy.xpath(
      '//p[contains(text(),"Пространственные представления: наверху - внизу")]'
    ).click()
    cy.xpath('//button[contains(text(),"Готово")]').click()
    cy.waitUntil(() =>
      cy
        .xpath('//span[@class="ismart-13jccua-Icon-container"]//*[name()="svg"]')
        .should('be.visible')
    )
    cy.xpath('//span[@class="ismart-13jccua-Icon-container"]//*[name()="svg"]').click()
    cy.waitUntil(() =>
      cy
        .xpath('//span[@class="ismart-2epqce-Icon-container"]//*[name()="svg"]')
        .should('be.visible')
    )
    cy.xpath('//span[@class="ismart-2epqce-Icon-container"]//*[name()="svg"]').click()
    cy.waitUntil(() =>
      cy.xpath('//h1[contains(text(),"К сожалению, ошибка!")]').should('be.visible')
    )
    cy.xpath('//h1[contains(text(),"К сожалению, ошибка!")]').should(
      'contain',
      'К сожалению, ошибка!'
    )
  })
})
