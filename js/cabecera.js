function anchoDocumento() {
    anchoVentana = window.innerWidth;
}
function menu() {
    let mn = document.getElementById("menu");
    function moverMenu(e) {
        let menuMovil = document.getElementById("menuMovil");
        if (!menuMovil.classList.contains("visibilidad"))
            menuMovil.classList.add("visibilidad");
        else
            menuMovil.classList.remove("visibilidad");
    }
    mn.addEventListener("click", moverMenu);
}
function removerTransicion() {
    let anchoVentana = window.innerWidth;
    if (anchoVentana >= 1280) {
        menuMovil.classList.remove("transicion");
    } else {
        menuMovil.classList.add("transicion");
    }
}
function cambiarImagenes() {
    let instagram = document.getElementById("instagram");
    let linkedin = document.getElementById("linkedin");
}
function redimension() {
    anchoDocumento();
    removerTransicion();
}
function agregarEventos() {
    window.addEventListener("DOMContentLoaded", menu);
    window.addEventListener("resize", redimension);
}
agregarEventos();