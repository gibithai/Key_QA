describe('User avatar change', () => {
    beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('https://canary.ismart.org/');
    cy.xpath('//div[@class="ismart-1p15wet-Flexbox-container"]').click();
    cy.xpath('//p[contains(text(),"Войти")]').click();
    cy.xpath('//input[@name="login"]').type('Parent@ismart.org');
    cy.xpath('//input[@name="password"]').type('123456');
    cy.xpath('//button[contains(text(),"Войти")]').click();
    cy.xpath('//div[@class="ismart-mj4ckr-Flexbox-container"]').click(); // предполагается, что есть функция авторизации, которая выполняет вход на сайт
      cy.visit('https://canary.ismart.org/user'); // переход на страницу профиля пользователя
    });
  
    it('Allows a user to change their avatar', () => {
        const fileName = 'avatarParent.jpg'; // имя файла с аватаром
    
    // Выбираем файл аватара для загрузки на компьютере и загружаем его
    //cy.xpath('//input[@type="file"]').attachFile(fileName).trigger('change', {force: true });
    cy.fixture(fileName).then(fileContent => { 
      console.log(fileContent);
      cy.get('input[type="file"]').attachFile({ fileContent, fileName, mimeType: 'image/jpeg' })  
      });
    // Кликаем по кнопке "Save" для сохранения новой аватарки
    cy.xpath('//button[contains(text(),"Сохранить")]').click();
});
})