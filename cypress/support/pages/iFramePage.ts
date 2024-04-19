
export class FramePage  {
  framelink: string;
  framepage: string;
  iframelink: string;
  iframepage: string;
  frameblock: string;
  textblock: string;

  constructor() {
    this.frameblock = 'iframe[id="mce_0_ifr"]'
    this.textblock = '#mce_0_ifr' 
   
  }

   goToFramePage() {
    cy.visit('https://the-internet.herokuapp.com/iframe');
  }

  insertText(text: string) {
    cy.getIframe(this.textblock).clear().type(text)

  }

}