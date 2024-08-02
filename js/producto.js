let sesion = document.getElementsByClassName("sesion");
function eliminarResaltado(a) {
    sesion[a].classList.remove("resaltar");
}
function resaltarUno(a) {
    eliminarResaltado(a);
    sesion[a].classList.toggle("resaltar");
}
function ampliarImagen(a) {

}
for (let i = 0; i < sesion.length; i++) {
    sesion[i].addEventListener("touchstart", () => resaltarUno(i));
    sesion[i].addEventListener("touchend", () => eliminarResaltado(i));
    
}