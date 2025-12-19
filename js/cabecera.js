function anchoDocumento() {
    anchoVentana = window.innerWidth;
}
function menu() {
    let mn = document.getElementById("menu");
    function moverMenu(e) {
        let menuMovil = document.getElementById("menuMovil");
        if (!menuMovil.classList.contains("transicion")) {
            menuMovil.classList.add("transicion");
        }
        if (!menuMovil.classList.contains("invisibilidad")) {
            menuMovil.classList.add("invisibilidad");
        }
        else {
            menuMovil.classList.remove("invisibilidad");
        }
    }
    mn.addEventListener("click", moverMenu);
}
function removerTransicion() {
    let anchoVentana = window.innerWidth;
    console.log(anchoVentana);
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