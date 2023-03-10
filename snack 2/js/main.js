const squadre = [
    {
        "nome": "Juventus", "punti_fatti": 0, "falli_subiti": 0
    },
    {
        "nome": "Milan", "punti_fatti": 0, "falli_subiti": 0
    },
    {
        "nome": "Inter", "punti_fatti": 0, "falli_subiti": 0
    },
    {
        "nome": "Sassuolo", "punti_fatti": 0, "falli_subiti": 0
    },
];

function randomNum(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

for(let s in squadre) {
    squadre[s].falli_subiti = randomNum(1, 10);
    squadre[s].punti_fatti = randomNum(1, 10);
}

console.log(squadre)

console.log(squadre.map(x => {
    const {nome, punti_fatti} = x
    return {nome, punti_fatti}
}))