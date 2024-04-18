class Contact_Us_PO{
    contactFormSubmission(firstName, lastName, email, comments, $selector, textToLocate) {
        cy.get('[name="first_name"]').type(firstName)
        cy.get('[name="last_name"]').type(lastName)
        cy.get('[name="email"]').type(email)
        cy.get('textarea.feedback-input').type(comments)
        cy.get('[type="submit"]').click()
        cy.get($selector).contains(textToLocate, {timeout: 10000})
        // cy.screenshot()
        // cy.screenshot("Make a contact us form submission")
        
    }

}

export default Contact_Us_PO