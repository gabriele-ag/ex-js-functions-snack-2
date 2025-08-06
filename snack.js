// Snack 1

function somma(num1, num2) {
    let totale = num1 + num2
    return totale
}

console.log(somma(2,3))


// Snack 2

const quadrato = (num) => num * num

console.log(quadrato(5))


// Snack 3

const sottrazione = (num1, num2) => num1 - num2
const moltiplicazione = (num1, num2) => num1 * num2 

function eseguiOperazione(num1, num2, callback) {
    const operazione = callback(num1, num2)
    return operazione
}

// oppure

const eseguiOperazione2 = (num1, num2, callback) => callback(num1, num2)


console.log(eseguiOperazione(6,8, moltiplicazione))


// Snack 4

function creaTimer(tempo) {
    return function conteggio() {
        setTimeout(() => {
            console.log("Tempo scaduto!")
        }, tempo)
    }
}

const timer1 = creaTimer(3000)
timer1()


// Snack 5

function stampaOgniSecondo(msg) {
    let contatore = 0
    
    const intervallo = setInterval(() => {
        contatore++
        console.log(msg)

        if (contatore === 5) {
                clearInterval(intervallo)
                console.log("Messaggio terminato")
            }

        }, 1000)
    
    return intervallo
    
}

console.log(stampaOgniSecondo("ciao"))


// Snack 6

function creaContatoreAutomatico(time) {

    let contatore = 0

    return function intervallo() {
        const messaggio = setInterval(() => {
            contatore++
            console.log(contatore)

            if (contatore === 5) {
                clearInterval(messaggio)
                console.log("Fine del conteggio")
            }

        }, time)

    }
}

const conteggio1 = creaContatoreAutomatico(1000)
conteggio1()


// Snack 7


function eseguiEferma(msg, tempoavvio, tempostop) {
    let conteggio = tempoavvio
    const intervallo = setInterval(() => {
        conteggio--
        console.log(msg)
        if (conteggio === tempostop) {
            clearInterval(intervallo)
        }
        }, 1000)
     return
}

eseguiEferma("ciao", 5, 0)


// Snack 8

function contoAllaRovescia(numero) {
    let conteggio = numero
    const intervallo = setInterval(() => {
        conteggio--
        console.log(conteggio)
        if (conteggio === 0) {
            clearInterval(intervallo)
            console.log("Tempo scaduto!")
        }
        }, 1000)
     return
}

contoAllaRovescia(5)


// Snack 9


// const operazione = [() => console.log("Operazione 1"), () => console.log("Operazione 2"), () => console.log("Operazione 3")]

// function sequenzaOperazioni(array, time) {
//     let index = 0
    
//         const intervallo = setInterval(() => {
//         array[index]()
//         index++
//         if (index === array.length) {
//             clearInterval(intervallo)
//             console.log("Fine operazione")
//         }
//         }, time)
// }

// sequenzaOperazioni(operazione, 2000);

// esecuzione esatta

const array = [() => console.log("Operazione 1"), () => console.log("Operazione 2"), () => console.log("Operazione 3")]

function sequenzaOperazioni(operazioni, intervallo) {
    operazioni.forEach((curOperazione, index) => {
        setTimeout(() => {
            curOperazione()
        }, intervallo * index)
    });
}

sequenzaOperazioni(array, 2000)


// Snack 10

// Creare un throttler per limitare l’esecuzione di una funzione
// Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

// Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.


function creaThrottler(callback, limite) {
    let ultimaEsecuzione = 0;

    return function (...args) {
    const ora = Date.now();
    if (ora - ultimaEsecuzione >= limite) {
        ultimaEsecuzione = ora;
        callback(...args)
    } else {
        console.log("impossibile eseguire")
    }
}
}

const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);

throttledLog(); // ✅ "Eseguito!"
throttledLog(); // ❌ Ignorato (chiamato troppo presto)
setTimeout(throttledLog, 2500); // ✅ "Eseguito!" (dopo 2.5 secondi)





