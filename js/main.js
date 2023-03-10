
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
        weight : 15,
    },
    {
        name : "bottecchia",
        weight : 8,
    }
];
console.log(bicycles);

// collegamento al DOM
const bicycleResultDom = document.getElementById("bicycle-result");

let biciWeight = bicycles[0].weight;


for (let i = 0; i < bicycles.length; i++) {

    let bici = bicycles[i];   
    const {weight} = bici;

    if (biciWeight > weight) {
        biciWeight = weight;
    } 

}

console.log(biciWeight)

