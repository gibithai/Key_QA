describe ("test registration", ()=>{

const User_email =  Math.random().toString(16) + "@ismart.org"
const User_password = 'Santasan11'
const User_name = 'Mister Key'
const User_number = "+7 (930) 444-44-44"

it ('test registration positive',()=> {
        cy.visit("https://canary.ismart.org/auth/register")

        cy.get('.ismart-4sxigk-Flexbox-container')
            .click()

        //cy.get('.ismart-mgi866-Flexbox-container')
        //.should('contain', 'Регистрация')
        // доп проверка что это форма регистрации

        cy.get('.ismart-k1l7r3-email-content > .ismart-d3nllz-TextField-input')
           .type(User_email)
           .should('have.value',User_email)

        cy.get('.ismart-1ppyx0w-password-content > .ismart-d3nllz-TextField-input')
           .type(User_password)
           .should('have.value',User_password)

        cy.get('.ismart-19ev8bo-Button-container')
           .click()
           /* заканчивается форма регистрации 
           и дальше отркывается окно с именем и номером*/

        cy.get('.ismart-87he7f-Button-container')
           .click()

        cy.get('.ismart-d3nllz-TextField-input')
        .type(User_name)
        .should('have.value',User_name)

        cy.get('.form-control')
        .type(User_number.slice(2))
        .should('have.value',User_number)

        cy.get('.ismart-87he7f-Button-container')
        .click()
       
        
        cy.reload()

        })    
    })
