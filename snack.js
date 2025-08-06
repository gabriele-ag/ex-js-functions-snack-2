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
            // console.log("Tempo scaduto!")
        }, tempo)
    }
}

const timer1 = creaTimer(3000)
timer1()


// Snack 5

function stampaOgniSecondo(time) {
    let contatore = 0
    
    const messaggio = setInterval(() => {
        contatore++
        // console.log("Messaggio stampato")

        if (contatore === 5) {
                clearInterval(messaggio)
                // console.log("Messaggio terminato")
            }

        }, time)
    
    return messaggio
    
}

console.log(stampaOgniSecondo(1000))


// Snack 6

function creaContatoreAutomatico(time) {

    let contatore = 0

    return function intervallo() {
        const messaggio = setInterval(() => {
            contatore++
            // console.log(contatore)

            if (contatore === 5) {
                clearInterval(messaggio)
                // console.log("Fine del conteggio")
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
        // console.log(msg)
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
        // console.log(conteggio)
        if (conteggio === 0) {
            clearInterval(intervallo)
            // console.log("Tempo scaduto!")
        }
        }, 1000)
     return
}

contoAllaRovescia(5)


// Snack 9

// Creare una funzione che esegue una sequenza di operazioni con ritardi
// Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

// Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.

const operazione = [() => console.log("Operazione 1"), () => console.log("Operazione 2"), () => console.log("Operazione 3")]

function sequenzaOperazioni(array, time) {
    let index = 0
    
        const intervallo = setInterval(() => {
        array[index]()
        index++
        if (index === array.length) {
            clearInterval(intervallo)
            console.log("Fine operazione")
        }
        }, time)
}

sequenzaOperazioni(operazione, 2000);