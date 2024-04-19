// index.d.ts


// The error message "Property 'getIframe' does not exist on type 'cy & CyEventEmitter'" 
//suggests that TypeScript is unable to find a method named getIframe on the cy object.

// To resolve this issue, you need to make sure that TypeScript is aware 
//of the custom Cypress command getIframe that you defined in commands.js.

// You can do this by declaring a module augmentation for Cypress in a file
// typically named index.d.ts. Here's how you can declare the getIframe command:

// Extend Cypress chainable interface with custom commands
declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Custom command to get an iframe content as a Cypress chainable object
       * @example cy.getIframe('iframe-selector')
       */
      getIframe(iframeSelector: string): Chainable<any>;
    }
  }