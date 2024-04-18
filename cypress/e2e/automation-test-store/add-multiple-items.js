import AutoStoreHomepage_PO from "../../support/pageObject/automation-test-store/AutoStoreHomepage_PO";
import AutoStoreHairCare_PO from "../../support/pageObject/automation-test-store/AutoStoreHairCare_PO";
/// <reference types="Cypress" />

describe("Add multiple items to basket", () => {
  const auto_store_homepage_po = new AutoStoreHomepage_PO();
  const auto_store_haircare_po = new AutoStoreHairCare_PO();
  before(function () {
    cy.fixture("product").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    cy.clearLocalStorage();
    cy.clearCookies();
    auto_store_homepage_po.accessHomepage();
    auto_store_homepage_po.clickOnHairCareLink();
  });
  it("Add specific items to basket", () => {
    auto_store_haircare_po.addHairCareProductsToCart();
    //   globalThis.data.productName.forEach(function (element) {
    //     cy.addProductToCart(element);
    //   });
    //   cy.get(".dropdown-toggle > .fa").click();
  });
});
