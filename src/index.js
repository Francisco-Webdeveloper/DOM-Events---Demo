const list = document.querySelector("#players");

// Append content
list.insertAdjacentHTML("beforeend", "<li>Luke</li>");
list.insertAdjacentHTML("beforeend", "<li>Anakin</li>");

// Selecting several elements
const winners = document.querySelectorAll("#fifa-wins li");
console.log(winners);

winners.forEach((winner) => {
  console.log(winner.innerText);
});

const listWinners = document.getElementById("fifa-wins");

setTimeout(() => {
  listWinners.insertAdjacentHTML("beforeend", "<li>France (2 wins)</li>");
  // Adding a class
  listWinners.classList.add("red")
}, 3000);

// Read / Write inputs
const emailInput = document.querySelector("#email");
// Read
console.log(emailInput.value);
// Write
emailInput.value = "francisco@gmail.com";

// getting innerText / innerHTML
const link = document.getElementById("home");
console.log(link.innerText);
console.log(link.innerHTML);
console.log(link.attributes.href.value);
link.innerHTML = "Le Wagon <strong>rocks</strong>";
console.log(link.innerHTML);
link.attributes.href.value = "https://www.lewagon.com/berlin";
console.log(link.attributes.href.value);
