describe('guest diagnostic', () => {
  it('test diaagnostic', () => {
    cy.visit('https://canary.ismart.org/diagnostics')
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.visit('https://canary.ismart.org/diagnostics/create')
    cy.xpath('//div[@class="ismart-yhm5lg-Flexbox-container"]//div[1]')
    cy.wait(2000)
    cy.xpath(
      '//body/div[@id="app"]/div[@class="ismart-r38pru-ScrollView-wrapper"]/div[@class="ismart-1xtyevz-ScrollView-container"]/div[@class="ismart-zz75lc-ScrollView-content"]/div[@class="ismart-4o5ltj-Flexbox-container"]/div[@class="ismart-ha16e2-Flexbox-container"]/div[@class="ismart-137t2zj-Flexbox-container"]/div[@class="ismart-edhpy-Flexbox-container"]/div[@class="ismart-14t7r2j-Flexbox-container"]/div[@class="ismart-yhm5lg-Flexbox-container"]/div[1]'
    ).click()
    cy.xpath('//div[@class="ismart-yhm5lg-Flexbox-container"]//div[1]').click()
    cy.xpath('//div[@class="ismart-1tzrjz2-Flexbox-container"]').click()
    cy.xpath('//button[contains(text(),"Начать")]').click()
    cy.wait(1500)
    cy.xpath('//span[@class="ismart-13jccua-Icon-container"]//*[name()="svg"]').click()
    cy.waitUntil(() =>
      cy
        .xpath('//span[@class="ismart-13jccua-Icon-container"]//*[name()="svg"]')
        .should('be.visible')
    )
    cy.wait(1500)
    cy.xpath('//span[@class="ismart-13jccua-Icon-container"]//*[name()="svg"]').click()
    cy.waitUntil(() =>
      cy
        .xpath('//span[@class="ismart-13jccua-Icon-container"]//*[name()="svg"]')
        .should('be.visible')
    )
    cy.wait(1500)
    cy.xpath('//span[@class="ismart-13jccua-Icon-container"]//*[name()="svg"]').click()
    cy.wait(1500)
    cy.xpath('//span[@class="ismart-2epqce-Icon-container"]//*[name()="svg"]')
    cy.wait(1500)
    cy.xpath('//span[@class="ismart-2epqce-Icon-container"]//*[name()="svg"]')
    cy.wait(1500)
    cy.xpath('//span[@class="ismart-13jccua-Icon-container"]//*[name()="svg"]').click()
    cy.waitUntil(() =>
      cy
        .xpath('//span[@class="ismart-13jccua-Icon-container"]//*[name()="svg"]')
        .should('be.visible')
    )
    cy.wait(1500)
    cy.xpath('//span[@class="ismart-13jccua-Icon-container"]//*[name()="svg"]').click()
    cy.wait(1500)
    cy.xpath('//span[@class="ismart-2epqce-Icon-container"]//*[name()="svg"]')
    cy.wait(1500)
    cy.xpath('//span[@class="ismart-2epqce-Icon-container"]//*[name()="svg"]')
    cy.wait(1500)
    cy.xpath('//span[@class="ismart-13jccua-Icon-container"]//*[name()="svg"]').click()
    cy.waitUntil(() =>
      cy
        .xpath('//span[@class="ismart-13jccua-Icon-container"]//*[name()="svg"]')
        .should('be.visible')
    )
    cy.wait(1500)
    cy.xpath('//span[@class="ismart-13jccua-Icon-container"]//*[name()="svg"]').click()
    cy.wait(1500)
    cy.xpath('//span[@class="ismart-2epqce-Icon-container"]//*[name()="svg"]')
    cy.wait(1500)
    cy.xpath('//span[@class="ismart-2epqce-Icon-container"]//*[name()="svg"]')
    cy.wait(1500)
    cy.xpath('//span[@class="ismart-13jccua-Icon-container"]//*[name()="svg"]').click()
    cy.waitUntil(() =>
      cy
        .xpath('//span[@class="ismart-13jccua-Icon-container"]//*[name()="svg"]')
        .should('be.visible')
    )
    cy.wait(1500)
    cy.xpath('//span[@class="ismart-13jccua-Icon-container"]//*[name()="svg"]').click()
    cy.wait(1500)
    cy.xpath('//span[@class="ismart-2epqce-Icon-container"]//*[name()="svg"]')
    cy.wait(1500)
    cy.xpath('//span[@class="ismart-2epqce-Icon-container"]//*[name()="svg"]')
    cy.wait(1500)
    cy.xpath('//span[@class="ismart-13jccua-Icon-container"]//*[name()="svg"]').click()
    cy.waitUntil(() =>
      cy
        .xpath('//span[@class="ismart-13jccua-Icon-container"]//*[name()="svg"]')
        .should('be.visible')
    )
    cy.wait(1500)
    cy.xpath('//span[@class="ismart-13jccua-Icon-container"]//*[name()="svg"]').click()
    cy.wait(1500)
    cy.xpath('//span[@class="ismart-2epqce-Icon-container"]//*[name()="svg"]')
    cy.wait(1500)
    cy.xpath('//span[@class="ismart-2epqce-Icon-container"]//*[name()="svg"]')
    cy.wait(1500)
    cy.xpath('//span[@class="ismart-13jccua-Icon-container"]//*[name()="svg"]').click()
    cy.waitUntil(() =>
      cy
        .xpath('//span[@class="ismart-13jccua-Icon-container"]//*[name()="svg"]')
        .should('be.visible')
    )
    cy.wait(1500)
    cy.xpath('//span[@class="ismart-13jccua-Icon-container"]//*[name()="svg"]').click()
    cy.waitUntil(() =>
      cy
        .xpath('//span[@class="ismart-13jccua-Icon-container"]//*[name()="svg"]')
        .should('be.visible')
    )
    cy.wait(1500)
    cy.xpath(
      '//span[@class="ismart-2epqce-Icon-container"]//*[name()="svg"]//*[name()="path" and contains(@clip-rule,"evenodd")]'
    ).click()
    cy.waitUntil(() =>
      cy
        .xpath(
          '//span[@class="ismart-2epqce-Icon-container"]//*[name()="svg"]//*[name()="path" and contains(@clip-rule,"evenodd")]'
        )
        .should('be.visible')
    )
    cy.wait(1500)
    cy.xpath('//span[@class="ismart-2epqce-Icon-container"]//*[name()="svg"]')
    cy.wait(1500)
    cy.xpath(
      '//span[@class="ismart-2epqce-Icon-container"]//*[name()="svg"]//*[name()="path" and contains(@clip-rule,"evenodd")]'
    ).click()
    cy.waitUntil(() =>
      cy
        .xpath(
          '//span[@class="ismart-2epqce-Icon-container"]//*[name()="svg"]//*[name()="path" and contains(@clip-rule,"evenodd")]'
        )
        .should('be.visible')
    )
    cy.wait(3000)
    cy.xpath('//span[@class="ismart-2epqce-Icon-container"]//*[name()="svg"]')
    cy.wait(3000)
  })
})
