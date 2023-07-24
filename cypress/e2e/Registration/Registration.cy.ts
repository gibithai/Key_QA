describe('test registration', () => {
  const userEmail = Math.random().toString(16) + '@ismart.org'
  const userPassword = 'Santasan11'
  const userName = 'Mister Key'
  const userNumber = '+7 (930) 444-44-44'
  const className = 'A'
  const studentName = 'Mister A'

  it('test registration positive', () => {
    cy.visit(String(Cypress.env('BASE_URL')) + 'auth/register')
    cy.xpath('//div[@class="ismart-4sxigk-Flexbox-container"]').click()

    // генерится рандомный мэйл дял атворизации
    // cy.get('.ismart-mgi866-Flexbox-container')
    // .should('contain', 'Регистрация')
    // необязательная доп проверка что это форма регистрации

    cy.xpath('//input[@placeholder="Ваша электронная почта"]')
      .type(userEmail)
      .should('have.value', userEmail)

    cy.xpath('//input[@placeholder="Придумайте пароль"]')
      .type(userPassword)
      .should('have.value', userPassword)

    cy.xpath('//button[contains(text(),"Продолжить")]').click()
    /* заканчивается форма регистрации
           и дальше отркывается окно с именем и номером */

    cy.xpath('//div[@class="ismart-15vthlk-username-content"]').click()

    cy.xpath('//input[@placeholder="Иванова Мария Александровна"]')
      .type(userName)
      .should('have.value', userName)

    cy.xpath('//input[@placeholder="+7 (999) 999-99-99"]')
      .type(userNumber.slice(2))
      .should('have.value', userNumber)

    cy.xpath('//button[contains(text(),"Продолжить")]').click()

    cy.xpath('//div[@class="ismart-1yej63f-Select-selectedArea"]').click()
    cy.xpath('//div[normalize-space()="4"]').click()
    cy.xpath('//input[@placeholder="«_»"]')
      .type(className)
      .should('have.value', className)
    // здесь подставляется класс
    cy.xpath('//button[contains(text(),"Продолжить")]').click()

    cy.xpath('//textarea[@placeholder="Каждый ученик с новой строки"]')
      .type(studentName)
      .should('have.value', studentName)
    // здесь подставляется имя студента
    cy.xpath('//button[contains(text(),"Продолжить")]').click()

    cy.xpath('//button[contains(text(),"Начать работу")]').click()
    // окончание теста. Пользователь зарегистрирован в системе
  })
})
