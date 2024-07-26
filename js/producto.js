let sesion = document.getElementsByClassName("sesion");
function eliminarResaltado(a) {
    for (var i = 0; i < sesion.length; i++) {
        if (i != a)
            sesion[i].classList.remove("resaltar");
    }
}
function resaltarUno() {
    eliminarResaltado(0);
    sesion[0].classList.toggle("resaltar");
}
sesion[0].addEventListener("click", resaltarUno);
function resaltarDos() {
    eliminarResaltado();
    sesion[1].classList.toggle("resaltar");
}
sesion[1].addEventListener("click", resaltarDos);
function resaltarTres() {
    eliminarResaltado();
    sesion[2].classList.toggle("resaltar");
}
sesion[2].addEventListener("click", resaltarTres);
function resaltarCuatro() {
    eliminarResaltado();
    sesion[3].classList.toggle("resaltar");
}
sesion[3].addEventListener("click", resaltarCuatro);
function resaltarCinco() {
    eliminarResaltado();
    sesion[4].classList.toggle("resaltar");
}
sesion[4].addEventListener("click", resaltarCinco);
function resaltarSeis() {
    eliminarResaltado();
    sesion[5].classList.toggle("resaltar");
}
sesion[5].addEventListener("click", resaltarSeis);
function resaltarSiete() {
    eliminarResaltado();
    sesion[6].classList.toggle("resaltar");
}
sesion[6].addEventListener("click", resaltarSiete);
function resaltarOcho() {
    eliminarResaltado();
    sesion[7].classList.toggle("resaltar");
}
sesion[7].addEventListener("click", resaltarOcho);
function resaltarNueve() {
    eliminarResaltado();
    sesion[8].classList.toggle("resaltar");
}
sesion[8].addEventListener("click", resaltarNueve);
function resaltarDiez() {
    eliminarResaltado();
    sesion[9].classList.toggle("resaltar");
}
sesion[9].addEventListener("click", resaltarDiez);
function resaltarOnce() {
    eliminarResaltado();
    sesion[10].classList.toggle("resaltar");
}
sesion[10].addEventListener("click", resaltarOnce);
function resaltarDoce() {
    eliminarResaltado();
    sesion[11].classList.toggle("resaltar");
}
sesion[11].addEventListener("click", resaltarDoce);
function resaltarTrece() {
    eliminarResaltado();
    sesion[12].classList.toggle("resaltar");
}
sesion[12].addEventListener("click", resaltarTrece);
function resaltarCatorce() {
    eliminarResaltado();
    sesion[13].classList.toggle("resaltar");
}
sesion[13].addEventListener("click", resaltarCatorce);
function resaltarQuince() {
    eliminarResaltado();
    sesion[14].classList.toggle("resaltar");
}
sesion[14].addEventListener("click", resaltarQuince);
function resaltarDeciseis() {
    eliminarResaltado();
    sesion[15].classList.toggle("resaltar");
}
sesion[15].addEventListener("click", resaltarDeciseis);/*
function resaltarUno() {
    sesion[0].classList.toggle("resaltar");
}
sesion[0].addEventListener("click", resaltar);
function resaltarUno() {
    sesion[0].classList.toggle("resaltar");
}
sesion[0].addEventListener("click", resaltar);*/