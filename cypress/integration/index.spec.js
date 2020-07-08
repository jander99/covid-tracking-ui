/// <reference types="Cypress" />

Cypress.on('fail', (err, runnable) => {
    debugger
})

describe('Visit the Homepage', () => {

    before(() => cy.visit('http://localhost:3000'))

    beforeEach(() => {
        cy.reload()
    })

    it('Shows the Homepage', () => {
        cy.findByText('COVID-19 Tracking').should('exist')
    })

    it('Shows One Stat Block', () => {
        cy.findByText('Jurisdiction').should('exist')
        cy.findByText('Total Infections').should('exist')
        cy.findByText('Total Deaths').should('exist')
        cy.findByText('Total Population').should('exist')
        cy.findByText('Fatality Rate').should('exist')
    })
})