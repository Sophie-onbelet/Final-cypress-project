
export class LoginPage {

  
  loginlink: string;
  loginfield: string;
  password: string;
  submit: string;
  logout: string;

  constructor() {
    this.loginlink = 'a[href="/login"]'
    this.loginfield = 'input[id="username"]'
    this.password = 'input[id="password"]'
    this.submit = 'button[type="submit"]'
    this.logout = 'a[href="/logout"]'
  }
goToLoginPage() {
    cy.visit('https://the-internet.herokuapp.com/login');
  }
 
  
  fillLoginDetails(username: string, password: string) {
   cy.get(this.loginfield).type(username);
   cy.get(this.password).type(password);
   cy.get(this.submit).click();
  }

  async logOut(): Promise<void> {
    cy.get(this.logout).click();
  }
}