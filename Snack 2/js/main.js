
// ------ SECONDO SNACK -------

const soccerTeams = [
    {
        teamName : "napoli",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        teamName : "juventus",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        teamName : "cremonese",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        teamName : "atalanta",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        teamName : "benevento",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        teamName : "torino",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        teamName : "roma",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        teamName : "lazio",
        puntiFatti : 0,
        falliSubiti : 0,
    }
];

console.log(soccerTeams);



soccerTeams.forEach(element => {
    element.puntiFatti = generateRandomNumber(1, 80);
    element.falliSubiti = generateRandomNumber(1, 40);
});



const teamNomeFalli = soccerTeams.map((team) => {
    const {teamName, falliSubiti} = team;
    return {teamName, falliSubiti};
});

console.log(teamNomeFalli);


function generateRandomNumber (min, max) {
    const randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}


