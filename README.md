Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
Ma  la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto letterale javascript che ha come proprietà:
    nome del tavolo (tableName),
    nome dell'ospite (guestName),
    posto occupato (place),


Generiamo e stampiamo in console la lista per i segnaposto.

<!-- * PROCEDIMENTO -->
creare un oggetto letterale
aprire un ciclo foreach componente dell'array
    inserire il nome del tavolo come prima proprieta
    inserire il nome dell'ospite
    inserire un index
console.log(oggetto letterale)

SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo, ad esempio (Marco della Rovere =MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

<!-- * PROCEDIMENTO -->
creo una lista "nomi"
creo una lista ">70"
creo una lista "> 70 e id>120"

ciclo foreach
    ogni nome lo rendo caps lock e lo aggiungo ai nomi
    se ha voto superiore a 70
        aggiungo a lista ">70"
            se ha id>120
                aggiungo a "id>120"

console.log(lista, lista, lista)
