describe('dropdown list', () => {
  it('checking dropdowns', () => {
    cy.visit('https://canary.ismart.org/design/tasks')
    cy.xpath('//div[@class="ismart-1mwps6i-login-content"]')
    cy.xpath('//input[@name="login"]').type('admin@ismart.org')
    cy.xpath('//input[@name="password"]').type('123456')
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.request('https://canary.ismart.org/design/tasks')
    cy.xpath(
      '//span[@class="ismart-1oy8lsr-Text-container"][contains(text(),"Задания")]'
    ).click()
    cy.get('ismart-1gh1zh8-Select-input').click()
  })
})
