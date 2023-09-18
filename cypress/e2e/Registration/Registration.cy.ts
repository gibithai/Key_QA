describe('test registration', () => {
  const userEmail = Math.random().toString(16) + '@ismart.org'
  const userPassword = 'Santasan11'
  const userName = 'MisterKey'
  const userNumber = '+7 (930) 444-44-44'
  const studentName = 'Mister A'

  // генерится рандомный мэйл для авторизации и пароль
  it('test registration positive', () => {
    cy.visit(String(Cypress.env('BASE_URL')) + 'auth/register')
    cy.xpath('//div[@class="ismart-1q609jp-Flexbox-container"]').click()

    cy.xpath('//input[@placeholder="Ваша электронная почта"]')
      .type(userEmail)
      .should('have.value', userEmail)

    cy.xpath('//input[@placeholder="Придумайте пароль"]')
      .type(userPassword)
      .should('have.value', userPassword)

    cy.xpath('//button[contains(text(),"Продолжить")]').click()
    /* заканчивается форма регистрации и дальше открывается окно с именем родителя и номером телефона */

    cy.xpath('//div[@class="ismart-1sxq380-username-field"]').type(userName)

    cy.xpath('//input[@placeholder="+7 (999) 999-99-99"]')
      .type(userNumber.slice(2))
      .should('have.value', userNumber)

    cy.xpath('//button[contains(text(),"Продолжить")]').click()

    // переход на страницу создания имени ученика

    cy.xpath('//div[@class="ismart-14hzrlr-Field-content"]').type(studentName)
    cy.xpath('//button[contains(text(),"Продолжить")]').click()
    cy.xpath('//button[contains(text(),"Пропустить обучение")]').click()
    // окончание теста. Пользователь зарегистрирован в системе
  })
})
