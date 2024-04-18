// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add("selectProduct", productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($element, index, $list) => {
        if($element.text().includes(productName)) {
            cy.wrap($element).click()
        }
    })
})

Cypress.Commands.add("wedbriveruni_contactForm_submission", (firstName, lastName, email, comments, $selector, textToLocate) => {
    cy.get('[name="first_name"]').type(firstName)
    cy.get('[name="last_name"]').type(lastName)
    cy.get('[name="email"]').type(email)
    cy.get('textarea.feedback-input').type(comments)
    cy.get('[type="submit"]').click()
    cy.get($selector).contains(textToLocate)
    
})

Cypress.Commands.add("addProductToCart", productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($element, index, $list) => {
        if($element.text() === productName) {
            cy.log($element.text())
            cy.get('.productcart').eq(index).click()
        }
    })
})

Cypress.Commands.add("navigateToWebdriverUniHomepage", () => {
    cy.visit('/');
})

Cypress.Commands.add("navigateToWebdriverUniCheckBoxPage", () => {
    cy.visit('/' + "Dropdown-Checkboxes-RadioButtons/index.html");
})

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })