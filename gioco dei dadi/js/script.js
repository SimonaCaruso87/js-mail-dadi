/* 
    CONSEGNA
    Gioco dei dadi
    1)Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    2)Stabilire il vincitore, in base a chi fa il punteggio più alto.
    3)Prima di partire a scrivere codice poniamoci qualche domanda:
        -Che ci sia un array da qualche parte?
        -Se dobbiamo confrontare qualcosa che "cosa" ci serve?

*/  

//1)Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

const nutUser = Math.floor((Math.random(1)*6)+1);

const nutComputer = Math.floor((Math.random(1)*6)+1);

console.log('numero casuale', Math.floor((Math.random(1)*6)+1));



