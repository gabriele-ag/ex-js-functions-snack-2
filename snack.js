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

function stampaOgniSecondo(time) {

    let contatore = 0

    return function intervallo() {
        const messaggio = setInterval(() => {
            contatore++
            console.log("Messaggio stampato")

            if (contatore === 5) {
                clearInterval(messaggio)
                console.log("Messaggio terminato")
            }

        }, time)

    }
}

const conteggio1 = stampaOgniSecondo(1000)
conteggio1()