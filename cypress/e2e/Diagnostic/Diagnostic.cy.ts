describe('guest diagnostic', () => {
  it('Тест диагностики для гостя', () => {
    // переходим на страницу диагностики
    cy.visit(String(Cypress.env('BASE_URL')) + 'diagnostics')
    cy.xpath('//div[@class="ismart-1ec8ovj-Flexbox-container"]').click()
    cy.xpath(
      '//body/div[@id="app"]/div[@class="ismart-r38pru-ScrollView-wrapper"]/div[@class="ismart-1xtyevz-ScrollView-container"]/div[@class="ismart-5792gp-ScrollView-content"]/div[@class="ismart-1v2fkka-Flexbox-container"]/div[@class="ismart-ha16e2-Flexbox-container"]/div[@class="ismart-14t7r2j-Flexbox-container"]/div[@class="ismart-fqdmot-Flexbox-container"]/div[1]'
    ).click()

    cy.wait(2000 as number)
    cy.xpath('//div[@class="ismart-fqdmot-Flexbox-container"]//div[1]').click()
    cy.xpath('//div[@class="ismart-sp7kbe-Flexbox-container"]').click()
    cy.xpath('//button[contains(text(),"Начать")]').click()
    for (let i = 0; i <= 14; i++) {
      // Цикл для повторения шагов с ответами диагностики
      cy.wait(2000 as number)
      if (Math.round(Math.random()) === 1) {
        cy.get('#dev-menu__button_right').click()
      } else {
        cy.get('#dev-menu__button_wrong').click()
        // Функция, которая рандомно генерит правильные и неверные ответы
      }
    }
  })
})
