import { wait } from "@testing-library/dom";

describe("Cypress test", () => {
  it("add button test", () => {
    cy.visit("/");
    cy.findByRole("button", { name: /add/i }).click();
    cy.findByText(/1/).should("be.visible");
  });
  it("subtract button test", () => {
    cy.visit("/");
    cy.findByRole("button", { name: /subtract/i }).click();
    cy.findByText(/-2/).should("be.visible");
  });
});
