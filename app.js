let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;


// asignar cualquier texto a un elemento
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
// console.log(numeroSecreto)
// Declaracion de funcion
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Bravo acertarte en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', `el numero es menor`);
        } else {
            asignarTextoElemento('p', 'el numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
    document.getElementById('valorUsuario').value = '';
}
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
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Escoje un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
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