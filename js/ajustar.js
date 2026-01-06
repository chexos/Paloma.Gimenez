function resize() {
    let ancho = window.innerWidth;
    let header = document.getElementById("header");
    header.style.height = 149 * ancho / 1920 + "px";
    let headerRedes = document.getElementsByClassName("header-redes");
    for (var i = 0; i < headerRedes.length; i++) {
        headerRedes[i].style.height = 60 * ancho / 1920 + "px";
    }
    let logo = document.getElementById("logo");
    logo.style.height = 120 * ancho / 1920 + "px";
    let menuMovil = document.getElementById("menu-movil");
    if (ancho < 1280)
        menuMovil.style.height = 20 * ancho / 360 + "px";
    let enlacesMenuMovil = document.getElementsByClassName("menu-movil");
    if (ancho < 1280) {
        for (var i = 0; i < enlacesMenuMovil.length; i++) {
            enlacesMenuMovil[i].style.fontSize = 7 * ancho / 360 + "pt";
            if (i == 0)
                enlacesMenuMovil[i].style.marginTop = 17 * ancho / 360 + "px";
            enlacesMenuMovil[i].style.marginBottom = 17 * ancho / 360 + "px";
        }
    } else if (ancho >= 1280) {
        for (var i = 0; i < enlacesMenuMovil.length; i++) {
            enlacesMenuMovil[i].style.fontSize = 20 * ancho / 1920 + "pt";
            enlacesMenuMovil[i].style.margin = 0 + "px";
        }
    }
    let principal = document.getElementById("principal");
    principal.style.marginTop = 149 * ancho / 1920 + "px";
    let circulos = document.getElementById("circulos");
    circulos.style.gap = 5 * ancho / 360 + "px";
    let botonesCarrusel = document.getElementsByClassName("btn-carrusel");
    for (var i = 0; i < botonesCarrusel.length; i++) {
        botonesCarrusel[i].style.height = 6.5 * ancho / 360 + "px";
    }
    let marcar = document.getElementById("marcar");
    marcar.style.fontSize = 86 * ancho / 1920 + "pt";
    let un = document.getElementById("un");
    un.style.fontSize = 36 * ancho / 1920 + "pt";
    un.style.marginTop = 38 * ancho / 1920 + "px";
    un.style.marginLeft = 25 * ancho / 1920 + "px";
    let estilo = document.getElementById("estilo");
    estilo.style.fontSize = 50 * ancho / 1920 + "pt";
    estilo.style.marginLeft = 235 * ancho / 1920 + "px";
    let parrafoIzquierda = document.getElementById("parrafo-izquierda");
    let parrafoDerecha = document.getElementById("parrafo-derecha");
    parrafoIzquierda.style.fontSize = 9 * ancho / 360 + "pt";
    parrafoDerecha.style.fontSize = 6.2 * ancho / 360 + "pt";
}
window.addEventListener("resize", resize);
document.addEventListener("DOMContentLoaded", resize);