//Creare una funzione per capire se la parola inserita è palindroma



function getPalindrome(){
    let word = document.getElementById('palindrome').value;
    let drow = '';
    for (let i = word.length - 1; i>= 0; i--){
        drow += word[i];
        
    }
    if (word == drow){
        document.getElementById('isItPal').innerHTML = 'The word IS a palindrome';
    } else {
        document.getElementById('isItPal').innerHTML = 'The word IS NOT a palindrome';
    }
}


//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

function bimBumBam(){
    let userOutcomeChoice = document.getElementById('pariDispari').value;
    console.log(userOutcomeChoice);

    let userNumberChoice = parseInt(document.getElementById('numberChoice').value);
    console.log(userNumberChoice);

    let pcNumberChoice = Math.floor(Math.random() * 5) + 1;
    console.log(pcNumberChoice);

    let userPcNumChoice = userNumberChoice + pcNumberChoice;
    console.log(userPcNumChoice);

        if ((userOutcomeChoice == "pari") && (userPcNumChoice % 2 == 0)){
            document.getElementById('result').innerHTML = 'you WON';
        } else if ((userOutcomeChoice == "dispari") && (userPcNumChoice % 2 !== 0)){
            document.getElementById('result').innerHTML = 'you WON';
        } else {
            document.getElementById('result').innerHTML = 'you LOST';
        }
}

