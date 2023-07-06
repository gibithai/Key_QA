describe('catalog functionallity', () => {
  it('catalog tests', () => {
    cy.visit(String(Cypress.env('BASE_URL')))
    cy.xpath('//span[contains(text(),"C чего начать")]').click()
    cy.xpath('//div[@class="ismart-1pyk4il-Flexbox-container"]//div[1]').click()
    cy.xpath('//div[@class="ismart-wmfrhu-Flexbox-container"]').click()
  })
})
// Тесты по выборке предметов в каталоге, проверка каталога
