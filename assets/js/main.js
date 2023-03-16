/*Palindroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.  */




//chiedo all'utente la parola e la stampo in console

const word = prompt('scrivi una parola');
console.log(`la tua parola è ${word}`)

//controllo se la/e parola/e inserite sono palindrome con una funzione

// creo il ciclo for che leggerà la parola al contrario
// i è uguale alla lunghezza della parola inserita - 1 (perchè conta da zero)
// la condizione è che "i" arrivi alla posizione 0 partendo dll'ultima, ovvero la prima lettera della parola, per farlo uso un decremento 
let backwords = '';

for (let i = word.length - 1; i >= 0; i--) {
    backwords += word[i];
    
    
}
console.log(backwords)