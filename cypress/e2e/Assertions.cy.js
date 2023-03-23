describe ("Assertions", ()=>{

it ('Implicit assertions', ()=>{
 
    cy.visit ("https://canary.ismart.org/auth")
    // should and 
   // cy.url().should("include", 'https://canary.ismart.org')
   // cy.url().should('eq','https://canary.ismart.org/auth')
   // cy.url().should('contain', 'auth')


    /*cy.url().should("include", 'https://canary.ismart.org')
    .should('eq','https://canary.ismart.org/auth')
    .should('contain', 'auth')*/

    /*cy.url().should("include", 'https://canary.ismart.org')
    .and('eq','https://canary.ismart.org/auth')
    .and('contain', 'auth')*/

    cy.url().should("include", 'https://canary.ismart.org')
    .and('eq','https://canary.ismart.org/auth')
    .and('contain', 'auth')
    .and('not.contain', 'key')

    cy.title().should("include", "Вход — iSmart")
    .and('eq', 'Вход — iSmart')
    .and('contain', "Вход — iSmart")

    //cy.get("ismart-1378iz0-Block-container").should('be.visible')
    //.and('exist')


})

})