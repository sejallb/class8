// Select the add button element
const addButton = document.getElementById("addButton");

// Add a pet on button click
addButton.onclick = () => addPet();

function addPet() {
  const nameInput = document.getElementById("nameInput");
  const ageInput = document.getElementById("ageInput");
  const pictureInput = document.getElementById("pictureInput");

  if (!validateField(nameInput)) return;
  if (!validateField(ageInput)) return;
  if (!validateField(pictureInput)) return;

  let pet = {
    name: nameInput.value,
    age: ageInput.value,
    picture: pictureInput.value,
  };

  let petElt = document.createElement('section');
  petElt.innerHTML = `
    <h2>${pet.name}</h2>
    <img src="${pet.picture}" alt="${pet.name}'s picture"/>
    <p>${pet.name} is ${pet.age} years old.</p>
  `;

  let deleteBtn = document.createElement('button');
  deleteBtn.innerText = "Delete";
  deleteBtn.onclick = () => petElt.remove();
  petElt.append(deleteBtn);

  document.getElementById("petsDisplay").append(petElt);

  clearInputs();
}

function validateField(inputElt) {
  if (inputElt.value.trim() === '') {
    inputElt.classList.add("error");
    return false;
  } else {
    inputElt.classList.remove("error");
    return true;
  }
}

function clearInputs() {
  document.getElementById("nameInput").value = '';
  document.getElementById("ageInput").value = '';
  document.getElementById("pictureInput").value = '';
}

// New functions for counting elements

function countElements() {
  const totalElements = document.querySelectorAll('section').length;
  document.getElementById("elementCount").innerText = `There are ${totalElements} <section> tags on this page.`;
}

function countFirstIDElements() {
  const firstIDElements = document.getElementById("firstID").children.length;
  document.getElementById("firstIDCount").innerText = `There are ${firstIDElements} elements inside the first ID.`;
}

function countSecondIDElements() {
  const secondIDElements = document.getElementById("petsDisplay").children.length;
  document.getElementById("secondIDCount").innerText = `There are ${secondIDElements} elements inside the second ID.`;
}
