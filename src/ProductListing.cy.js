describe('My Test', () => {
    it('Visits a page and tests an element', () => {
        // Visit a page
        cy.visit('https://www.example.com')

        // Find an element and assert that it exists
        cy.get('.my-element').should('exist')
    })
})