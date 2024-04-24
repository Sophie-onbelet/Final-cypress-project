export class PracticeFormPage {

    firstName: string;
    lastName: string;
    emailAddress: string;
    gender: string;
    mobile: string;
    
    constructor() {
        this.firstName = "#firstName";
        this.lastName = "#lastName";
        this.emailAddress = "#userEmail";
        this.gender = 'input[name="gender"][value="replaceMe"]';
       this.mobile = "#userNumber";
    }

    fillForm() {
            cy.get(this.firstName).type("Sophie");
            cy.get(this.lastName).type("Onbelet");
            cy.get(this.emailAddress).type("sophie.onbelet@spritecloud.com");
        //     this.selectGender(user.gender);
            cy.get(this.mobile).type("0600000000");
        //     cy.get(this.currentaddress).type(user.currentAddress);
        //     this.fillSubjects(user.subjects);
        //     this.selectHobby(user.hobbies);
          }

}