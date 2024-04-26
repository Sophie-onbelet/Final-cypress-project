export class PracticeFormPage {
  firstName: string;
  lastName: string;
  emailAddress: string;
  mobile: string;
  dateOfBirth: string;
  subjects: string;
  hobbies: string;
  address: string;
  state: string;
  city: string;
  submit: string;

  constructor() {
    this.firstName = "#firstName";
    this.lastName = "#lastName";
    this.emailAddress = "#userEmail";
    this.mobile = "#userNumber";
    this.dateOfBirth = "#dateOfBirthInput";
    this.subjects = ".subjects-auto-complete__value-container";
    this.hobbies =
      "#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label";
    this.address = "#currentAddress";
    this.state = "#state > div > div.css-1wy0on6 > div";
    this.city =
      "#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer";
    this.submit = "#submit";
  }

  fillForm() {
    cy.get(this.firstName).type("Sophie");
    cy.get(this.lastName).type("Onbelet");
    cy.get(this.emailAddress).type("sophie.onbelet@spritecloud.com");
    cy.get(this.mobile).type("0612345678");
    cy.get(this.dateOfBirth)
      .click()
      .type("{selectall}")
      .type("14 Dec 1990{enter}"); //theres a bug when clearing the field, so I used selectAll and enter instead.
    cy.get(this.subjects).click().type("c");
    cy.get('div[id="react-select-2-option-0"]').click();
    cy.get(this.hobbies).click();
    cy.get(this.address).type("Tonala 150");
    cy.get(this.state).click();
    cy.get("#react-select-3-option-3").click();
    cy.get(this.city).click();
    cy.get("#react-select-4-option-0").click();
  }

  addGender(gender: string) {
    cy.get(`[value="${gender}"]`).check({ force: true });
  }

  clickSubmitButton() {
    cy.get(this.submit).click();
  }
}
