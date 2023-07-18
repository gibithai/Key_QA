describe('catalog functionallity', () => {
  it('catalog tests', () => {
    cy.visit(String(Cypress.env('BASE_URL')))
    cy.xpath(
      '//body/div[@id="app"]/div[@class="ismart-r38pru-ScrollView-wrapper"]/div[@class="ismart-1xtyevz-ScrollView-container"]/div[@class="ismart-5792gp-ScrollView-content"]/div[@class="ismart-4o5ltj-Flexbox-container"]/div[@class="ismart-ha16e2-Flexbox-container"]/div[@class="ismart-10936sf-Flexbox-container"]/div[@class="ismart-1hk1yva-Flexbox-container"]/div[@class="ismart-iixdn1-Flexbox-container"]/div[@class="ismart-1ms4bib-Flexbox-container"]/div[@class="ismart-19rxnq6-Block-container"]/div[@class="ismart-iixdn1-Flexbox-container"]/div[@class="ismart-6kc0lm-Flexbox-container"]/div[1]'
    ).click()
    cy.wait(1000 as number)
    cy.xpath(
      '//body/div[@id="app"]/div[@class="ismart-r38pru-ScrollView-wrapper"]/div[@class="ismart-1xtyevz-ScrollView-container"]/div[@class="ismart-5792gp-ScrollView-content"]/div[@class="ismart-4o5ltj-Flexbox-container"]/div[@class="ismart-ha16e2-Flexbox-container"]/div[@class="ismart-10936sf-Flexbox-container"]/div[@class="ismart-1hk1yva-Flexbox-container"]/div[@class="ismart-iixdn1-Flexbox-container"]/div[@class="ismart-1ms4bib-Flexbox-container"]/div[@class="ismart-19rxnq6-Block-container"]/div[@class="ismart-iixdn1-Flexbox-container"]/div[@class="ismart-6kc0lm-Flexbox-container"]/div[1]'
    ).click()
    cy.xpath('//div[@class="ismart-1pyk4il-Flexbox-container"]//div[1]').click()
    cy.wait(1000 as number)
    cy.xpath('//div[@class="ismart-1pyk4il-Flexbox-container"]//div[1]').click()
    cy.xpath(
      '//body/div[@id="app"]/div[@class="ismart-r38pru-ScrollView-wrapper"]/div[@class="ismart-1xtyevz-ScrollView-container"]/div[@class="ismart-5792gp-ScrollView-content"]/div[@class="ismart-4o5ltj-Flexbox-container"]/div[@class="ismart-ha16e2-Flexbox-container"]/div[@class="ismart-10936sf-Flexbox-container"]/div[@class="ismart-1hk1yva-Flexbox-container"]/div[@class="ismart-iixdn1-Flexbox-container"]/div[@class="ismart-1ms4bib-Flexbox-container"]/div[@class="ismart-1la5m22-Flexbox-container"]/div[@class="ismart-1sra3r3-Grid-container"]/a[3]/div[1]'
    ).click()
    cy.wait(1000 as number)
    cy.go('back')
  })
})
// Тесты по выборке предметов в каталоге, проверка каталога
