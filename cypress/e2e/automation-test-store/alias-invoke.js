describe("Alias and invoke", () => {
    it("Validate a specific hair care product", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click();

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    })
    it("Validate product thumbnail", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').as('thumbnailElement')
        cy.get('@thumbnailElement').should('have.length', 16)
        cy.get('@thumbnailElement').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    })

    it("Calculate total of normal and sale products", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').as('thumbnailElement')
        // cy.get('@thumbnailElement').find('.oneprice').each(($element, index, $list) => {
        //     cy.log($element.text())
        // })
        cy.get('@thumbnailElement').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('@thumbnailElement').find('.pricenew').invoke('text').as('saleItemPrice')

        var itemsTotal = 0
        cy.get('@itemPrice').then($linkText => {
            let totalPrice = 0
            let itemPrice = $linkText.split('$')
            let i
            for(i = 0; i < itemPrice.length; i++){
                cy.log(itemPrice[i])
                totalPrice += Number(itemPrice[i])
            }
            itemsTotal += totalPrice
            cy.log('Non on sale price items total price ' + totalPrice)
        })
        cy.get('@saleItemPrice').then($linkText => {
            let onSaleTotalPrice = 0
            let onSaleItemPrice = $linkText.split('$')
            let i
            for(i = 0; i < onSaleItemPrice.length; i++){
                cy.log(onSaleItemPrice[i])
                onSaleTotalPrice += Number(onSaleItemPrice[i])
            }
            itemsTotal += onSaleTotalPrice
            cy.log('On sale price items total price ' + onSaleTotalPrice)
        })
        .then(() => {
            cy.log('Total price of all products: ' + itemsTotal)
            expect(itemsTotal).to.equal(648.5)
        })
    })
})
