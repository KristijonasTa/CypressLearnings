describe("Verify autocomplete dropdown list via webdriveruni", () => {
    it("Select specific product via autocomplete list", () => {
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force: true})

        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const product = $el.text()
            const productToSelect = 'Avacado'

            if(product === productToSelect) {
                // cy.wrap($el).click() 
                $el.trigger("click") 

                cy.get('#submit-button').click()
                cy.url().should('include', productToSelect)
            }
        }).then(() => {
            cy.get('#myInput').clear().type('g')
            cy.get('#myInputautocomplete-list > *').each(($el) => {
                const product = $el.text()
                const productToSelect = 'Grapes'
    
                if(product === productToSelect) {
                    cy.wrap($el).click()
    
                    cy.get('#submit-button').click()
                    cy.url().should('include', productToSelect)
                }
            })
        })
    }) 
    
    
})