context("Register", () => {
  it("Enters the landing page and tries to go to the register page", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);

    cy.get("input").type(95901178);

    cy.contains("Buscar pelo CEP").click();
  });
});
