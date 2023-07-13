describe('Remove_profile', () => {
  const userEmail = Math.random().toString(16) + '@ismart.org'
  const userPassword = '123456'
  const userName = 'Mister Parent'
  const userNumber = '+7 (930) 444-44-44'
  const studentName = 'Mister A'

  it('Remove_profile.', () => {
    
    // Регистрация нового профиля родителя
    cy.visit(String(Cypress.env('BASE_URL')) + 'auth/register')
    cy.xpath('//span[contains(text(),"Ученик + родитель")]').click()
    cy.xpath('//input[@placeholder="Ваша электронная почта"]')
      .type(userEmail)
      .should('have.value', userEmail)
    cy.xpath('//input[@placeholder="Придумайте пароль"]')
      .type(userPassword)
      .should('have.value', userPassword)
    cy.xpath('//button[contains(text(),"Продолжить")]').click()
    cy.xpath('//input[@placeholder="Мария"]')
      .type(userName)
      .should('have.value', userName)
    cy.xpath('//input[@placeholder="+7 (999) 999-99-99"]')
      .type(userNumber.slice(2))
      .should('have.value', userNumber)
    cy.xpath('//button[contains(text(),"Продолжить")]').click()
    cy.xpath('//input[@placeholder="Введите имя ученика"]')
      .type(studentName)
      .should('have.value', studentName)
    cy.xpath('//button[contains(text(),"Продолжить")]').click()
    cy.xpath('//button[contains(text(),"Пропустить обучение")]').click()

    // Удаление аккаунта
    cy.xpath('//p[@class="ismart-1qkbjjj-Paragraph-container"]').click()
    cy.xpath('//p[contains(text(),"Профиль")]').click()
    cy.xpath('//button[contains(text(),"Я хочу удалить свой аккаунт")]').click()
    cy.xpath('//input[@placeholder="Если уверены, введите пароль"]').type(userPassword)
    cy.xpath('//button[contains(text(),"Удалить аккаунт")]').click()
    cy.wait(10000)
    cy.contains('Вход').should('be.visible')
  })
})
