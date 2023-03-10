
// ------ PRIMO SNACK -------

// array di oggetti
const bicycles = [
    {
        name : "olmo",
        weight : 12,
    },
    {
        name : "casati",
        weight : 15,
    },
    {
        name : "atala",
        weight : 10,
    }
];
console.log(bicycles);

// collegamento al DOM
const bicycleResultDom = document.getElementById("bicycle-result");

bicycles.forEach(element => {
    const {weight} = element;
    console.log(weight);
});

