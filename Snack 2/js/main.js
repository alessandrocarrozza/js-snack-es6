
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



for (let i = 0; i < soccerTeams.length; i++) {

    soccerTeams[i]["punti fatti"] = generateRandomNumber(1, 30);
    soccerTeams[i]["falli subiti"] = generateRandomNumber(1, 30);
}

console.log(soccerTeams)


function generateRandomNumber (min, max) {
    const randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}