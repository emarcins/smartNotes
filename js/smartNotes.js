const addBtn = document.querySelector(".add");
const deleteAllBtn = document.querySelector(".delete-all");

const textArea = document.querySelector("#text");
const category = document.querySelector("#category");

const deleteBtns = document.getElementsByClassName(".delete-note");

const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");

const error = document.querySelector(".error");

const noteArea = document.querySelector(".note-area");
const notePanel = document.querySelector(".note-panel");

let selectedValue;
let cardId = 0;

const openPanel = () => {
  notePanel.style.display = "flex";
};

const closePanel = () => {
  notePanel.style.display = "none";
  error.style.visibility = "hidden";
  textArea.value = "";
  category.selectedIndex = 0;
};

const addNote = () => {
  if (
    textArea.value !== "" &&
    category.options[category.selectedIndex].value !== "0"
  ) {
    createNote();
    error.style.visibility = "hidden";
  } else {
    error.style.visibility = "visible";
  }
  textArea.value = "";
};

const createNote = () => {
  const newNote = document.createElement("div");
  newNote.classList.add("note");
  newNote.setAttribute("id", cardId);

  newNote.innerHTML = `
        <div class="note-header">
            <h3 class="note-title">${selectedValue}</h3>
                <button class="delete-note" onclick="deleteNote(${cardId})">
                    <i class="fas fa-times icon"></i>
                </button>
        </div>
        <div class="note-body">
          ${textArea.value}
        </div>
    `;
  noteArea.appendChild(newNote);
  cardId++;
  category.selectedIndex = 0;
  notePanel.style.display = "none";
  checkColor(newNote);
};

const selectValue = () => {
  selectedValue = category.options[category.selectedIndex].text;
};

const checkColor = (note) => {
  switch (selectedValue) {
    case "Home":
      note.style.backgroundColor = "rgb(255,102,217)";
      break;
    case "Work":
      note.style.backgroundColor = "rgb(255,128,0)";
      break;
    case "Shopping":
      note.style.backgroundColor = "rgb(26,117,255)";
      break;
    case "Appointments":
      note.style.backgroundColor = "rgb(77,255,140)";
      break;
    case "Others":
      note.style.backgroundColor = "rgb(255,247,92)";
      break;
  }
};

const deleteNote = (id) => {
  const noteToDelete = document.getElementById(id);
  noteArea.removeChild(noteToDelete);
};

const deleteAllNotes = () => {
  noteArea.textContent = "";
};

addBtn.addEventListener("click", openPanel);
cancelBtn.addEventListener("click", closePanel);
saveBtn.addEventListener("click", addNote);
deleteAllBtn.addEventListener("click", deleteAllNotes);
