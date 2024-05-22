let mensaje = document.getElementById("mensaje");
function ajustarValor() {
    mensaje.value = "";
}
mensaje.addEventListener("loaded", ajustarValor());
function ajustarFilas() {
    let filas = mensaje.value.split("\n").length;
    if (filas > 2) {
        mensaje.rows = filas;
    } else {
        mensaje.rows = 2;
    }
}
mensaje.addEventListener("input", ajustarFilas);