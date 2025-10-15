/*
TOOLS:

- promt
- const / let
- operatore di comparazione
- if / else
*/

/* Inizializzazione valori con inserimento da input */

// Inizializzo il form
const form = document.getElementById("form");

// Inizializzo l'input dei chilometri da percorrere
const kmField = document.getElementById("km");

// Inizializzo l'input degli anni del passeggero
const ageField = document.getElementById("age");

// Inizializzo il bottone submit
const button = document.querySelector("button");

/* Inizializzazione valori predefiniti */

// Prezzo al chilometro
const costAtKm = 0.21;

// Prezzo finale
let finalCost = 0;

// Sconto
let discount = 0;

// Creazione funzione per non resettare il form
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Inizializzo valore inserito nei chilometri
  const kmEl = kmField.value;
  console.log(kmEl);

  // Inizializzo valore inserito nell'età
  const ageEl = ageField.value;
  console.log(ageEl);

  /* Calcolo del prezzo totale del viaggio */

  // Calcolo il prezzo in base ai chilometri
  let baseCost = costAtKm * kmEl;

  if (ageEl < 18) {
    // Applico lo sconto del 20% se il passeggero è minorenne
    discount = baseCost * 0.2;
    finalCost = baseCost - discount;

  } else if (ageEl >= 65) {
    // Applico lo sconto del 40% se il passeggero è over 65
    discount = baseCost * 0.4;
    finalCost = baseCost - discount;

  } else {
    // Non applico nessuno sconto
    finalCost = baseCost;
    console.log(finalCost.toFixed(2));
  }

  // Mostro come output il prezzo totale del viaggio
  console.log("Il prezzo finale è di €" + finalCost.toFixed(2));
});
