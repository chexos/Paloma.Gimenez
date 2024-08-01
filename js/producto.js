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
sesion[0].addEventListener("touchstart", resaltarUno);
sesion[0].addEventListener("touchend", eliminarResaltado);
function resaltarDos() {
    eliminarResaltado(1);
    sesion[1].classList.toggle("resaltar");
}
sesion[1].addEventListener("touchstart", resaltarDos);
sesion[1].addEventListener("touchend", eliminarResaltado);
function resaltarTres() {
    eliminarResaltado(2);
    sesion[2].classList.toggle("resaltar");
}
sesion[2].addEventListener("touchstart", resaltarTres);
sesion[2].addEventListener("touchend", eliminarResaltado);
function resaltarCuatro() {
    eliminarResaltado(3);
    sesion[3].classList.toggle("resaltar");
}
sesion[3].addEventListener("touchstart", resaltarCuatro);
sesion[3].addEventListener("touchend", eliminarResaltado);
function resaltarCinco() {
    eliminarResaltado(4);
    sesion[4].classList.toggle("resaltar");
}
sesion[4].addEventListener("touchstart", resaltarCinco);
sesion[4].addEventListener("touchend", eliminarResaltado);
function resaltarSeis() {
    eliminarResaltado(5);
    sesion[5].classList.toggle("resaltar");
}
sesion[5].addEventListener("touchstart", resaltarSeis);
sesion[5].addEventListener("touchend", eliminarResaltado);
function resaltarSiete() {
    eliminarResaltado(6);
    sesion[6].classList.toggle("resaltar");
}
sesion[6].addEventListener("touchstart", resaltarSiete);
sesion[6].addEventListener("touchend", eliminarResaltado);
function resaltarOcho() {
    eliminarResaltado(7);
    sesion[7].classList.toggle("resaltar");
}
sesion[7].addEventListener("touchstart", resaltarOcho);
sesion[7].addEventListener("touchend", eliminarResaltado);
function resaltarNueve() {
    eliminarResaltado(8);
    sesion[8].classList.toggle("resaltar");
}
sesion[8].addEventListener("touchstart", resaltarNueve);
sesion[8].addEventListener("touchend", eliminarResaltado);
function resaltarDiez() {
    eliminarResaltado(9);
    sesion[9].classList.toggle("resaltar");
}
sesion[9].addEventListener("touchstart", resaltarDiez);
sesion[9].addEventListener("touchend", eliminarResaltado);
function resaltarOnce() {
    eliminarResaltado(10);
    sesion[10].classList.toggle("resaltar");
}
sesion[10].addEventListener("touchstart", resaltarOnce);
sesion[10].addEventListener("touchend", eliminarResaltado);
function resaltarDoce() {
    eliminarResaltado(11);
    sesion[11].classList.toggle("resaltar");
}
sesion[11].addEventListener("touchstart", resaltarDoce);
sesion[11].addEventListener("touchend", eliminarResaltado);
function resaltarTrece() {
    eliminarResaltado(12);
    sesion[12].classList.toggle("resaltar");
}
sesion[12].addEventListener("touchstart", resaltarTrece);
sesion[12].addEventListener("touchend", eliminarResaltado);
function resaltarCatorce() {
    eliminarResaltado(13);
    sesion[13].classList.toggle("resaltar");
}
sesion[13].addEventListener("touchstart", resaltarCatorce);
sesion[13].addEventListener("touchend", eliminarResaltado);
function resaltarQuince() {
    eliminarResaltado(14);
    sesion[14].classList.toggle("resaltar");
}
sesion[14].addEventListener("touchstart", resaltarQuince);
sesion[14].addEventListener("touchend", eliminarResaltado);
function resaltarDeciseis() {
    eliminarResaltado(15);
    sesion[15].classList.toggle("resaltar");
}
sesion[15].addEventListener("touchstart", resaltarDeciseis);
sesion[15].addEventListener("touchend", eliminarResaltado);/*
function resaltarUno() {
    sesion[0].classList.toggle("resaltar");
}
sesion[0].addEventListener("click", resaltar);
function resaltarUno() {
    sesion[0].classList.toggle("resaltar");
}
sesion[0].addEventListener("click", resaltar);*/