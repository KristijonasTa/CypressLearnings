import HomePage_PO from "../../support/pageObject/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/pageObject/webdriver-uni/Contact_Us_PO";
/// <reference types="Cypress" />

describe("Test contact us for via WebdriverUni", () => {
  Cypress.config('defaultCommandTimeout', 15000)
  const homepage_po = new HomePage_PO();
  const contact_us_po = new Contact_Us_PO();
  beforeEach(function () {
    cy.fixture("example").then(function (data) {
      // this.data = data; Not working
      globalThis.data = data; // Working
    });
    // cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    // cy.visit(
    //   Cypress.env("webdriveruni_homepage") + "Contact-Us/contactus.html"
    // );
    // cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true})

    homepage_po.visitHomepage();
    cy.wait(3000)
    homepage_po.clickOnContactUsLink();
    // cy.pause()
  });
  it("Should be able to submit a successful submission via contact us form", () => {
    //cy code
    // cy.

    cy.document().should("have.a.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "Contact Us");
    //cy.get('#contact-us').click({force: true})
    // cy.get('[name="first_name"]').type(data.first_name)
    // cy.get('[name="last_name"]').type(data.last_name)
    // cy.get('[name="email"]').type(data.email)
    // cy.get('textarea.feedback-input').type("Some comments in order to have the comments because it asked for comments")
    // cy.get('[type="submit"]').click()
    // cy.get('h1').should('have.text', 'Thank You for your Message!')
    // cy.wedbriveruni_contactForm_submission(
    //   Cypress.env("first_name"),
    //   data.last_name,
    //   data.email,
    //   "Some comments in order to have the comments because it asked for comments",
    //   "h1",
    //   "Thank You for your Message!"
    // );

    contact_us_po.contactFormSubmission(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      "Some comments in order to have the comments because it asked for comments",
      "h1",
      "Thank You for your Message!"
    );

    cy.get("#contact_reply").should(
      "have.css",
      "background-color",
      "rgb(56, 75, 218)"
    );
    cy.url().should("include", "Contact-Us/contact-form-thank-you");
  });

  // it.only run only one test
  it("Should be unable to submit a successful submission via contact us form as all fields are required", () => {
    //cy code

    // cy.get('[name="first_name"]').type("Harold")
    // cy.get('[name="last_name"]').type("Harding")
    // cy.get('textarea.feedback-input').type("Some comments in order to have the comments because it asked for comments")
    // cy.get('[type="submit"]').click()
    // cy.get('body').contains('Error: all fields are required')

    contact_us_po.contactFormSubmission(
      data.first_name,
      data.last_name,
      " ",
      "Some comments in order to have the comments because it asked for comments",
      "body",
      "Error: Invalid email"
    );

    // cy.wedbriveruni_contactForm_submission(
    //   data.first_name,
    //   data.last_name,
    //   " ",
    //   "Some comments in order to have the comments because it asked for comments",
    //   "body",
    //   "Error: Invalid email"
    // );
  });
});
