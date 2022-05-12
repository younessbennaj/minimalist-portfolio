describe('Smoke Test', () => {
  it('can view the home page', () => {
    cy.visit('/')
    cy.contains(
      'Hey, I’m Youness Bennaj and I love building maintainalble web applications.'
    )
  })
})
