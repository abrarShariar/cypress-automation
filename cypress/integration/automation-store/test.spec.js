/// <reference types="Cypress"/>

describe('Test the automation store', () => {
	it('show the homepage', () => {
		cy.visit('https://automationteststore.com/');
		cy.log("Hello World");
		cy.get('#appendedInputButton').type("Hello World");
		cy.get('#topnav > .form-control').select("Specials");
		cy.url().should('include', '/special');
	});
});	