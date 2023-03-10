
// ------ PRIMO SNACK -------

// array di oggetti
const bicycles = [
    {
        name : "olmo",
        weight : 12,
    },
    {
        name : "atala",
        weight : 10,
    },
    {
        name : "casati",
        weight : 8,
    },
    {
        name : "bottecchia",
        weight : 15,
    }
];
console.log(bicycles);

// collegamento al DOM
const bicycleResultDom = document.getElementById("bicycle-result");

// variabile di partenza che conterrà il peso piu' basso
let lowerWeight = bicycles[0].weight;

// variabile che conterrà il nome della bici piu' leggera
let = nameBicycle = "";


// ciclo per determinare la bici piu' leggera
bicycles.forEach(element => {
    const {weight} = element;

    if (lowerWeight > weight) {
        lowerWeight = weight;
    } 

    if (element.weight == lowerWeight) {
        nameBicycle = element.name;
    }
});

console.log(lowerWeight)

bicycleResultDom.innerHTML = `La bicicletta da corsa piu' leggera si chiama "${nameBicycle}" e ha un peso di ${lowerWeight} Kg.`;

