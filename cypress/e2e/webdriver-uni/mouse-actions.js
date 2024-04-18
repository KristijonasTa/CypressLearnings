/// <reference types="Cypress" />

describe("Test mouse actions", () => {
    it("Scroll element into view", () => {
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
    })

    it("Drag and drop draggable item", () => {
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#actions').invoke('removeAttr', 'target').click({force: true})

        cy.get("#draggable").trigger('mousedown', {button: 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true})

    })

    it("Double click item", () => {
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#actions').invoke('removeAttr', 'target').click({force: true})

        cy.get('#double-click').dblclick().should('have.css', 'background-color', 'rgb(147, 203, 90)')
    })
    
    it("Hold down the left mouse click button to given item", () => {
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#actions').invoke('removeAttr', 'target').click({force: true})

        cy.get("#click-box").trigger('mousedown', {button: 1}).then(($el) => {
            expect($el).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
    })
})