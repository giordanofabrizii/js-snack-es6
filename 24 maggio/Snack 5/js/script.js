const articoliDiModa = [
    { name: 'Poppy', type: 'tshirt', color: 'red' },
    { name: 'Jumping', type: 'occhiali', color: 'blue' },
    { name: 'CrissCross', type: 'scarpe', color: 'black' },
    { name: 'Jenny', type: 'borsa', color: 'pink' }
];

const articoliConCartellino = [];

articoliDiModa.forEach( articolo => {
    let newArt = {...articolo}
    newArt.cartellino = getRandomLetter();
    articoliConCartellino.push(newArt)
});

function getRandomLetter() {
    const lettere = 'abcdefghijklmnopqrstuvwxyz';
    let index = Math.floor(Math.random() * (lettere.length))
    return lettere[index].toUpperCase();
};

console.log(articoliConCartellino);