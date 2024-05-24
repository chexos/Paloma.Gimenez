let texto = document.getElementById("texto");
let mensaje = document.getElementById("mensaje");
let fila = document.getElementsByClassName("fila");
function ajustarValor() {
    mensaje.value = "";
}
mensaje.addEventListener("loaded", ajustarValor());
var filasTexto = mensaje.rows;
let f = mensaje.value.split("\n").length;
let filas;
let spans = document.getElementsByClassName("fila");
function ajustarFilas() {
    filas = mensaje.value.split("\n").length;
    if (f[filas] == "") {
        filas--;
        mensaje.style.height *= filas / (filas + 1) + "px";
    }
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
    } else if (mensaje.rows < filasTexto) {
        filasTexto--;
        spans[spans.length - 1].parentNode.removeChild(spans[spans.length - 1]);
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
span.style.color = "Gray";
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
let altoDesplazamiento = mensaje.scrollHeight;
let altoMensaje = mensaje.offsetHeight;
let anchoDesplazamiento = mensaje.scrollWidth;
let anchoMensaje = mensaje.clientWidth;
var m2;
var m;
function generarSalto() {
    span.style.fontSize = window.getComputedStyle(document.getElementById("mensaje"), null).getPropertyValue('font-size');
    f = mensaje.value.split("\n").length;
    span.innerText = mensaje.value;
    console.log(span.offsetWidth);
    console.log(anchoMensaje);
    if (span.offsetWidth >= anchoMensaje) {
        m2 = mensaje.value.slice(ultimoCaracter());
        m = mensaje.value.slice(mensaje.length, ultimoCaracter());
        console.log(mensaje.value);
        mensaje.value = m + "\n" + m2;
        console.log(mensaje.value);
    }
    if (altoDesplazamiento > altoMensaje) {
        altoMensaje = mensaje.offsetHeight;
        mensaje.style.height = altoMensaje;
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
window.addEventListener("resize", entradaFilas);