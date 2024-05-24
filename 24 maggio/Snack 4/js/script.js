// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadreDaCalcio = [
    {
        nome: 'Napoli',
        'punti-fatti': 0,
        'falli-subiti': 0
    },
    {
        nome: 'Juventus',
        'punti-fatti': 0,
        'falli-subiti': 0
    },
    {
        nome: 'Roma',
        'punti-fatti': 0,
        'falli-subiti': 0
    },
    {
        nome: 'Inter',
        'punti-fatti': 0,
        'falli-subiti': 0
    },
    {
        nome: 'Milan',
        'punti-fatti': 0,
        'falli-subiti': 0
    },
    {
        nome: 'Fiorentina',
        'punti-fatti': 0,
        'falli-subiti': 0
    }
];

/**
 * Function that return a random number between the min and the max number given, included
 * 
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
function getRandomInt(min, max){
    return Math.floor(Math.random() * max - min) + min;
}

// Generate a random amount of falli-subiti and punti-fatti for each literal element in the array
squadreDaCalcio.forEach(squadra => {
    squadra['punti-fatti'] = getRandomInt(1,100);
    squadra['falli-subiti'] = getRandomInt(1,100);
});

let nomiFalli = [];
squadreDaCalcio.forEach(squadra => {
    let newObj = {};

    newObj.nome =  squadra.nome;
    newObj['falli-subiti'] = squadra['falli-subiti'];

    nomiFalli.push(newObj);
});

console.log(nomiFalli)
