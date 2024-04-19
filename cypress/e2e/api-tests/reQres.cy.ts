//import reqresUser from '../../fixtures/user.json';
//import reqresResource from '../../fixtures/resources.json';
//import { User, Color, CreateUser } from "../../support/models/api/Interfaces";

describe("API Tests Reqres", () => {
  it("Get user from endpoint @Positive", async () => {
    cy.request({
      method: "GET",
      url: `https://reqres.in/api/users/2`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.email).to.eq("janet.weaver@reqres.in");
    });
  });

  it('Get data from "unknown" endpoint @Positive', async () => {
    cy.request({
      method: "GET",
      url: `https://reqres.in/api/unknown/`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data[2].name).to.eq("true red");
      expect(response.body.data).to.have.length(6);
    });
  });

  it("Create a new user @Positive", () => {
    const user = {
      name: "Sophie",
      job: "Queen"
    };
    
    cy.request({
      method: "POST", 
      url: `https://reqres.in/api/users`, 
      body: { name: "Sophie",
              job: "Queen" }})
              .then(
      (response) => {
        expect(response.status).to.eq(201);
        expect(response.body.name).to.eq(user.name);
        expect(response.body.job).to.eq(user.job);
        expect(response.body.id).to.have.property("id");
        expect(response.body).to.have.property("createdAt");
      }
    );
  });
});
