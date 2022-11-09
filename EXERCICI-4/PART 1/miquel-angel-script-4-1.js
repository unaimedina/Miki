/*
    En una pàgina, canviar la imatge de pantalla passant el ratolí per sobre. 
    Necessites dues imatges diferents amb el mateix tamany. 
    Escriu les coordinades X i Y del ratolí mentre sigui sobre de les imatges.
    */

var img = document.getElementById("img");
var x = document.getElementById("x");
var y = document.getElementById("y");

img.onmouseout = function () {
    x.innerHTML = "<b>X:</b> ";
    y.innerHTML = "<b>Y:</b> ";
    img.src = "mono2.webp";
}

img.onmousemove = function () {
    x.innerHTML = "<b>X:</b> " + event.clientX;
    y.innerHTML = "<b>Y:</b> " + event.clientY;
}

