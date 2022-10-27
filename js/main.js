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



