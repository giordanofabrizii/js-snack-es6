// Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
// [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
// Ma  la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto letterale javascript che ha come proprietà:
//     nome del tavolo (tableName),
//     nome dell'ospite (guestName),
//     posto occupato (place),


// Generiamo e stampiamo in console la lista per i segnaposto.

const guests = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];

let invitationList = [];

guests.forEach((guest, index) => {
    let guestInvitation = {};
    guestInvitation.tableName = 'Tavolo Vip'
    guestInvitation.guestName = guest;
    guestInvitation.place = index + 1;

    invitationList.push(guestInvitation)
});

console.log(invitationList);