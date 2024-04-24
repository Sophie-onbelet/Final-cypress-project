//import reqresResource from '../../fixtures/resources.json';
import { User, Color, CreateUser } from "../../support/models/api/Interfaces";
import { faker } from "@faker-js/faker";

describe("API Tests Reqres", () => {
  it("Get user from endpoint @Positive", async () => {
    cy.request({
      method: "GET",
      url: `https://reqres.in/api/users/2`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      const responseBody: User = response.body.data;
      expect(responseBody.email).to.eq("janet.weaver@reqres.in");
    });
  });

  it.only('Get data from "unknown" endpoint @Positive', async () => {
    const expectedData: Color[] = require("/Users/sophieonbelet/Coding Projects/Final-cypress-project/cypress/fixtures/resources.json");

    cy.request({
      method: "GET",
      url: `https://reqres.in/api/unknown/`,
    }).then((response) => {
      const responseBody: Color = response.body.data;
      expect(response.status).to.eq(200);
      expect(responseBody).to.deep.equal(expectedData); //deep equality comparison. It checks if the contents of the arrays or objects are the same, even if they are not the same instance in memory.
      expect(response.body.data[2].name).to.eq("true red");
      expect(responseBody).to.have.length(6);
    });
  });

  it("Create a new user @Positive", () => {
    const user = {
      name: "Sophie",
      job: "Queen",
    };

    cy.request({
      method: "POST",
      url: `https://reqres.in/api/users`,
      body: { name: "Sophie", job: "Queen" },
    }).then((response) => {
      expect(response.status).to.eq(201);
      const responseBody: CreateUser = response.body.data;
      expect(responseBody.name).to.eq(user.name);
      expect(response.body.job).to.eq(user.job);
      expect(response.body.id).to.have.property("id");
      expect(response.body).to.have.property("createdAt");
    });
  });
});
