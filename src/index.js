const list = document.querySelector("#players");

list.insertAdjacentHTML("beforeend", "<li>Luke</li>");
list.insertAdjacentHTML("beforeend", "<li>Anakin</li>");


const winners = document.querySelectorAll("#fifa-wins li");
console.log(winners);

winners.forEach((winner) => {
  console.log(winner.innerText);
});

const listWinners = document.getElementById("fifa-wins");

setTimeout(() => {
  listWinners.insertAdjacentHTML("beforeend", "<li>France (2 wins)</li>");
  listWinners.classList.add("red");
}, 3000)
