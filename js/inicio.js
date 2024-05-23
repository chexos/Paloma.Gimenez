let texto = document.getElementById("texto");
let mensaje = document.getElementById("mensaje");
let fila = document.getElementsByClassName("fila");
function ajustarValor() {
    mensaje.value = "";
}
mensaje.addEventListener("loaded", ajustarValor());
var filasTexto = mensaje.rows;
let f = mensaje.value.split("\n").length;
function ajustarFilas() {
    let filas = mensaje.value.split("\n").length;
    if (filas > 2) {
        mensaje.rows = filas;
    } else {
        mensaje.rows = 2;
    }
    let span = document.createElement("span");
    span.className = "fila";
    if (mensaje.rows > filasTexto) {
        filasTexto = mensaje.rows;
        for (var i = 1; i <= mensaje.rows; i++) {
            if (i > 0) {
                texto.appendChild(span);
            }
        }
    }
}
function cambiarPosicionFila() {
    for (var i = 1; i <= fila.length; i++) {
        fila[i - 1].style.top = 100 / mensaje.rows * i + "%";
    }
}
let articuloTexto = document.getElementById("articuloTexto");
var span = document.createElement("span");
span.style.visibility = "visible";
span.style.position = "absolute";
span.style.maxWidth = "100%";
span.style.fontFamily = "Hurme Semi Bold";
span.style.fontSize = window.getComputedStyle(document.getElementById("mensaje"), null).getPropertyValue('font-size');
//span.style.display = "none";
articuloTexto.appendChild(span);
function ultimoCaracter() {
    var ultimo = mensaje.value.lastIndexOf(" ");
    return ultimo + 1;
}
function removerDobleEspacioBlanco() {
    var textoDoble = mensaje.value;
    var textoReemplazado = textoDoble.replace(/ {2,}/g, " ");
    mensaje.value = textoReemplazado;
}
function generarSalto() {
    f = mensaje.value.split("\n").length;
    let altoDesplazamiento = mensaje.scrollHeight;
    let altoMensaje = mensaje.clientHeight;
    let anchoDesplazamiento = mensaje.scrollWidth;
    let anchoMensaje = mensaje.clientWidth;
    span.innerText = mensaje.value;
    console.log(span.offsetWidth);
    console.log(anchoMensaje);
    if (span.offsetWidth >= anchoMensaje) {
        var m2 = mensaje.value.slice(ultimoCaracter());
        var m = mensaje.value.slice(mensaje.length, ultimoCaracter());
        console.log(mensaje.value);
        mensaje.value = m + "\n" + m2;
        //mensaje.value = mensaje.value.replace(/\n/g, "\n");
        console.log(mensaje.value);
    }
    if (altoDesplazamiento > altoMensaje) {
        //mensaje.value += "\n";
        mensaje.style.height = altoDesplazamiento + 1 + "px";
    }
}
function entradaFilas() {
    removerDobleEspacioBlanco();
    generarSalto();
    ajustarFilas();
    cambiarPosicionFila();
}
texto.addEventListener("loaded", generarSalto);
mensaje.addEventListener("input", entradaFilas);
mensaje.addEventListener("loaded", entradaFilas());