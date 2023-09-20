describe('Raiting student', () => {
  const userEmail = 'parent@ismart.org'
  const userPassword = '123456'

  it('Рейтинг факультета', () => {
    cy.viewport(1920, 1080)
    cy.visit(String(Cypress.env('BASE_URL')) + 'auth')
    cy.xpath('//input[@name="login"]').type(userEmail)
    cy.xpath('//input[@name="password"]').type(userPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//h1[contains(text(),"Вася Пуговкин")]').click()
    cy.xpath('//span[contains(text(),"Хогвартс")]').click()
    cy.xpath('//span[@class="ismart-ru4y73-Text-container"]')
      .eq(0)
      .invoke('text')
      .then((score1) => {
        cy.xpath('//button[contains(text(),"Все факультеты")]').click()
        cy.xpath('//span[@class="ismart-ru4y73-Text-container"]')
          .eq(0)
          .invoke('text')
          .then((score2) => {
            expect(Number(score2)).to.equal(Number(score1))
          })
      })
  })
  it('Очки игрока', () => {
    let score1: string
    cy.viewport(1920, 1080)
    cy.visit(String(Cypress.env('BASE_URL')) + 'auth')
    cy.xpath('//input[@name="login"]').type(userEmail)
    cy.xpath('//input[@name="password"]').type(userPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//h1[contains(text(),"Вася Пуговкин")]').click()
    cy.xpath('//span[contains(text(),"Хогвартс")]').click()
    cy.xpath('//span[@class="ismart-i9hi5c-Text-container"]')
      .invoke('text')
      .then((text) => {
        score1 = text
        cy.visit(
          String(Cypress.env('BASE_URL')) + 'hogwarts/score/6005573d77bd59001e53576b'
        )
        cy.xpath('//span[@class="ismart-i9hi5c-Text-container"]')
          .invoke('text')
          .then((score2) => {
            expect(score2).to.equal(score1)
          })
        cy.xpath('//span[@class="ismart-28unaj-Text-container"]').click()
        cy.xpath('//button[contains(text(),"Все факультеты")]').click()
        cy.get('div.ismart-jwmbpo-Flexbox-container')
          .find('.ismart-1wszofs-Button-container')
          .contains('На факультет')
          .parent()
          .find('p.top100-text.ismart-1ykjjle-Paragraph-container')
          .contains('Смотреть топ 100')
          .click()
        Cypress.on('uncaught:exception', (err, runnable) => {
          if (
            err.message.includes(
              'The play() request was interrupted because the media was removed from the document. https://goo.gl/LdLk22'
            )
          ) {
            return false
          }
        })
        cy.get('tr.ismart-15qkj1p-Table-row')
          .find('.ismart-204sr4-Text-container')
          .contains('Вася Пуговкин')
          .parents('tr.ismart-15qkj1p-Table-row')
          .find('span.ismart-1rdx4xg-Text-container')
          .invoke('text')
          .then((score3) => {
            expect(score3).to.equal(score1)
          })
      })
  })

  it('Уровень игрока', () => {
    let level1: string
    cy.viewport(1920, 1080)
    cy.visit(String(Cypress.env('BASE_URL')) + 'auth')
    cy.xpath('//input[@name="login"]').type(userEmail)
    cy.xpath('//input[@name="password"]').type(userPassword)
    cy.xpath('//button[contains(text(),"Войти")]').click()
    cy.xpath('//h1[contains(text(),"Вася Пуговкин")]').click()
    cy.xpath('//span[contains(text(),"Хогвартс")]').click()
    cy.xpath('//p[@class="ismart-1772dcx-Paragraph-container"]')
      .invoke('text')
      .then((level) => {
        level1 = level
        cy.visit(
          String(Cypress.env('BASE_URL')) + 'hogwarts/score/6005573d77bd59001e53576b'
        )
        cy.xpath('//p[@class="ismart-1772dcx-Paragraph-container"]')
          .invoke('text')
          .then((level2) => {
            expect(level2).to.equal(level1)
          })

        cy.xpath('//span[@class="ismart-28unaj-Text-container"]').click()
        cy.xpath('//button[contains(text(),"Все факультеты")]').click()
        cy.get('div.ismart-jwmbpo-Flexbox-container')
          .find('.ismart-1wszofs-Button-container')
          .contains('На факультет')
          .parent()
          .find('p.top100-text.ismart-1ykjjle-Paragraph-container')
          .contains('Смотреть топ 100')
          .click()
        Cypress.on('uncaught:exception', (err, runnable) => {
          if (
            err.message.includes(
              'The play() request was interrupted because the media was removed from the document. https://goo.gl/LdLk22'
            )
          ) {
            return false
          }
        })
        cy.get('tr.ismart-15qkj1p-Table-row')
          .find('.ismart-204sr4-Text-container')
          .contains('Вася Пуговкин')
          .parents('tr.ismart-15qkj1p-Table-row')
          .find('span.ismart-1vpt66q-Text-container')
          .invoke('text')
          .then((level3) => {
            expect(level3).to.equal(level1)
          })
      })
  })
})
