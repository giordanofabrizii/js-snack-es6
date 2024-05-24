const articoliDiModa = [
    { name: 'Poppy', type: 'tshirt', color: 'red' },
    { name: 'Jumping', type: 'occhiali', color: 'blue' },
    { name: 'CrissCross', type: 'scarpe', color: 'black' },
    { name: 'Jenny', type: 'borsa', color: 'pink' }
];

const articoliConCartellino = [];

articoliDiModa.forEach( articolo => {
    let newArt = {...articolo}
    newArt.position = getRandomLetter();
    articoliConCartellino.push(newArt)
});

function getRandomLetter() {
    const lettere = 'abcdefghijklmnopqrstuvwxyz';
    let index = Math.floor(Math.random() * (lettere.length))
    return lettere[index].toUpperCase();
};


// Function that sort the elements and place in alfabetic order
articoliConCartellino.sort((a, b) => {
    if (a.position < b.position) {
        return -1;
    }
    if (a.position > b.position) {
        return 1;
    }
    return 0;
});

const containerEl = document.getElementById("container");
for (articolo of articoliConCartellino) {
    let string = `L'articolo ${articolo.type} di ${articolo.name} e\' di colore ${articolo.color}`

    let articleEl = document.createElement("article");

    // title of the article
    let titleEl = document.createElement("p");
    titleEl.append(`${articolo.position}`)

    // descriiption of the article
    let pEl = document.createElement("p");
    pEl.append(string);

    articleEl.appendChild(titleEl);
    articleEl.appendChild(pEl);
    containerEl.appendChild(articleEl);
}