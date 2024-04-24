/// <reference types="cypress" />
//import { PracticeFormPage } from "cypress/support/pages/formPage";
Cypress.on("uncaught:exception", () => {
  return false;
});

describe("Test different feature of uitestingplayground", () => {
  it("Test dynamicID", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    //const formPage = new PracticeFormPage();
    //formPage.fillForm();
    cy.get("#firstName").type("Sophie");
    cy.get("#lastName").type("Onbelet");
    cy.get("#userEmail").type("sophie.onbelet@spritecloud.com");
    cy.get("#userNumber").type("0612345678");
    cy.get('input[name="gender"][value="Female"]').check({ force: true });
    // cy.get('#dateOfBirthInput').clear().type("14 Dec 1990"); //theres a bug when clearing the field
    // cy.get('#react-datepicker__month-select').click().get('value="11"').click();
    // cy.get('#react-datepicker__year-select').click();
    // cy.get('value="1990"').click().get('.react-datepicker__day--031').click()
    cy.get('.subjects-auto-complete__value-container').click().type("c")
    cy.get('div[id="react-select-2-option-0"]').click();
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').click();
    cy.get('#currentAddress').type("Tonala 201");
    cy.get('#state > div > div.css-1wy0on6 > div').click();
    cy.get('#react-select-3-option-3').click();
    cy.get('#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
    cy.get('#react-select-4-option-0').click();
    cy.get('#submit').click();
  });
});