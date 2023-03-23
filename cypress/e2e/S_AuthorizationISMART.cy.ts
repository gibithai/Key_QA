describe('AuthorizationISMART', () => {
  it('AuthorizationISMART', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://canary.ismart.org/catalog')
    cy.visit('.ismart-1pqq9jl-Icon-container').click()
    cy.get('.ismart-1gmbgdm-Paragraph-container').contains('Войти').click()
    cy.get('.ismart-1mwps6i-login-content').type('Parent@ismart.org')
    cy.get('.ismart-1ppyx0w-password-content').type('123456')
    cy.get('.ismart-lt55gm-password-rightChild').click()
    cy.get('.ismart-d3nllz-TextField-input').should('be.visible')
    cy.get('.ismart-38sncp-Button-container').contains('Войти').click()
    cy.get('.ismart-mj4ckr-Flexbox-container').click()
    cy.get('.ismart-1p15wet-Flexbox-container').click()
    cy.get('.ismart-6zuwx-Flexbox-container').contains('Выйти').click()

    // Авторизация за ученика

    cy.get('.ismart-1p15wet-Flexbox-container').click()
    cy.get('.ismart-1gmbgdm-Paragraph-container').contains('Войти').click()
    cy.get('.ismart-1mwps6i-login-content').type('Parent@ismart.org')
    cy.get('.ismart-1ppyx0w-password-content').type('123456')
    cy.get('.ismart-38sncp-Button-container').contains('Войти').click()
    cy.get('.ismart-prfbv5-Header-container').contains('Вася Пуговкин').click()
    cy.contains('Вася Пуговкин').should('be.visible')
    cy.get('.ismart-1p15wet-Flexbox-container').click()
    cy.get('.ismart-1gmbgdm-Paragraph-container').contains('Выйти').click()
  })
})
