/// <reference types="Cypress" />

describe("Iterate over elements", () => {
    beforeEach(function(){
        cy.visit("https://automationteststore.com/");
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click();
    })
    it("Log information of all hair care products", () => {
        cy.get('.fixed_wrapper .prdocutname').each(($element, index, $list) => {
            cy.log("Index: " + index + " : " + $element.text())
        })

    })

    it("Add specific product to basket", () => {

        // cy.get('.fixed_wrapper .prdocutname').each(($element, index, $list) => {
        //     if($element.text().includes('Curls to straight Shampoo')) {
        //         cy.wrap($element).click()
        //     }
        // })

        cy.selectProduct('Curls to straight Shampoo')
    })

    it("Add specific product to basket", () => {
        cy.selectProduct('Seaweed Conditioner')
    })

    
    it.only("Add specific product to basket", () => {
        cy.selectProduct('Eau Parfumee au The')
    })
})
