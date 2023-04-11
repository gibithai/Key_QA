describe('User avatar change', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('https://canary.ismart.org/')
    cy.get('.ismart-1p15wet-Flexbox-container').click()
    cy.contains('Войти').click()
    cy.get('input[name="login"]').type('Parent@ismart.org')
    cy.get('input[name="password"]').type('123456')
    cy.contains('Войти').click()
    cy.get('.ismart-mj4ckr-Flexbox-container').click()
    cy.visit('https://canary.ismart.org/user')
  })

  it('Allows a user to change their avatar', () => {
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
