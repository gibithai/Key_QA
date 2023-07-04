describe('shop test', () => {
  const creditCardNumber = '4300000000000777'
  const CardHoder = 'Mister Key'
  const exrDate = '01/29'
  const cvv = '111'
  it('shop test', () => {
    cy.visit(String(Cypress.env('BASE_URL')))
    cy.viewport(1920, 1080)
    cy.xpath('//div[@class="ismart-i3f51a-Flexbox-container"]').click()
    // cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type('dougcarlin@tut.by')
    cy.xpath('//input[@name="password"]').type('123456')
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//div[@class="ismart-mj4ckr-Flexbox-container"]').click()
    cy.visit(String(Cypress.env('BASE_URL')) + 'shop')
    cy.wait(1000)
    cy.xpath(
      '//div[@class="ismart-milwcx-Block-container"]//div[1]//div[1]//div[1]//span[1]//*[name()="svg"]'
    ).click()
    cy.xpath('//p[contains(text(),"Русский язык")]').click()
    cy.xpath(
      '//div[@class="ismart-klwhgf-Block-container"]//div[2]//div[1]//div[2]//div[3]//button[2]'
    ).click()
    cy.xpath(
      '//div[@class="ismart-4g250r-Flexbox-container"]//div[3]//div[1]//div[1]//div[3]//button[2]'
    ).click()
    cy.xpath(
      '//span[@class="ismart-3nfsk1-Icon-container"]//*[name()="svg"]//*[name()="path" and contains(@clip-rule,"evenodd")]'
    ).click()
    cy.xpath('//button[@class="ismart-1kxq8zk-Button-container"]').click()
    cy.wait(3000)
    cy.get('iframe')
      .eq(0)
      .then((iframe) => {
        cy.get('form').focus()
        const body = iframe.contents().find('body')
        const cvc = body.find('[automation-id="tui-input-card-grouped__cvc"]')
        cy.wrap(cvc).focus().type('123')

        // cvc.val('232').trigger('input')
        // cy.wrap('iframe')
      })
    // cy.get('[automation-id="tui-input-card-grouped__cvc"]').eq(0).click().type('789') НЕ видит!!! Искать этот элемент

    // const el = paycheck.find('[automation-id="tui-input-card-grouped__cvc"]') // .eq(0).click().type('789')
    // console.log(el)
    // .get('[automation-id="tui-input-card-grouped__cvc"]')
    // .eq(0)
    //
    // alert('Hello Eugene!')
    // const body = iframe.contents().find('body')
    // const cvc = body.find('[automation-id="tui-input-card-grouped__cvc"]')
    // //
    // body.within(() => {
    //   alert('Yo!')
    // })
    // const button = body.find('[automation-id="card-form__submit"]')
    // button.click()
    // cvc.dispatchEvent(new KeyboardEvent('keydown', { key: '4' }))
    // cvc.trigger($.Event('keydown', { keyCode: '4' }))
    // cvc.trigger(jQuery.Event('keydown', { keyCode: '4' }))
    // window.addEventListener('touchstart', {})
    // cy.get('iframe')
    // cy.xpath('//div[@class="ismart-1935w9c-Modal-window"]').click()
    // })
    // cy.xpath('//iframe//input[@automation-id="tui-input-card-grouped__cvc"]').type('789')
  })
})
