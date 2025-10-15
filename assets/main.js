/*
TOOLS:

- promt
- const / let
- operatore di comparazione
- if / else
*/

/* Inizializzazione valori con inserimento da input */

// Inserimento dei chilometri da percorrere
let km = Number(prompt('Inserisci i chilometri che vuoi percorrere'))

// Inserimento dell'età del passeggero
let age = Number(prompt('Inserisci la tua età'))

/* Inizializzazione valori predefiniti */

// Prezzo al chilometro
const costAtKm = 0.21

// Prezzo finale
let finalCost = 0

// Sconto
let discount = 0

/* Calcolo del prezzo totale del viaggio */

// Calcolo il prezzo in base ai chilometri
let baseCost = costAtKm * km
console.log(baseCost.toFixed(2))

if (age < 18){
    // Applico lo sconto del 20% se il passeggero è minorenne
    discount = baseCost * 0.2
    console.log(discount.toFixed(2))
    finalCost = baseCost - discount
    console.log(finalCost.toFixed(2))

} else if (age >= 65){
    // Applico lo sconto del 40% se il passeggero è over 65
    discount = baseCost * 0.4
    console.log(discount.toFixed(2))
    finalCost = baseCost - discount
    console.log(finalCost.toFixed(2));

} else{
    // Non applico nessuno sconto
    finalCost = baseCost
    console.log(finalCost.toFixed(2));
}

// Mostro come output il prezzo totale del viaggio
alert("Il prezzo finale è di €" + finalCost.toFixed(2))