// Ändra texten när knappen klickas
function ändraText() {
  document.getElementById("text").textContent = "Texten har ändrats!";
}

// Visa aktuell tid när knappen klickas
function visaTid() {
  const nu = new Date();
  document.getElementById("time").textContent = "Klockan är: " + nu.toLocaleTimeString();
}

// Dynamiskt generera lista med favoritämnen
function visaLista() {
  // En array med data (ämnen)
  const ämnen = ["HTML", "CSS", "JavaScript"];

  // Hitta elementet där listan ska visas
  const listElement = document.getElementById("subjectList");

  // Töm listan först om den redan finns
  listElement.innerHTML = "";

  // Loopar igenom ämnen och skapar <li>-element
  for (let i = 0; i < ämnen.length; i++) {
    const li = document.createElement("li"); // Skapar nytt <li>
    li.textContent = ämnen[i]; // Sätter text
    listElement.appendChild(li); // Lägger till i listan
  }
}

// Kopplar funktionerna till knapparna
document.getElementById("changeBtn").onclick = ändraText;
document.getElementById("timeBtn").onclick = visaTid;
document.getElementById("showListBtn").onclick = visaLista;
