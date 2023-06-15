/*
   CONSEGNA
   1)Chiedi all'utente la sua e-mail
   2)Verifichiamo che sia nella lista di chi può accedere
       -Se l'email è corretta andare avanti
       -Se l'email non è corretta torna al punto 2

   3)Stampa un messaggio appropriato sull'esito del controllo
        -Si L'email è registrata Accedi
        -No l'email non è registrata riinserisci la tua email

*/   

console.log('----------------------------');
console.log('LISTA DELLE EMAIL REGISTRATE');
console.log('----------------------------');

const listaEmailRegistrate = [
    'caruso.simona87@gmail.com',
    'silvio@arcore.com',
    'boolean.miverraunesauriemnto@speriamodino.com',
    'mauro@aiutamitiprego.com',
    'alessio@lightcoral.it'
]

console.log('Lista Delle Email', listaEmailRegistrate ,typeof listaEmailRegistrate);

//Dichiariamo una variabile email list registrata che andrà nell'html

//1)Chiedi all'utente la sua e-mail
const emailList = document.getElementById('email-list');


const form = document.getElementById('login-email');


//Quando l'utente sottomette il form deve accadere questa cosa
form.addEventListener('submit' , function(event) {
    //preventDefault serve a non far sottomettere il form
    event.preventDefault();
    //stampiamo in console
    console.log('Form Sottomesso');

    const emailValue = document.getElementById('email').value;  

    //crea un ciclo definito di controllo sulle email

    //d base l'utente non avrà l'accesso
    let accessoUtenteAutorizzato = false ;

    //inizializzazione contatore | condizione di permanenza | modalita di avanzamento ciclo
    for (let i = 0; i < listaEmailRegistrate.length; i++) {
        console.log('-' , listaEmailRegistrate[i]);
    
        if(listaEmailRegistrate[i] == emailValue ){
             
            console.log(listaEmailRegistrate , 'Email già registrata' , typeof listaEmailRegistrate);
          
            accessoUtenteAutorizzato = true ;

        }
        
    }
    

    if(accessoUtenteAutorizzato == false){
       
        console.log(accessoUtenteAutorizzato , "Non sei benvenuto neppure all'inferno" , typeof accessoUtenteAutorizzato);

        emailList.innerHTML = "Non sei benvenuto neppure all'Inferno" ; 

    }
    else {

        console.log("Benvenuto all'Inferno Silvio");
        emailList.innerHTML = "Benvenuto all'Inferno Silvio" ; 

    }



    document.getElementById('email').value = ''; 

});