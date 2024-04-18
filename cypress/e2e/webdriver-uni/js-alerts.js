describe("Handle JS alerts", () => {
    it("Confirm js alert contains the correct text", () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
        cy.get('#button1').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    })

    it("Validate js confirm alert box works correctly when click ok", () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
        cy.get('#button4').click()

        cy.on('window:confirm', (str) => {
            // return true = OK; return false = cancel;
            return true;
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    })

    it("Validate js confirm alert box works correctly when click cancel", () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
        cy.get('#button4').click()

        cy.on('window:confirm', (str) => {
            // return true = OK; return false = cancel;
            return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    })

    it.only("Validate js confirm alert box works correctly when click cancel", () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})

        const stub = cy.stub()
        cy.on('window:confirm', stub)

        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })

    })

})