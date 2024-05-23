// > SNACK 1

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

//  > SNACK 2
const students = [
    {id : 213, name: 'Giuseppina della Rovere', grades : 78},
    {id : 110, name: 'Paola Cortellessa', grades : 96},
    {id : 250, name: 'Andrea Mantegna', grades : 48},
    {id : 145, name: 'Gaia Borromini', grades : 74},
    {id : 196, name: 'Luigi Grimaldello', grades : 68},
    {id : 102, name: 'Piero della Francesca', grades : 50},
    {id : 120, name: 'Francesca da Polenta', grades : 84}
];

let studentNames = [];
let studentsSuccessfull = []
let studentsSuccessfullIdSpecial = [];


for (student of students) {
    studentNames.push(student.name.toUpperCase())
    if (student.grades > 70) {
        studentsSuccessfull.push(student);
        if(student.id > 120) {
            studentsSuccessfullIdSpecial.push(student);
        }
    }
}

console.log(studentNames);
console.log(studentsSuccessfull);
console.log(studentsSuccessfullIdSpecial)