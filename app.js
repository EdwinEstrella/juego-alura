let numeroSecreto = 0;
let intentos = 0; // Inicializa el contador de intentos en 0
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let maximoIntentos = 3 // Número inicial de intentos

// asignar cualquier texto a un elemento
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


// Verificar intentos que el usuario ha iniciado
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Bravo acertarte en ${intentos + 1} ${(intentos + 1 === 1) ? "intento" : "intentos"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', `el numero es menor, ${(maximoIntentos - (intentos + 1) === 1) ? "queda" : "quedan"}  ${maximoIntentos - (intentos + 1)} ${(maximoIntentos - (intentos + 1) === 1) ? "intento" : "intentos"}`);
        } else {
            asignarTextoElemento('p', `el numero es mayor, ${(maximoIntentos - (intentos + 1) === 1) ? "queda" : "quedan"} ${maximoIntentos - (intentos + 1)} ${(maximoIntentos - (intentos + 1) === 1) ? "intento" : "intentos"}`);
        }
        intentos++;

        // poner limite de intentos para el usuario
        if (intentos >= maximoIntentos) {
            asignarTextoElemento('p', `¡Has alcanzado el límite de intentos! El número secreto era ${numeroSecreto}.`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } 
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
    document.getElementById('valorUsuario').value = '';
}


// Funcion para generar un numero secreto
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    // si ya sorteamos todos los numeros
    if (listaDeNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', `Ya alcanzansaste el numero maximo de ${intentos}`)
    } else {

        // Si el numero esta en la lista
        if (listaDeNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaDeNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
}
// Estas son las condiciones iniciales para empezar desde 0
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Escoje un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 0; // Reiniciar intentos a 0 al comenzar el juego
}

function intentosMaximos() {
    maximoIntentos = 6
}
// Funcion para reiniciar el juego desde 0
function reiniciarJuego() {
    // limpier la caja
    limpiarCaja();
    // indicar mensaje de intervalos de numeros
    condicionesIniciales();
    // generar el numero aleatorio
    // dejar el boton de nuevo juego desabilidato
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    // iniciar el numero de intentos

}
condicionesIniciales();