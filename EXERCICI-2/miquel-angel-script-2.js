/*
        Demana a l’usuari quants nombres aleatoris vol (màxim 20) entre el número 1 i número 99. El programa no pot continuar si el nombre de valors no està dins del rang (1 a 20). A la llista final no es pot repetir cap número.
        Has de tenir una llista dels números que ja tens i mirar que no es repeteixin. 
        Si el número està a la llista, no val i tornes a buscar un número.
        Si el número no està a la llista, el pots posar a la llista
        Guarda els números en un array que generes
        Quan has acabat, mostra el llistat per pantalla separat per comes.
        */

var llista = []; // Llista de números aleatoris
var numero = 0;
var repetit = false;
var numAleatori = 0;

var p = document.getElementById("aleatoris"); // Element on es mostrarà la llista de números aleatoris

do {
    numero = parseInt(prompt("Quants nombres aleatoris vols (màxim 20) entre el número 1 i número 99?")); // Demana a l'usuari quants nombres aleatoris vol
} while (numero < 1 || numero > 20); // El programa no pot continuar si el nombre de valors no està dins del rang (1 a 20)

for (var i = 0; i < numero; i++) { // Bucle per generar els números aleatoris
    do {
        repetit = false; // Reinicia la variable repetit
        numAleatori = Math.floor(Math.random() * 99) + 1; // Genera un número aleatori entre 1 i 99

        for (var j = 0; j < llista.length; j++) { // Bucle per comprovar si el número aleatori ja està a la llista
            if (numAleatori == llista[j]) { // Si el número aleatori ja està a la llista
                repetit = true; // Si el número aleatori ja està a la llista, la variable repetit passa a ser true
            }
        }
    } while (repetit == true); // Si el número aleatori ja està a la llista, torna a generar un número aleatori

    llista[i] = numAleatori; // Si el número aleatori no està a la llista, el posa a la llista
}

for (var i = 0; i < llista.length; i++) { // Bucle per mostrar la llista de números aleatoris
    if (i == (llista.length - 1)) {
        p.innerHTML += llista[i] + "."; // Si és l'últim número de la llista, no posa la coma
    } else {
        p.innerHTML += llista[i] + ", ";  // Si no és l'últim número de la llista, posa la coma
    }
}