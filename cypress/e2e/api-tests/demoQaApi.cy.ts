import { faker } from "@faker-js/faker";

describe("DemoQA Bookstore tests", () => {
  it("Post - Create user", () => {
    const userName = faker.internet.email();
    cy.request({
      method: "POST",
      url: "https://demoqa.com/Account/v1/User",
      body: {
        userName: userName,
        password: "Test1234561!",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
  it("Authorize @positive", () => {
    cy.request({
      method: "POST",
      url: `https://demoqa.com/Account/v1/Authorized`,
      body: {
        userName: Cypress.env("userName"),
        password: Cypress.env("userPass"),
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("Generate token @positive", () => {
    cy.request({
      method: "POST",
      url: `https://demoqa.com/Account/v1/GenerateToken`,
      body: {
        userName: Cypress.env("userName"),
        password: Cypress.env("userPass"),
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("token");
      expect(response.body).to.have.property("expires");
      expect(response.body.status).to.eq("Success");
      expect(response.body.result).to.eq("User authorized successfully.");
    });
  });

  it("Authorize @negative", () => {
    const errorMessage = {
      code: "1207",
      message: "User not found!",
    };
    cy.request({
      method: "POST",
      url: `https://demoqa.com/Account/v1/Authorized`,
      failOnStatusCode: false,
      body: {
        userName: "DoesNotExist987",
        password: "IncorrectpassWord5",
      },
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).contains(errorMessage);
    });
  });
});
