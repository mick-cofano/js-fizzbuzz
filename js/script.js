//FizzBuzz
//Scrivi un programma che stampi i numeri da 1 a 100,
//ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// --------- RAGIONAMENTO -----------
// Per i multipli di 3 stampare fizz, quindi i % 3
// Per i multipli di 5 stampare buzz, quindi i % 5
// Per i multipli sia di 3 che di 5 (15) stampare fizzbuzz, quindi i % 15 (3 x 5)


for (var i = 1; i <= 100; i++) {

    if(i % 3 == 0 && i % 5 == 0) {
        console.log('fizzbuzz'); // num sia multiplo di 3 che di 5, scriverò fizzbuzz
    } else if (i % 5 == 0) {
        console.log('buzz'); // num multiplo di 5, scriverò buzz
    } else if(i % 3 == 0){
        console.log('fizz'); // num multiplo di 3, scriverò fizz
    } else {
        console.log(i); // num multiplo ne di 3 ne di 5, scriverò il numero
    }
}
