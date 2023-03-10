
// ------ SECONDO SNACK -------

const soccerTeams = [
    {
        name : "napoli",
        "punti fatti" : 0,
        "falli subiti" : 0,
    },
    {
        name : "juventus",
        "punti fatti" : 0,
        "falli subiti" : 0,
    },
    {
        name : "cremonese",
        "punti fatti" : 0,
        "falli subiti" : 0,
    }
];

console.log(soccerTeams);


function generateRandomNumber (min, max) {
    const randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}

const casualNumber = generateRandomNumber(1, 30)

console.log(casualNumber);