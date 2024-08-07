let ampliar = document.getElementById("ampliar");
let imagenAmpliada = document.getElementById("imagenAmpliada");
let sesion = document.getElementsByClassName("sesion");
let estiloAmpliar = window.getComputedStyle(ampliar);
let displayAmpliar;
function eliminarResaltado(a) {
    sesion[a].classList.remove("resaltar");
}
function resaltarUno(a) {
    eliminarResaltado(a);
    sesion[a].classList.toggle("resaltar");
}
function ampliarImagen(a) {
    displayAmpliar = estiloAmpliar.display;
    console.log(displayAmpliar);
    if (displayAmpliar != "flex") {
        ampliar.style.display = "flex";
        imagenAmpliada.src = sesion[a].src;
    } else {
        ampliar.style.display = "none";
    }
}
for (let i = 0; i < sesion.length; i++) {
    sesion[i].addEventListener("touchstart", () => resaltarUno(i));
    sesion[i].addEventListener("touchend", () => eliminarResaltado(i));
    sesion[i].addEventListener("click", () => ampliarImagen(i));
}