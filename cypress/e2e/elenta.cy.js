describe('homepage testing', () => {

    beforeEach(() => {
        cy.visit('https://elenta.lt')
        cy.get('[aria-label="Sutikimas"]').click()
        
    })

    it('It should open elenta.lt', () => {
        cy.get("#search-page-box").type('Hello')
        cy.get('[value="Ieškoti"]').click()
    })

    it('should put something in search', () => {
        cy.get("#search-page-box").type('worldĄ')
    })
});
