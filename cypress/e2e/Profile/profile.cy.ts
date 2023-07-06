describe('ParentProfile', () => {
  it('edit profile', () => {
    cy.viewport(1920, 1080)
    cy.visit(Cypress.env('BASE_URL'))
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type('Parent@ismart.org')
    cy.xpath('//input[@name="password"]').type('123456')
    cy.xpath('//button[contains(text(),"Войти")]').click()
    // Вход под кредами пользователя
    cy.xpath('//div[@class="ismart-mj4ckr-Flexbox-container"]').click()
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Профиль")]').contains('Профиль').click()
    // Имя
    cy.xpath('//div[@class="ismart-yt8out-Flexbox-container"]//div[1]//div[1]').click()
    cy.xpath('//input[@placeholder="Имя"]').clear().type('Test1')
    cy.xpath('//button[contains(text(),"Сохранить")]').click()
    cy.xpath('//input[@placeholder="Имя"]').should('have.value', 'Test1')
    // Фамилия
    cy.xpath('//p[contains(text(),"Фамилия")]').click()
    cy.xpath('//input[@placeholder="Фамилия"]').clear().type('Test2')
    cy.xpath('//button[contains(text(),"Сохранить")]').click()
    cy.xpath('//input[@placeholder="Фамилия"]').should('have.value', 'Test2')
    // Номер телефона
    cy.xpath('//p[contains(text(),"Телефон")]').click()
    cy.xpath('//input[@placeholder="Телефон"]').clear().type('+79131234561')
    cy.xpath('//button[contains(text(),"Сохранить")]').click()
    cy.xpath('//input[@placeholder="Телефон"]').should('have.value', '+79131234561')
    // Логин
    cy.xpath('//p[contains(text(),"Логин")]').click()
    cy.xpath('//input[@placeholder="Новый логин"]').type('Parent111111@ismart.org')
    cy.xpath('//input[@placeholder="Текущий пароль"]').type('123456')
    cy.xpath('//button[contains(text(),"Сохранить")]').click()
    // Проверка авторизации под новым логином
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Выйти")]').contains('Выйти').click()
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type('Parent111111@ismart.org')
    cy.xpath('//input[@name="password"]').type('123456')
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//div[@class="ismart-mj4ckr-Flexbox-container"]').click()
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    // Возврат стандартного логина parent@ismart.org
    cy.xpath('//p[contains(text(),"Профиль")]').contains('Профиль').click()
    cy.xpath('//p[contains(text(),"Логин")]').click()
    cy.xpath('//input[@placeholder="Новый логин"]').type('Parent@ismart.org')
    cy.xpath('//input[@placeholder="Текущий пароль"]').type('123456')
    cy.xpath('//button[contains(text(),"Сохранить")]').click()
    // Пароль
    cy.xpath('//p[contains(text(),"Пароль")]').click()
    cy.xpath('//input[@placeholder="Текущий пароль"]').type('123456')
    cy.xpath('//input[@placeholder="Новый пароль"]').type('654321')
    cy.xpath('//input[@placeholder="Повторите пароль"]').type('654321')
    cy.xpath('//button[contains(text(),"Сохранить")]').click()
    // Проверка нового пароля
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Выйти")]').contains('Выйти').click()
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type('Parent@ismart.org')
    cy.xpath('//input[@name="password"]').type('654321')
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//div[@class="ismart-mj4ckr-Flexbox-container"]').click()
    // Возврат стандартного пароля 123456
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Профиль")]').contains('Профиль').click()
    cy.xpath('//p[contains(text(),"Пароль")]').click()
    cy.xpath('//input[@placeholder="Текущий пароль"]').type('654321')
    cy.xpath('//input[@placeholder="Новый пароль"]').type('123456')
    cy.xpath('//input[@placeholder="Повторите пароль"]').type('123456')
    cy.xpath('//button[contains(text(),"Сохранить")]').click()
    // Почта
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
    // Загружаем Аватар
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
