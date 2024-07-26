let sesion = document.getElementsByClassName("sesion");
function resaltar() {
    sesion[0].classList.toggle("resaltar");
}
sesion[0].addEventListener("click", resaltar);