
// ------ SECONDO SNACK -------

const soccerTeams = [
    {
        teamName : "napoli",
        "punti fatti" : 0,
        "falli subiti" : 0,
    },
    {
        teamName : "juventus",
        "punti fatti" : 0,
        "falli subiti" : 0,
    },
    {
        teamName : "cremonese",
        "punti fatti" : 0,
        "falli subiti" : 0,
    },
    {
        teamName : "atalanta",
        "punti fatti" : 0,
        "falli subiti" : 0,
    },
    {
        teamName : "benevento",
        "punti fatti" : 0,
        "falli subiti" : 0,
    },
    {
        teamName : "torino",
        "punti fatti" : 0,
        "falli subiti" : 0,
    },
    {
        teamName : "roma",
        "punti fatti" : 0,
        "falli subiti" : 0,
    },
    {
        teamName : "lazio",
        "punti fatti" : 0,
        "falli subiti" : 0,
    }
];

console.log(soccerTeams);



for (let i = 0; i < soccerTeams.length; i++) {

    soccerTeams[i]["punti fatti"] = generateRandomNumber(1, 80);
    soccerTeams[i]["falli subiti"] = generateRandomNumber(1, 30);
}



const teamNomeFalli = soccerTeams.map(({teamName, ["falli subiti"]:falliSubiti}) => {
    return {teamName, falliSubiti};
});

console.log(teamNomeFalli);


function generateRandomNumber (min, max) {
    const randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}


