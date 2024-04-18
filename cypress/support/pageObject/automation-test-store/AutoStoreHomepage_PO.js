class AutoStoreHomepage_PO {
  accessHomepage() {
    cy.visit("https://automationteststore.com/");
  }

  clickOnHairCareLink() {
    cy.get('a[href*="product/category&path="]').contains("Hair Care").click();
  }
}

export default AutoStoreHomepage_PO;
