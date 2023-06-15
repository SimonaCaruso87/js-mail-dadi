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

const myButton = document.getElementById('click-button');
myButton.addEventListener('click' , 
      function (){
        const nutUser = Math.floor((Math.random(1)*6)+1);

        const nutComputer = Math.floor((Math.random(1)*6)+1);

        console.log('numero casuale', Math.floor((Math.random(1)*6)+1));

        const valueNut = document.querySelector('.nut-user-html');
        valueNut.innerHTML = nutUser ; 

        const valueNutComputer = document.querySelector('.nut-computer-html');
        valueNutComputer.innerHTML = nutComputer ; 


        if(nutUser > nutComputer){
            console.log('Hai Vinto' , nutUser , typeof nutUser);
            const winner = document.querySelector('#winner');
            winner.innerHTML = 'Hai Vinto';
        }
        else if(nutComputer > nutUser){
            console.log('Hai Perso' , nutComputer , typeof nutComputer);
            const winner = document.querySelector('#winner');
            winner.innerHTML = 'Hai Perso';

        }
      }

);




