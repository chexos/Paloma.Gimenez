function anchoDocumento() {
    anchoVentana = window.innerWidth;
}
function mn() {
    let menu = document.getElementById("menu");
    function moverMenu(e) {
        let menuMovil = document.getElementById("menuMovil");
        if (!menuMovil.classList.contains("visibilidad"))
            menuMovil.classList.add("visibilidad");
        else
            menuMovil.classList.remove("visibilidad");
    }
    menu.addEventListener("click", moverMenu);
}
function removerTransicion() {
    let anchoVentana = window.innerWidth;
    if (anchoVentana >= 1280) {
        menuMovil.classList.remove("transicion");
    } else {
        menuMovil.classList.add("transicion");
    }
}
function funcionesRedimension() {
    anchoDocumento();
    removerTransicion();
}
function agregarEventos() {
    window.addEventListener("DOMContentLoaded", mn);
    window.addEventListener("resize", funcionesRedimension);
}
agregarEventos();