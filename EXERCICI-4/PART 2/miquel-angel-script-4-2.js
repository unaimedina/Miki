/*
En una altra pàgina, canviar el tamany de la imatge amb la roda del ratolí en increments de 5 píxels, 
amb un valor mínim de 200px i un màxim de 400px de manera que no se superin aquests valors. 
Escriu el tamany X i Y del ratolí mentre aquest canvia.
*/

/* Declaracions de variables */
var img = document.getElementById("img");
var x = document.getElementById("x");
var y = document.getElementById("y");

img.onmouseout = function () { // Si el ratolí surt de la imatge, es posa a 0 els valors de X i Y
    x.innerHTML = "<b>X:</b> ";  
    y.innerHTML = "<b>Y:</b> ";
}

img.onmousemove = function () { // Quan el ratolí està sobre la imatge, es mostra el valor de X i Y
    x.innerHTML = "<b>X:</b> " + event.clientX;
    y.innerHTML = "<b>Y:</b> " + event.clientY;
}

img.onwheel = function () { // Quan es mou la roda del ratolí, es canvia el tamany de la imatge
    if (event.deltaY < 0) { // Si la roda del ratolí va cap amunt, la imatge augmenta de tamany
        img.width += 5; 
        img.height += 5;
    } else { // Si la roda del ratolí va cap avall, la imatge disminueix de tamany
        img.width -= 5;
        img.height -= 5;
    }
    if (img.width < 200) { // Si la imatge és menor de 200px, es fixa a 200px
        img.width = 200;
        img.height = 200;
    }
    if (img.width > 400) { // Si la imatge és major de 400px, es fixa a 400px
        img.width = 400;
        img.height = 400;
    }
}