const addNewNote = (noteValue, typingValue) => {
  cy.get("button.add").click();
  cy.get("select").select(noteValue);
  cy.get("textarea")
    .should("have.attr", "placeholder", "Your text...")
    .type(typingValue);
  cy.get("button.save").click();
};

export { addNewNote };
