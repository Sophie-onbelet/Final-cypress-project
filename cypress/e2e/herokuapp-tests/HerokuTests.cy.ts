/// <reference types="cypress" />

import { FramePage } from "../../support/pages/iFramePage";
import { LoginPage } from "../../support/pages/loginPage";

describe("Test the login page", () => {
  const loginPage = new LoginPage();



  it("log in", () => {
    const loginPage = new LoginPage();
    loginPage.goToLoginPage();
    const userName = Cypress.env("TESTING_USERNAME");
    const passWord = Cypress.env("USER_PASSWORD");

    loginPage.fillLoginDetails(userName, passWord);

    cy.get("h2").should("be.visible");
    cy.get(".button").should("be.visible");

    loginPage.logOut();
  });

  it.only("iFrame page", () => {
    const iFramePage = new FramePage();

    iFramePage.goToFramePage();
    iFramePage.insertText("Hello there!")
  })
});
