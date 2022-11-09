/*
Crear una variable on emmagatzemar una llista (array) de números seguint la sèrie de Fibonacci 
i tenir-la en memòria. En acabar, mostrar la llista per pantalla separada per comes.
A partir de la llista anterior, crear una segona llista amb la divisió entre el número actual 
i l’anterior de la sèrie. Mostra un valor sota de l’altre a la pantalla. 
Escriu al final de la llista una variable de text amb què veus que passa amb el resultat de la divisió a mesura que creix la llista.
*/

/* Declaracions variables */
var h1 = document.getElementById("sequencia");
var p = document.getElementById("divisions");

var llista = [0, 1]; 
var llista2 = [];
var resultat = 0;

var max = prompt("Introdueix el número màxim de la sequència de Fibonacci");

while (max < 25 || max > 100) { // Si el número introduït és menor de 25 o major de 100, torna a demanar el número
    max = prompt("Introdueix el número màxim de la sequència de Fibonacci");
}

for (var i = 2; i < max; i++) { // Genera la sequència de Fibonacci
    llista[i] = llista[i - 1] + llista[i - 2];
}

for (var i = 0; i < llista.length; i++) { // Genera la segona llista amb la divisió entre el número actual i l'anterior de la sèrie
    if (i == (llista.length - 1)) {
        h1.innerHTML += llista[i] + "."; // Si és l'últim número de la llista, no posa coma
    } else {
        h1.innerHTML += llista[i] + ", "; // Si no és l'últim número de la llista, posa coma
    }
}

p.innerHTML += "<br>"; // Afegeix un salt de línia

for (var i = 1; i < llista.length; i++) { // Genera la segona llista amb la divisió entre el número actual i l'anterior de la sèrie
    resultat = llista[i] / llista[i - 1]; // Divisió entre el número actual i l'anterior de la sèrie
    llista2[i] = resultat; // Guarda el resultat a la segona llista

    p.innerHTML += "<div>" + llista[i] + " / " + llista[i - 1] + " = " + llista2[i] + "</div>"; // Mostra el resultat de la divisió
}