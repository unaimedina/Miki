/*
        L’usuari ha d’endevinar el número que “pensa” la màquina. La pàgina HTML ha de tenir els següents elements. 
        Una finestra de prompt per tal que l’usuari posi el número.
        Un botó de nova partida. Al iniciar la partida, el programa guarda un número entre 0 i 99 que l’usuari ha d’averiguar. 
        Cada cop que l’usuari entra un número, el programa li ha de dir si el número és major, menor o ha encertat, i espera un nou número.
        El programa retorna per pantalla:
        el missatge si el valor que ha entrat l’usuari és major, menor o igual (guanya la partida aleshores).
        quantes jugades porta fetes.
        La pàgina ha d’endevinar el número que ha pensat l’usuari, entre 0 i 99. La pàgina HTML ha de tenir els següents elements.
        Tres botons de joc: Major, menor i has endevinat.
        Un botó de nova partida.
        El programa dona un número a l’atzar inicial i a partir de la informació que li dona l’usuari, ha d’acotar l’interval numèric on està el número a trobar i proposar un nou número a l’usuari.
        El programa ha de mostrar per pantalla
        El número que creu que l’usuari ha pensat
        Quantes jugades porta fetes.
*/

var numero;
var numAleatori = 0;
var intents = 0;
var jugades = 0;
var acertat = false;
var texte = "Introdueix un numero entre el 0 i el 99"; // Text que apareix al prompt

var p = document.getElementById("content"); // Element on es mostra el resultat
var nume = document.getElementById("numero"); // Element on es mostra el resultat

function novaPartida() {
    numAleatori = Math.floor(Math.random() * 99) + 1; // Genera un numero aleatori entre 1 i 99
    intents = 0;                                  // Reinicia els intents
    numero = null;                                // Reinicia el numero
    comprovar();                                 // Comprova el numero
} 

function major() { 
    intents++; // Suma un intent
    nume.innerHTML = numero; // Mostra el numero
    p.innerHTML = "El número que he pensat és major."; // Mostra el missatge
}

function suma() {
    numero = numero + 1; // Suma 1 al numero
    nume.innerHTML = numero; // Mostra el numero
}

function resta() {
    numero = numero - 1; // Resta 1 al numero
    nume.innerHTML = numero; // Mostra el numero
}

function menor() {
    intents++; // Suma un intent
    nume.innerHTML = numero; // Mostra el numero
    p.innerHTML = "El número que he pensat és menor."; // Mostra el missatge
}

function hasEndevinat() {
    jugades++; // Suma una jugada
    p.innerHTML = "Has endevinat el número que he pensat, que és " + numero + ".<br>"; // Mostra el missatge
    p.innerHTML += "Has fet " + intents + " intents.<br>"; // Mostra els intents
    p.innerHTML += "Has jugat " + jugades + " vegades."; // Mostra les jugades
}

function comprovar() {
    if (numero == null) { // Si el numero es null
        numero = parseInt(prompt(texte)); // Demana un numero
    }
    if (numero < numAleatori) { 
        major(); // Si el numero es menor que el numero aleatori, mostra el missatge
    } else if (numero > numAleatori) {
        menor(); // Si el numero es major que el numero aleatori, mostra el missatge
    } else {
        hasEndevinat(); // Si el numero es igual que el numero aleatori, mostra el missatge
    }
}

novaPartida(); // Inicia la partida