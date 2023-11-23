describe('catalog functionallity', () => {
  it('catalog tests', () => {
    cy.visit(String(Cypress.env('BASE_URL')))
    cy.scrollTo(0, 5000, { ensureScrollable: false })
    cy.wait(1000 as number)
    cy.xpath('//div[@class="ismart-1pyk4il-Flexbox-container"]//div[1]')
      .click()
      .wait(1000 as number)
      .click()
    cy.xpath('//div[@class="ismart-10jz0ua-Flexbox-container"]//div[1]').click()
    cy.xpath('//span[contains(text(),"Математика")]').click()
    cy.xpath('//a[@href="/catalog/math-full/"]//div[@id="base"]').click()
    cy.wait(1000 as number)
    cy.go('back')
    cy.xpath(
      '//body/div[@id="app"]/div[@class="ismart-r38pru-ScrollView-wrapper"]/div[@class="ismart-1xtyevz-ScrollView-container"]/div[@class="ismart-5792gp-ScrollView-content"]/div[@class="ismart-1v2fkka-Flexbox-container"]/div[@class="ismart-ha16e2-Flexbox-container"]/div[@class="ismart-10936sf-Flexbox-container"]/div[@class="ismart-1hk1yva-Flexbox-container"]/div[@class="ismart-iixdn1-Flexbox-container"]/div[@class="ismart-1ms4bib-Flexbox-container"]/div[@class="ismart-19rxnq6-Block-container"]/div[@class="ismart-iixdn1-Flexbox-container"]/div[@class="ismart-6kc0lm-Flexbox-container"]/div[1]'
    )
    cy.go('back')
  })
})
// Тесты по выборке предметов в каталоге, проверка каталога
