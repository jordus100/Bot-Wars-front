describe('registration page', () => {

    it('registers user', () => {
        cy.visit('/register')

        cy.get('input[id^=username]').type('jp2')
        cy.get('input[id^=email]').type('jp2@watykan.pl')
        cy.get('input[id^=password]').type('barka2137')
        cy.get('input[id^=repeatPassword]').type('barka2137')

        cy.get('form').submit()
    })
})
