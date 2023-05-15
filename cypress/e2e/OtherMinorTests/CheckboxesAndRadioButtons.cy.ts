describe('Check UI Elements', () => {
  it('checking check boxes', () => {
    cy.visit('https://canary.ismart.org/shop')

    // Видимость элемента
    cy.xpath(
      '//div[@class="ismart-milwcx-Block-container"]//div[1]//div[1]//div[1]'
    ).should('be.visible')
    cy.get('.ismart-1hd1y01-Block-container').check().should('be.chedcked')
  })
})
// check() − The check() command without argument checks all the checkboxes. The get method should have the [type="checkbox"] as the css selector when it is chained with check() method.
// cy.get('[type="checkbox"]').check()
// check() − The check() command without argument checks the checkbox with a specific id given as an argument to the chained Cypress get() command.
// cy.get('#option1').check()
// check('Value1') − The check() command with value as argument checks the checkbox with the mentioned value. The get method should have the [type="checkbox"] as the css selector when it is chained with check() command.
// cy.get('[type="checkbox"]').check('Tutorialspoint')
// check('Value1', 'Value2') − The check() command with values as arguments check the checkbox with the mentioned values. The get method should have the [type="checkbox"] as the css selector when it is chained with check() command.
// cy.get('[type="checkbox"]').check('Tutorialspoint', 'Selenium')
// check({ force: true }) − The check() command with option as argument changes the default behavior of checkbox. There can be three types of options: log, force and timeout having default values as true, false and defaultCommandTimeout ( 4000 milliseconds) respectively.
// cy.get('.check-boxes').should('not.be.visible').check({ force: true}).should('be.checked')
