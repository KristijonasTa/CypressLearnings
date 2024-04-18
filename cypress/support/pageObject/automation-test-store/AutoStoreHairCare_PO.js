class AutoStoreHairCare_PO {
  addHairCareProductsToCart() {
    globalThis.data.productName.forEach(function (element) {
      cy.addProductToCart(element).then(() => {
        // debugger;
      });
    });
    cy.get(".dropdown-toggle > .fa").click(); // .debug() short
  }
}

export default AutoStoreHairCare_PO;
