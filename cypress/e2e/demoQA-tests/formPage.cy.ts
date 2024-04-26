/// <reference types="cypress" />
import { PracticeFormPage } from "cypress/support/pages/formPage";

Cypress.on("uncaught:exception", () => {
  return false;
});

describe("Test different feature of uitestingplayground", () => {
  it("Test dynamicID", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    const formPage = new PracticeFormPage();
    formPage.fillForm();
    formPage.addGender("Female");
    formPage.clickSubmitButton();
  });
});