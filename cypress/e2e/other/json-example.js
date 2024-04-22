/// <reference types="Cypress" />

describe("JSON object", () => {
    it("JSON object example", () => {
        const exampleObject = {"key": "Tom", "key2": "Jerry"}
        const exampleArrayOfValues = ["Jack", "Rose", "Potter"]
        const exampleArrayOfObjects = [{"key": "Luke"}, {"key2": "Loky"}, {"key3": "Lion"}]

        const users = {
            "firstName": "Joe",
            "lastName": "Jones",
            "age": 35,
            "students": [
                {
                    "firstName": "Jack",
                    "lastName": "Jackson"
                },
                {
                    "firstName": "Toronto",
                    "lastName": "Mag"
                }
            ]
        }

        cy.log(exampleObject["key"])
        cy.log(exampleObject["key2"])
        cy.log(exampleObject.key2)

        cy.log(exampleArrayOfValues[0])
        cy.log(exampleArrayOfValues[1])
        cy.log(exampleArrayOfValues[2])

        cy.log(users.lastName)
        cy.log(users.students[0].lastName)
        cy.log(exampleArrayOfObjects[0].key)
        cy.log(exampleArrayOfObjects[1].key2)
        cy.log(exampleArrayOfObjects[2].key3)

    })
})
