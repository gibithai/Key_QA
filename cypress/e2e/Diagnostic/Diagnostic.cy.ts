describe('guest diagnostic', () => {
  it('guest diagnostic', () => {
    cy.visit(Cypress.env('BASE_URL'))
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.visit('https://canary.ismart.org/diagnostics/create')
    cy.xpath('//div[@class="ismart-17nvw1w-Block-container"]').click()
    cy.wait(2000)
    cy.xpath(
      '//body/div[@id="app"]/div[@class="ismart-r38pru-ScrollView-wrapper"]/div[@class="ismart-1xtyevz-ScrollView-container"]/div[@class="ismart-zz75lc-ScrollView-content"]/div[@class="ismart-4o5ltj-Flexbox-container"]/div[@class="ismart-ha16e2-Flexbox-container"]/div[@class="ismart-137t2zj-Flexbox-container"]/div[@class="ismart-edhpy-Flexbox-container"]/div[@class="ismart-14t7r2j-Flexbox-container"]/div[@class="ismart-yhm5lg-Flexbox-container"]/div[1]'
    ).click()
    cy.xpath('//div[@class="ismart-yhm5lg-Flexbox-container"]//div[1]').click()
    cy.xpath('//div[@class="ismart-1tzrjz2-Flexbox-container"]').click()
    cy.xpath('//button[contains(text(),"Начать")]').click()
    for (let i = 0; i <= 14; i++) {
      cy.wait(2000)
      if (Math.round(Math.random()) === 1) {
        cy.get('#dev-menu__button_right').click()
      } else {
        cy.get('#dev-menu__button_wrong').click()
      }
    }
  })
})
