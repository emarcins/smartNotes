import { addNewShoppingNote } from "./../../support/utils";

describe("SmartNotes App testing", () => {
  context("Page loading ", () => {
    it("Main page should be visible and have a proper title", () => {
      cy.visit("./index.html");
      cy.get(".menu h1")
        .should("be.visible")
        .and("contain.text", "SmartNotes");
    });
  });
  context("Adding new notes", () => {
    before(() => {
      cy.visit("./index.html");
    });
    const shoppingValue = "Shopping";
    const firstTypingValue = "New notebook, keyboard and mouse";
    const workValue = "Work";
    const secondTypingValue =
      "Add new test functions in Cypress to my georgeous app";
    const appointmentsValue = "Appointments";
    const thirdTypingValue = "Call with Boss on Teams at 10 a.m.";

    it("Add first note - Click the Add note button, select Shopping, enter text and confirm save button", () => {
      addNewShoppingNote(shoppingValue, firstTypingValue);
    });
    it("Add second note - Click the Add note button, select Work, enter text and confirm save button", () => {
      addNewShoppingNote(workValue, secondTypingValue);
    });
    it("Add third note - Click the Add note button, select Appointments, enter text and confirm save button", () => {
      addNewShoppingNote(appointmentsValue, thirdTypingValue);
    });

    context("Delete note", () => {
      it("Click on delete icon and delete Work note", () => {
        cy.get(".note")
            .eq(1)
            .find("button.delete-note")
            .click();
      });
    });

    context("Delete all notes", () => {
        it("Click on cancel button and delete rest of all notes", () => {
            cy.get("button.delete-all")
                .click();
        });
    });
  });
});
