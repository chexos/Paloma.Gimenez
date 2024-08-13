let ampliar = document.getElementById("ampliar");
let imagenAmpliada = document.getElementById("imagenAmpliada");
let sesion = document.getElementsByClassName("sesion");
let figuraSesion = document.getElementsByClassName("figura-sesion");
let estiloAmpliar = window.getComputedStyle(ampliar);
let displayAmpliar;
let altoImagen = document.getElementById("altoImagen");
function asignarAltoImagen() {
    console.log(imagenAmpliada.offsetHeight);
    altoImagen.style.height = imagenAmpliada.offsetHeight;
}
window.addEventListener("load", asignarAltoImagen);
window.addEventListener("resize", asignarAltoImagen);
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
    figuraSesion[i].addEventListener("click", () => ampliarImagen(i));
}
ampliar.addEventListener("click", () => ampliarImagen(0));