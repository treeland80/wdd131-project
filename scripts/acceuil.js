const visitCount = localStorage.getItem("treeLandVisits") || 0;
const newCount = Number(visitCount) + 1;
localStorage.setItem("treeLandVisits", newCount);

console.log(`Visites du site: ${newCount}`);

document.body.insertAdjacentHTML(
  "afterbegin",
  `<div class="visit-info">Visite numéro: ${newCount}</div>`
);