describe('My First Test', () => {

    it('verify title-positive', function() {
       cy.visit("https://canary.ismart.org")
       cy.title().should('eq','Каталог заданий — iSmart')
    })

    it('verify title-negative', () => {
        cy.visit("https://canary.ismart.org")
        cy.title().should('eq','smart123')
     })


  })

