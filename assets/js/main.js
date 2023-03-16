/*Palindroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.  */








//controllo se la/e parola/e inserite sono palindrome con una funzione




// creo una variabile con contenuto vuoto'' in modo che quello che ci verrà inserito risulti una stringa

/* let backwords = ''; */

// creo il ciclo for che leggerà la parola al contrario
// i è uguale alla lunghezza della parola inserita - 1 (perchè conta da zero)
// la condizione è che "i" arrivi alla posizione 0 partendo dll'ultima, ovvero la prima lettera della parola, per farlo uso un decremento 

/* for (let i = word.length - 1; i >= 0; i--) { */

    //la var backword con contenuto '' verrà riempita con le lettere della parola inserita al contrario fino alla posizione 0 (+= in modo che le lettere si sommino e non si sostituiscano)
/*     backwords += word[i];
    
    
}
console.log(backwords)
 */

// ora trasporto questo ciclo dentro una funzione



function palindromeReader(word){
    let backwords = '';

    for (let i = word.length - 1; i >= 0; i--) {
       
        backwords += word[i];
       
    }
    console.log(backwords)
    if (backwords === word) {
        console.log('é palindroma')    
       return true
    }

    else{
        console.log('non è palindroma')
        return false
    
    }
    
    
}

//chiedo all'utente la parola e la stampo in console

const insertWord = prompt('scrivi una parola');
console.log(`la tua parola è ${insertWord}`)

palindromeReader(insertWord) 










//pari o dispari

//chiedo all'utente pari o dispari

function evenOdd(evenOrOdd){
    
    if (evenOrOdd === 'pari' || evenOrOdd === 'dispari'){
        console.log(true)
        return true
    }
    alert('devi scrivere pari o dispari')
    return false
}

const ask = prompt('pari o dispari?')

if (evenOdd(ask)){
    console.log('ok')
}
else{
    console.log('scegli pari o dispari')
}

console.log(ask)

//chiedo un numero compreso tra 1 e 5 all'utente con un prompt



function isbetween (number){

    if (number <= 5 && number >= 1) {
        console.log(number)
        return true
    }
        
    return false
      
     
}

//chiedo il numero 

 let userNumber = Number(prompt('scrivi un numero compreso tra 1 e 5'))


 if (isbetween(userNumber)){
    console.log('ok è compreso')
 }
 else{
    userNumber
    console.log('non è compreso')
 }

//creo una funzione per generare un numero da 1 a 5

 function getRandomInteger(min, max){
    return Number(Math.floor(Math.random() * (max - min +1) + min));

    
}



const randNumber = getRandomInteger(1, 5)
console.log(randNumber);


// faccio l'addizione dei due numeri e con una funzione verifico se il numero è pari o dispari

const h1El = document.querySelector('h1')

const numberSum = userNumber + randNumber;
console.log(numberSum)


function isEven(numb){
    if (numb % 2 == 0) {
        return 'pari'
    }

    return false
}

function isOdd(numb){
    if (numb % 2 != 0) {
        return 'dispari'
    }

    return false
}



if(isEven(numberSum) === ask || isOdd(numberSum) === ask){
    console.log("hai vinto!!")
     h1El.innerHTML = "Hai Vinto!!" 
    

}
else{
    console.log("hai perso")
     h1El.innerHTML = "Hai Perso!!!!" 
    
}


//comunico la vittoria opp la socnfitta
