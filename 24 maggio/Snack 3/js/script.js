const bici = [
    { nome: 'Bianchi Oltre XR4', peso: 7.2 },
    { nome: 'Specialized S-Works Tarmac SL7', peso: 6.7 },
    { nome: 'Trek Madone SLR 9', peso: 7.1 },
    { nome: 'Cannondale SuperSix EVO', peso: 7.5 },
    { nome: 'Pinarello Dogma F12', peso: 6.8 }
];

let biciLeggera;

bici.forEach((bicicletta) => {
    if (typeof(biciLeggera) == "undefined" || bicicletta.peso < biciLeggera.peso) {
        biciLeggera = bicicletta;
    }
});

console.log(`La bici piu\' leggera tra quelle fornite e\' la ${biciLeggera.nome} che pesa ${biciLeggera.peso} kg`)
