describe('Authorization in the student account', () => {
  it('  Authorization in the student account', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://canary.ismart.org/')
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type('admin@ismart.org')
    cy.xpath('//input[@name="password"]').type('123456')
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath(
      '//span[@class="ismart-1oy8lsr-Text-container"][contains(text(),"Задания")]'
    ).click()
    cy.xpath('//input[@placeholder="Класс"]').click()
    cy.wait(2000)
    cy.get('.ismart-16bfhhs-Select-option').contains('1 класс').click()
    cy.xpath(
      '//span[@class="ismart-11ht05k-Icon-container-Checkbox-icon"]//*[name()="svg"]'
    ).click()
  })
})
