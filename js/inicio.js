let texto = document.getElementById("texto");
let mensaje = document.getElementById("mensaje");
let fila = document.getElementsByClassName("fila");
function ajustarValor() {
    mensaje.value = "";
}
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
        for (var i = 1; i <= filasTexto; i++) {
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
var spanAncho = document.createElement("span");
spanAncho.style.visibility = "visible";
spanAncho.style.position = "absolute";
spanAncho.style.maxWidth = "100%";
spanAncho.style.fontFamily = "Hurme Semi Bold";
spanAncho.style.color = "Gray"; 
//span.style.display = "none";
articuloTexto.appendChild(spanAncho);
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
    f = mensaje.value.split("\n").length;
    spanAncho.innerText = mensaje.value;
    console.log(spanAncho.offsetWidth);
    console.log(anchoMensaje);
    revisarAnchoAlto();
}
function revisarAnchoAlto() {
    if (spanAncho.offsetWidth >= anchoMensaje) {
        console.log(spanAncho.offsetWidth);
        console.log(anchoMensaje);
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
function tamanioLetra() {
    spanAncho.style.fontSize = window.getComputedStyle(document.getElementById("mensaje"), null).getPropertyValue('font-size');
}
let dividirMensaje;
function cambiarResolucion(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    tamanioLetra();
    anchoMensaje = mensaje.clientWidth;
    console.log(dividirMensaje);
    console.log(mensaje.value.split(" "));
    dividirMensaje = mensaje.value.split(" ");
    console.log(mensaje.value);
    console.log(mensaje.value.split(" "));
    ajustarValor();
    console.log(dividirMensaje.length);
    for (var i = 0; i < dividirMensaje.length; i++) {
        console.log(i);
        console.log(dividirMensaje[i]);
        if (!dividirMensaje[i].startsWith("\n") && i != dividirMensaje.length - 1) {
            console.log("sin salto");
            mensaje.value += dividirMensaje[i] + " ";
        } else if (i == dividirMensaje.length - 1) {
            console.log("última cadena");
            mensaje.value += dividirMensaje[i];
        } else if (dividirMensaje[i].startsWith("\n")) {
            console.log("con salto");
            mensaje.value += dividirMensaje[i].slice(1) + " ";
        }
        spanAncho.innerText = mensaje.value;
        revisarAnchoAlto();
        removerDobleEspacioBlanco();
    }
}
function entradaFilas() {
    tamanioLetra();
    removerDobleEspacioBlanco();
    generarSalto();
    ajustarFilas();
    cambiarPosicionFila();
}
mensaje.addEventListener("loaded", ajustarValor());
texto.addEventListener("loaded", generarSalto);
mensaje.addEventListener("input", entradaFilas);
mensaje.addEventListener("loaded", entradaFilas());
window.addEventListener("resize", cambiarResolucion);
//window.addEventListener("resize", entradaFilas);
/*
let formulario = document.getElementById("formulario");
formulario.addEventListener("loaded", function() {
    ajustarValor();
    cambiarPosicionFila();
    cambiarResolucion();
});*/