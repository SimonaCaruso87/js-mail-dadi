/*
   CONSEGNA
   1)Chiedi all'utente la sua e-mail
   2)Verifichiamo che sia nella lista di chi può accedere
   3)Stampa un messaggio appropriato sull'esito del controllo

*/   

console.log('---------------------');
console.log('LISTA DELLE EMAIL    ');
console.log('---------------------');

const listaEmail = [
    'Utente 1',
    'Utente 2',
    'Utente 3',
    'Utente 4',
    'Utente 5'
]

console.log('Lista Delle Email', listaEmail ,typeof listaEmail);

const emailList = document.getElementById('email-list');

for (let i = 0; i < listaEmail.length; i++) {
    console.log('-' , listaEmail[1]);

    const newLi = document.createElement('li');
    newLi.append(listaEmail[i]);    
}

const form = document.getElementById('login-email');

form.addEventListener('submit' , function(event) {
    //preventDefault serve a non far sottomettere il form
    event.preventDefault();
    console.log('Form Sottomesso');

    const emailInput = document.getElementById('email');

    document.getElementById('email').value = '';   

});