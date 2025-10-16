// app.js - Adds interactivity using JavaScript

// Get elements from the DOM
const textElement = document.getElementById("mainText");
const changeTextButton = document.getElementById("changeTextButton");
const showTimeButton = document.getElementById("showTimeButton");
const timeDisplay = document.getElementById("timeDisplay");
const itemList = document.getElementById("itemList");

// Event: Change the main text when the button is clicked
changeTextButton.addEventListener("click", () => {
  textElement.textContent = "The text has been changed by JavaScript!";
});

// Event: Show current time when button is clicked
showTimeButton.addEventListener("click", () => {
  const now = new Date();
  timeDisplay.textContent = `Current time: ${now.toLocaleTimeString()}`;
});

// VG Requirement: Dynamically generate and add list items
const items = ["HTML", "CSS", "JavaScript"];

items.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  itemList.appendChild(li);
});
