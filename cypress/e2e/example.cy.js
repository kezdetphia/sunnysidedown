describe("Example Test", () => {
  it("Visits the app", () => {
    cy.visit("/");
    cy.contains("Welcome"); // Replace with actual content from your app
  });
});
