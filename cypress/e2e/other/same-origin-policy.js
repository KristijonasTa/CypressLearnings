/// <reference types="Cypress" />

describe("Cypress web security", () => {
    it("Validate visiting two different domains", () => {
        cy.visit("https://automationteststore.com/");
        cy.visit("https://webdriveruniversity.com/");
    })

    it("Validate visiting two different domains via user actions", () => {
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    })
})
