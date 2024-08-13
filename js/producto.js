let ampliar = document.getElementById("ampliar");
let imagenAmpliada = document.getElementById("imagenAmpliada");
let sesion = document.getElementsByClassName("sesion");
let figuraSesion = document.getElementsByClassName("figura-sesion");
let estiloAmpliar = window.getComputedStyle(ampliar);
let displayAmpliar;
let altoImagen = document.getElementsByClassName("alto-imagen");
let altoImagenIzq = document.getElementById("altoImagenIzq");
let imagen = new Array(21);
imagen[0] = "Tamaño - Producto - 603x670 - 1.png";
imagen[1] = "Tamaño - Producto - 603x670 - 2.png";
imagen[2] = "Tamaño - Producto - 603x670 - 3.png";
imagen[3] = "Tamaño - Producto - 603x670 - 4.png";
imagen[4] = "Tamaño - Producto - 603x670 - 5.png";
imagen[5] = "Tamaño - Producto - 603x670 - 6.png";
imagen[6] = "Tamaño - Producto - 603x670 - 7.png";
imagen[7] = "Tamaño - Producto - 603x670 - 8.png";
imagen[8] = "Tamaño - Producto - 603x670 - 9.png";
imagen[9] = "Tamaño - Producto - 603x670 - 10.png";
imagen[10] = "Tamaño - Producto - 603x670 - 11.png";
imagen[11] = "Tamaño - Producto - 603x670 - 12.png";
imagen[12] = "Tamaño - Producto - 603x670 - 13.png";
imagen[13] = "Tamaño - Producto - 603x670 - 14.png";
imagen[14] = "Tamaño - Producto - 603x670 - 15.png";
imagen[15] = "Tamaño - Producto - 603x670 - 16.png";
imagen[16] = "Tamaño---Producto---603x670---gif---1.gif";
imagen[17] = "Tamaño---Producto---603x670---gif---2.gif";
imagen[18] = "Tamaño---Producto---603x670---gif---3.gif";
imagen[19] = "Tamaño---Producto---603x670---gif---4.gif";
imagen[20] = "Tamaño---Producto---603x670---gif---5.gif";
function intercambiarImagen(a) {
    if (a == "izq") {
        
    } else if (a == "der") {

    }
}
function asignarAltoImagen(a) {
    altoImagen[a].style.height = imagenAmpliada.offsetHeight + "px";
}
function eliminarResaltado(a) {
    figuraSesion[a].classList.remove("resaltar");
}
function resaltarUno(a) {
    eliminarResaltado(a);
    figuraSesion[a].classList.toggle("resaltar");
}
function ampliarImagen(a) {
    displayAmpliar = estiloAmpliar.display;
    if (displayAmpliar != "flex") {
        ampliar.style.display = "flex";
        imagenAmpliada.src = sesion[a].src;
    } else {
        ampliar.style.display = "none";
    }
}
for (let i = 0; i < figuraSesion.length; i++) {
    figuraSesion[i].addEventListener("touchstart", () => resaltarUno(i));
    figuraSesion[i].addEventListener("touchend", () => eliminarResaltado(i));
    figuraSesion[i].addEventListener("click", () => {
        ampliarImagen(i);
        for (let l = 0; l < altoImagen.length; l++) {
            asignarAltoImagen(0);
        }
    });
}
ampliar.addEventListener("click", () => ampliarImagen(0));