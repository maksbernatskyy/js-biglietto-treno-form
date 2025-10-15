/*
TOOLS:

- const / let
- operatore di comparazione
- if / else
*/

// Inizializzo funzione per il random
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/* Inizializzazione valori con inserimento da input */

// Inizializzo il form
const form = document.getElementById("form");

// Inizializzo l'input del nome e cognome
const fullNameField = document.getElementById("full-name");

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

/* Inizializzazione valori inseiti nella pagina */

// Inizializzo spazio per il fullname
const fullNameTicket = document.getElementById('ticket-fullname')

// Inizializzo tipologia biglietto
const typeOfTicket = document.getElementById('type-ticket')

// Inizializzo il numero della carrozza
const carriageTicket = document.getElementById('carrozza')

// Inizializzo il codice CP
const cpTicket = document.getElementById('cod-cp')

// Creazione funzione per non resettare il form e calcolare il prezzo finale
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
    // Biglietto minori
    typeOfTicket.innerHTML = 'Biglietto minori'

  } else if (ageEl >= 65) {
    // Applico lo sconto del 40% se il passeggero è over 65
    discount = baseCost * 0.4;
    finalCost = baseCost - discount;
    // Biglietto over 65
    typeOfTicket.innerHTML = 'Biglietto over 65'

  } else {
    // Non applico nessuno sconto
    finalCost = baseCost;
    console.log(finalCost.toFixed(2));
    // Biglietto standard
    typeOfTicket.innerHTML = 'Biglietto standard'
  }

  // Mostro come output il prezzo totale del viaggio
  console.log("Il prezzo finale è di €" + finalCost.toFixed(2));

  // Inizializzo il valore inserito in fullName
  const fullNameEl = fullNameField.value;

  // Inserisco il fullname nel ticket
  fullNameTicket.innerHTML = fullNameEl

  // Inserisco il numero della arrozza nel ticket
  carriageTicket.innerHTML = getRandomNumber(1, 10)

  // Inserisco il codice CP nel ticket
  cpTicket.innerHTML = getRandomNumber(99000, 100000)


});
