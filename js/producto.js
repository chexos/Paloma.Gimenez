let ampliar = document.getElementById("ampliar");
let imagenAmpliada = document.getElementById("imagenAmpliada");
let figuraSesion = document.getElementsByClassName("figura-sesion");
let estiloAmpliar = window.getComputedStyle(ampliar);
let displayAmpliar;
function eliminarResaltado(a) {
    figuraSesion[a].classList.remove("resaltar");
}
function resaltarUno(a) {
    eliminarResaltado(a);
    figuraSesion[a].classList.toggle("resaltar");
}
function ampliarImagen(a) {
    displayAmpliar = estiloAmpliar.display;
    console.log(displayAmpliar);
    if (displayAmpliar != "flex") {
        ampliar.style.display = "flex";
        imagenAmpliada.src = figuraSesion[a].src;
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