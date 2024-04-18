describe("Test contact us for via Automation Test Store", () => {
  beforeEach(function () {
    // cy.viewport(550, 750)
    cy.fixture("userDetails").as("user");
  });
  it(
    "Should be able to submit a successful submission via contact us form",
    {
      retries: {
        runMode: 2,
        openMode: 1,
      },
    },
    () => {
      cy.visit("https://automationteststore.com/");
      //cy.get('.info_links_footer > :nth-child(5) > a').click()
      ////a[contains(@href,'contact')]
      // cy.xpath('//a[contains(@href,"contact")]').click();
      // $ ends with, ^ starts with - css
      cy.get('a[href$="contact"]')
        .click()
        .then(function (contactUsText) {
          cy.log("Now test runner press " + contactUsText.text());
        });
      cy.get("@user").then((user) => {
        cy.get("#ContactUsFrm_first_name").type(user.first_name);
        cy.get("#ContactUsFrm_email").type(user.email);
      });

      cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
      cy.get("#ContactUsFrm_enquiry").type(
        "Is this the real life? Is this just Fanta sea"
      );
      cy.get('button[title="Submit"]').click();
      cy.get(".mb40 > :nth-child(3)").should(
        "have.text",
        "Your enquiry has been successfully sent to the store owner!"
      );
      console.log("This log will run first");
    }
  );
});
