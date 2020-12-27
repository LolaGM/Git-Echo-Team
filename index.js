"use strict";

const startButton = document.querySelector("#startButton");
const resetButton = document.querySelector("#resetButton");
const addButton = document.querySelector("#addButton");

startButton.addEventListener("click", startWheel);
resetButton.addEventListener("click", reset);
addButton.addEventListener("click", addCoder);

var listaCoders = [
  {name:"LauraR",status:"alive"},
  {name:"Alejandra",status:"alive"},
  {name:"Alvaro",status:"alive"},
  {name:"Carmen",status:"alive"},
  {name:"Estefanie",status:"alive"},
  {name:"Jackson",status:"alive"},
  {name:"Jorge",status:"alive"},
  {name:"Loredana",status:"alive"},
  {name:"Mercedes",status:"alive"},
  {name:"Olga",status:"alive"},
  {name:"Quim",status:"alive"},
  {name:"René",status:"alive"},
  {name:"Sergio",status:"alive"},
  {name:"Vanessa",status:"alive"},
  {name:"Gisselle",status:"alive"},
  {name:"Jose",status:"alive"},
  {name:"Moises",status:"alive"},
  {name:"Lorena",status:"alive"},
  {name:"Joan",status:"alive"},
  {name:"Giacomo",status:"alive"},
  {name:"Ismael",status:"alive"},
  {name:"Gabriel",status:"alive"},
  {name:"LauraB",status:"alive"},
];


function startWheel() {
  const listCodersAlive = [];
  listaCoders.forEach((coder) => {
    if (coder.status === "alive") {
      listCodersAlive.push(coder);
    }
  });
  if (listCodersAlive.length <= 0) {
    showResultMessage("No one left! Please reset");
    return;
  }
  const selectedCoder = selectCoder(listCodersAlive);
  showResultMessage(selectedCoder.name);
  updateList(selectedCoder, "dead");
  updateCoderCard(selectedCoder);
}

function selectCoder(array) {
  const selectedCoder = array[Math.floor(Math.random() * array.length)];
  return selectedCoder;
}

function updateCoderCard(coder) {
  const coderCard = document.querySelector(`#${coder.name}`);
  coderCard.className = `${coder.status}`;
}

function updateList(coder, status) {
  const coderIndex = listaCoders.findIndex(
    (element) => element.name === coder.name
  );
  listaCoders[coderIndex].status = status;
}

function showResultMessage(message) {
  const selectedCard = document.querySelector("#display-message");
  selectedCard.innerHTML = message;
}

function showCoders() {
  listaCoders.forEach((coder) => {
    createCoderArticle(coder);
  });
}

function createCoderArticle(coder) {
  const coderListSection = document.querySelector("#coderList");
  const coderArticle = document.createElement("article");
  const coderName = document.createElement("p", `${coder.name}`);
  coderName.innerHTML += `${coder.name}`;
  coderArticle.setAttribute("class", `${coder.status}`);
  coderArticle.setAttribute("id", `${coder.name}`);
  coderArticle.appendChild(coderName);
  coderListSection.appendChild(coderArticle);
}

function reset() {
  listaCoders.forEach((element) => {
    updateList(element, "alive");
    updateCoderCard(element);
  });
  showResultMessage("");
}

function addCoder() {
  let coderNameInput = document.querySelector("#addCoder");
  const coderName = coderNameInput.value;
  if (!validateInput(coderName)) {
    return;
  }
  const coder = {
    name: coderName,
    status: "alive",
  };
  listaCoders.push(coder);
  createCoderArticle(coder);
  coderNameInput.value = "";
}

function validateInput(value) {
  if (value === "" || value === undefined) {
    showFeedbackMessage();
    return;
  }
  return true;
}

function showFeedbackMessage() {
  window.alert("please insert name")
}

const audio = document.getElementById("myAudio");

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

window.onload = showCoders();
