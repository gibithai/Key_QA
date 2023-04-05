describe('ParentProfile', () => {
  it('edit profile', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://canary.ismart.org/')
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click()
    cy.xpath('//p[contains(text(),"Войти")]').click()
    cy.xpath('//input[@name="login"]').type('Parent@ismart.org')
    cy.xpath('//input[@name="password"]').type('123456')
    cy.xpath('//button[contains(text(),"Войти")]').click()
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
    /*
    Вставить код проверки письма на почте, когда починят майлер
    1. cy.visit() - ссылка на яндекс почту
    2. креды аккаунта ismartTester@yandex.ru ag2R2aUBiCzu
    3. клик на письмо
    4. проверка отображения логина и новой почты
    5. Вернуться в профиль
    */
    // Возвращаем стандартную почту
    cy.xpath('//p[contains(text(),"Почта")]').click()
    cy.xpath('//input[@placeholder="Почта"]').clear().type('parent@ismart.org')
    cy.xpath('//button[contains(text(),"Сохранить")]').click()
    cy.xpath('//input[@placeholder="Почта"]').should('have.value', 'parent@ismart.org')
    // Аватар
    const fileName = 'images/avatarParent.jpg' // имя файла с аватаром
    // Выбираем файл аватара для загрузки на компьютере и загружаем его
    cy.fixture(fileName).then((fileContent) => {
      console.log(fileContent)
      cy.get('input[type="file"]').attachFile({
        fileContent,
        fileName,
        mimeType: 'image/jpeg'
      })
      cy.xpath('//button[contains(text(),"Сохранить")]').click()
    })
  })
})
