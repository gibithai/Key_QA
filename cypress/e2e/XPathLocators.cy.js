require('@cypress/xpath')
describe ("XpathLocators",() =>{

    it('find numbers of subject',() => {

    cy.visit('https://canary.ismart.org/catalog')
    cy.xpath('//body[1]/div[1]/diva[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/a[2]/div[1]/a').should('have.length', 0)
    })


})
