/// <reference types="Cypress"/>

describe('Test the automation store', () => {
	it('show the homepage', () => {
		cy.visit('https://automationteststore.com/');
		cy.log("Hello World");
	});
});	