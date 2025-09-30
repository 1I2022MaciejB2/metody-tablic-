const nazwiska = [
  "Barczyński",
  "Bazyl",
  "Bąchór",
  "Bączek",
  "Borowska",
  "Chimiak",
  "Dąbkowski",
  "Fojcik",
  "Gorzelak",
  "Kardacz",
  "Kubacki",
  "Makówka",
  "Neubauer",
  "Skulimowski",
  "Sojko",
];

const przycisk = document.getElementById("button");
const tablicaElement = document.getElementById("tablicaNazwisk");
const wylosowaneElement = document.getElementById("wylosowaneOsoby");
const aktualnaTablicaElement = document.getElementById("aktualnaTablica");

const wylosowane = [];

tablicaElement.textContent = nazwiska.join(", ");

function losujOsobe() {
  if (nazwiska.length === 0) {
    aktualnaTablicaElement.textContent = "Wszystkie osoby zostały już wylosowane!";
    return;
  }

  const randomIndex = Math.floor(Math.random() * nazwiska.length);
  const wylosowanaOsoba = nazwiska[randomIndex];

  nazwiska.splice(randomIndex, 1);

  wylosowane.push(wylosowanaOsoba);

  wylosowaneElement.innerHTML = wylosowane
    .map((osoba, index) => `${index + 1}. ${osoba}`)
    .join("<br>");
  aktualnaTablicaElement.textContent = nazwiska.join(", ");
}

przycisk.addEventListener("click", losujOsobe);
