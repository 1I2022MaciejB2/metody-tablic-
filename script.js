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

// Elementy DOM
const przycisk = document.getElementById("button");
const tablicaElement = document.getElementById("tablicaNazwisk");
const wylosowaneElement = document.getElementById("wylosowaneOsoby");
const aktualnaTablicaElement = document.getElementById("aktualnaTablica");

// Tablica do przechowywania wylosowanych osób
const wylosowane = [];

// Wyświetlenie pierwotnej tablicy
tablicaElement.textContent = nazwiska.join(", ");

// Funkcja do losowania osoby
function losujOsobe() {
  if (nazwiska.length === 0) {
    alert("Wszystkie osoby zostały już wylosowane!");
    return;
  }

  // Losowanie jednej osoby z tablicy za pomocą Math.random()
  const randomIndex = Math.floor(Math.random() * nazwiska.length);
  const wylosowanaOsoba = nazwiska[randomIndex];

  // Usuwamy wylosowaną osobę z pierwotnej tablicy
  nazwiska.splice(randomIndex, 1);

  // Dodajemy wylosowaną osobę do listy wylosowanych
  wylosowane.push(wylosowanaOsoba);

  // Aktualizacja wyników
  wylosowaneElement.innerHTML = wylosowane
    .map((osoba, index) => `${index + 1}. ${osoba}`)
    .join("<br>");
  aktualnaTablicaElement.textContent = nazwiska.join(", ");

  // Zaktualizowanie pierwotnej tablicy (możemy wyświetlić ją znowu, jeżeli to pożądane)
  tablicaElement.textContent = nazwiska.join(", ");
}

// Przypisanie funkcji do przycisku
przycisk.addEventListener("click", losujOsobe);
