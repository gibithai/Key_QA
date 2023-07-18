describe('ParentProfile', () => {
  const parentLogin = 'parent@ismart.org'
  const parentPassword = '123456'
  const BASE_URL = Cypress.env('BASE_URL')

  // Функция для выполнения всех действий
  function performActions (parentLogin, parentPassword) {
    cy.visit(BASE_URL)

    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type(parentLogin)
    cy.xpath('//input[@name="password"]').type(parentPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//div[@class="ismart-mj4ckr-Flexbox-container"]').click()
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Профиль")]').contains('Профиль').click()
  }
  it('Вход под кредами пользователя', () => {
    performActions(parentLogin, parentPassword)
  })
  it('Изменение имени', () => {
    performActions(parentLogin, parentPassword)

    // Остальные действия для изменения имени здесь...
    cy.xpath('//p[contains(text(),"Имя")]').click()
    cy.xpath('//input[@placeholder="Имя"]').clear().type('Test1')
    cy.xpath('//button[contains(text(),"Сохранить")]').click()
    cy.xpath('//input[@placeholder="Имя"]').should('have.value', 'Test1')
  })

  it('Изменение фамилии', () => {
    performActions(parentLogin, parentPassword)
    cy.xpath('//p[contains(text(),"Фамилия")]').click()
    cy.xpath('//input[@placeholder="Фамилия"]').clear().type('Test2')
    cy.xpath('//button[contains(text(),"Сохранить")]').click()
    cy.xpath('//input[@placeholder="Фамилия"]').should('have.value', 'Test2')
  })

  it('Изменение номера телефона', () => {
    performActions(parentLogin, parentPassword)
    cy.xpath('//p[contains(text(),"Телефон")]').click()
    cy.xpath('//input[@placeholder="Телефон"]').clear().type('+79131234561')
    cy.xpath('//button[contains(text(),"Сохранить")]').click()
    cy.xpath('//input[@placeholder="Телефон"]').should('have.value', '+79131234561')
  })

  it('Изменение логина', () => {
    performActions(parentLogin, parentPassword)
    cy.xpath('//p[contains(text(),"Логин")]').click()
    cy.xpath('//input[@placeholder="Новый логин"]').type('Parent111111@ismart.org')
    cy.xpath('//input[@placeholder="Текущий пароль"]').type('123456')
    cy.xpath('//button[contains(text(),"Сохранить")]').click()
  })
  it('Авторизация под новым логинома', () => {
    cy.visit(Cypress.env('BASE_URL'))
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type('Parent111111@ismart.org')
    cy.xpath('//input[@name="password"]').type('123456')
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//div[@class="ismart-mj4ckr-Flexbox-container"]').click()
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]').click()
    // Возврат стандартного логина parent@ismart.org
    cy.xpath('//p[contains(text(),"Профиль")]').contains('Профиль').click()
    cy.xpath('//p[contains(text(),"Логин")]').click()
    cy.xpath('//input[@placeholder="Новый логин"]').type('Parent@ismart.org')
    cy.xpath('//input[@placeholder="Текущий пароль"]').type('123456')
    cy.xpath('//button[contains(text(),"Сохранить")]').click()
  })
  it('Изменение пароля', () => {
    performActions(parentLogin, parentPassword)
    cy.xpath('//p[contains(text(),"Пароль")]').click()
    cy.xpath('//input[@placeholder="Текущий пароль"]').type('123456')
    cy.xpath('//input[@placeholder="Новый пароль"]').type('654321')
    cy.xpath('//input[@placeholder="Повторите пароль"]').type('654321')
    cy.xpath('//button[contains(text(),"Сохранить")]').click()
  })

  it('Авторизация с новым паролем', () => {
    cy.visit(Cypress.env('BASE_URL'))
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type('Parent@ismart.org')
    cy.xpath('//input[@name="password"]').type('654321')
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//div[@class="ismart-mj4ckr-Flexbox-container"]').click()
    // Возврат стандартного пароля 123456
    cy.xpath('//div[@class="ismart-5mymc9-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Профиль")]').contains('Профиль').click()
    cy.xpath('//p[contains(text(),"Пароль")]').click()
    cy.xpath('//input[@placeholder="Текущий пароль"]').type('654321')
    cy.xpath('//input[@placeholder="Новый пароль"]').type('123456')
    cy.xpath('//input[@placeholder="Повторите пароль"]').type('123456')
    cy.xpath('//button[contains(text(),"Сохранить")]').click()
  })
  it('Изменение почты', () => {
    performActions(parentLogin, parentPassword)
    cy.xpath('//p[contains(text(),"Почта")]').click()
    cy.xpath('//input[@placeholder="Почта"]').clear().type('ismartTester@yandex.ru')
    cy.xpath('//button[contains(text(),"Сохранить")]').click()
    cy.xpath('//input[@placeholder="Почта"]').should(
      'have.value',
      'ismartTester@yandex.ru'
    )
    // Возвращаем стандартную почту
    cy.xpath('//p[contains(text(),"Почта")]').click()
    cy.xpath('//input[@placeholder="Почта"]').clear().type('parent@ismart.org')
    cy.xpath('//button[contains(text(),"Сохранить")]').click()
    cy.xpath('//input[@placeholder="Почта"]').should('have.value', 'parent@ismart.org')
  })
  it('Изменение аватара', () => {
    performActions(parentLogin, parentPassword)
    const fileName = 'avatarParent.jpg'
    const fileType = 'image/jpeg'
    cy.fixture(fileName, 'binary')
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.xpath('//input[@type="file"]').attachFile({
          fileContent,
          fileName,
          mimeType: fileType
        })
        cy.contains('Сохранить').click()
      })
  })
})
