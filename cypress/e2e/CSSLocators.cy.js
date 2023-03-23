describe('CSSLocators', ()=> {

    it ('csslocators', ()=> {

        cy.visit('https://canary.ismart.org/catalog')
        cy.get('.ismart-d3nllz-TextField-input').type('математика') 
        //.class - for class, [] - for name, # - for id

})

})