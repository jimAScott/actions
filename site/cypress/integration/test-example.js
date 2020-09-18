/* eslint-disable no-undef */

/// <reference types="cypress" />

/// id VT1
/// Given: I am on a topic page
/// When: I want to view content about that topic
/// Then: I expect to see a topic title
/// And: descriptive text
/// And: The swim lane of initiatives
/// Acceptance criteria:
/// View content about a particular topics
it("Check the page loads and the logo is there", () => {
  /// Given: I am on a topic page
  cy.visit("/");
  cy.get('img[id="logo"]').should("be.visible");
});
