let carrusel = document.getElementById("carrusel");
let imagenCarrusel = document.getElementsByClassName("imagen-carrusel");
let espacios = document.getElementsByClassName("boton-seleccionado");
let imagenesCarrusel = new Array(20);
imagenCarrusel[0] = "./imagenes/Tamaño-inicio-1920x1080-1.png";
imagenCarrusel[1] = "./imagenes/Tamaño-inicio-1920x1080-2.png";
imagenCarrusel[2] = "./imagenes/Tamaño-inicio-1920x1080-3.png";
imagenCarrusel[3] = "./imagenes/Tamaño-inicio-1920x1080-4.png";
imagenCarrusel[4] = "./imagenes/Tamaño-inicio-1920x1080-5.png";
imagenCarrusel[5] = "./imagenes/Tamaño-inicio-1920x1080-6.png";
imagenCarrusel[6] = "./imagenes/Tamaño-inicio-1920x1080-7.png";
imagenCarrusel[7] = "./imagenes/Tamaño-inicio-1920x1080-8.png";
imagenCarrusel[8] = "./imagenes/Tamaño-inicio-1920x1080-9.png";
function seleccionarEspacio(a) {
    function verificarEspacio(b) {
        if (b == 0) {
            carrusel.classList.add();
        }
    }
    for (var i = 0; i <= espacios.length; i++) {
        espacios.addEventListener("click", verificarEspacio(i));
    }
}
function cambiarCarrusel() {
    for (var e = 0; e < imagenCarrusel; e++) {
        imagenCarrusel[b];
    }
    for (var e = 0; e < espacios; e++) {
        espacios[e].addEventListener("click", seleccionarEspacio(e));
    }
}
function moverCarrusel() {

}
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
let altoDesplazamiento;
let altoMensaje = mensaje.scrollHeight + 1;
let caja = document.getElementById("caja");
function ajustarAltoMensaje() {
    altoMensaje = caja.offsetHeight + 1;
    mensaje.style.height = altoMensaje + "px";
}
function ajustarAlto() {
    console.log("Input changed");
    caja.innerText = mensaje.value;
    if (altoMensaje < mensaje.scrollHeight + 1) {
        mensaje.rows += (mensaje.scrollHeight + 1) / altoMensaje;
        altoDesplazamiento = altoMensaje;
        ajustarAltoMensaje();
    } else if (caja.offsetHeight < mensaje.scrollHeight && mensaje.rows >= 3) {
        mensaje.rows--;
        ajustarAltoMensaje();
    }
    /* else if (altoMensaje == mensaje.scrollHeight + 1) {
        console.log(mensaje.rows);
        mensaje.rows--;
        console.log(mensaje.rows);
        altoMensaje = mensaje.scrollHeight + 1;
        //mensaje.style.height = altoMensaje + "px";
    }*/
    /*
    console.log(altoMensaje = mensaje.offsetHeight);
    console.log(altoMensaje);
    mensaje.style.height = "auto";
    altoDesplazamiento = mensaje.scrollHeight + 1;*/
}
function actualizarFilas() {
    filasTexto = mensaje.rows;
}
function ajustarFilas() {/*
    filas = mensaje.value.split("\n").length;
    if (mensaje.rows == 2) {
        mensaje.style.height *= filas / (filas + 1) + "px";
    }
    if (mensaje.rows < 2) {
        mensaje.rows = 2;
    }/* else {
        mensaje.rows = filas;
    }*/
    let span = document.createElement("span");
    span.className = "fila";
    if (mensaje.rows > 2) {
        if (filasTexto < mensaje.rows) {
            console.log("añadiendo un span");
            actualizarFilas();
            texto.appendChild(span);
        }
        /*
        for (var i = 1; i <= mensaje.rows; i++) {
            if (i < mensaje.rows) {
                console.log("añadiendo un span");
                texto.appendChild(span);
            }
        }*/
    } else if (mensaje.rows < filasTexto) {
        console.log("Eliminando filas");
        actualizarFilas();
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
spanAncho.style.whiteSpace = "pre-wrap";
spanAncho.style.display = "flex";
articuloTexto.appendChild(spanAncho);/*
function ultimoCaracter() {
    var ultimo = mensaje.value.lastIndexOf(" ");
    console.log(mensaje.value);
    console.log(mensaje.value.length);
    console.log(ultimo);
    return ultimo + 1;
}
function removerDobleEspacioBlanco() {
    var textoDoble = mensaje.value;
    var textoReemplazado = textoDoble.replace(/ {2,}/g, " ");
    mensaje.value = textoReemplazado;
}*/
let anchoDesplazamiento = mensaje.scrollWidth;
let anchoMensaje;
function actualizarAnchoMensaje() {
    anchoMensaje = mensaje.clientWidth;
}
mensaje.addEventListener("loaded", actualizarAnchoMensaje());
window.addEventListener("resize", actualizarAnchoMensaje());
var m2;
var m;
function generarSalto() {
    f = mensaje.value.split("\n").length;
    spanAncho.textContent = mensaje.value;
    console.log(spanAncho.offsetWidth);
    console.log(anchoMensaje);
    revisarAnchoAlto();
}
function revisarAnchoAlto() {
    if (spanAncho.offsetWidth > anchoMensaje) {
        console.log(spanAncho.offsetWidth);
        console.log(spanAncho.textContent);
        console.log(anchoMensaje);
        m2 = mensaje.value.slice(ultimoCaracter());
        console.log(m2);
        m = mensaje.value.slice(mensaje.length, ultimoCaracter());
        if (m2 === "") {
            console.log(m2);
            var u = mensaje.value.lastIndexOf(" ", mensaje.value.length);
            console.log(u);
            m2 = mensaje.value.slice(u);
            m = mensaje.value.slice(mensaje.length, u);
            console.log(m2);
            if (m2 === " ") {
                spanAncho.textContent = m + "\n" + m2;
                if (spanAncho.offsetWidth > anchoMensaje) {
                    console.log(mensaje.value.length);
                    var l = mensaje.value.lastIndexOf(" ");
                    console.log(l);
                    var a = mensaje.value.lastIndexOf(" ", l - 1);
                    console.log(a);
                    m2 = mensaje.value.slice(a);
                    console.log(m2);
                    m = mensaje.value.slice(mensaje.length, a);
                    console.log(m);
                }
                m2 = mensaje.value.slice(u - 2);
                console.log(m2);
                m = mensaje.value.slice(mensaje.length, u - 2);
                console.log(m);
            }
        }
        if (m2 === "" && u + 1 === ultimoCaracter()) {
            console.log(m2);
            var u = mensaje.value.lastIndexOf(" ", ultimoCaracter() - 2);
            console.log(u);
            m2 = mensaje.value.slice(u);
            console.log(m2);
            m2 = mensaje.value.slice(u);
            console.log(m2);
            m = mensaje.value.slice(mensaje.length, u);
        }
        console.log(m2);
        console.log(m);
        console.log(mensaje.value);
        mensaje.value = m + "\n" + m2;
        console.log(mensaje.value);
        spanAncho.textContent = mensaje.value;
        //let textoConEspacio = spanAncho.textContent.replace("/\n/g", "<br> ");
        //spanAncho.textContent = textoConEspacio;
        console.log(spanAncho.textContent);
    }
    if (altoDesplazamiento > altoMensaje) {
        altoMensaje = mensaje.offsetHeight;
        mensaje.style.height = altoMensaje;
    }
}
function tamanioLetra() {
    spanAncho.style.fontSize = window.getComputedStyle(document.getElementById("mensaje"), null).getPropertyValue('font-size');
    caja.style.fontSize = window.getComputedStyle(document.getElementById("mensaje"), null).getPropertyValue('font-size');
}/*
let ajuste;
function esperarAjuste() {
    clearTimeout(ajuste);
    ajuste = setTimeout(function() {
        anchoMensaje = mensaje.offsetWidth;
    }, 100);
}*/
let dividirMensaje;
let navegador = 0;
function cambiarResolucion() {
    tamanioLetra();
    console.log(window.getComputedStyle(document.getElementById("mensaje"), null).getPropertyValue('offsetWidth'));
    if (navigator.userAgent.search("Chrome") > 0) {
        navegador++;
    }
    if (navegador == 2) {
        navegador = 0;
        tamanioLetra();
        anchoMensaje = mensaje.clientWidth;
        console.log(dividirMensaje);
        console.log(mensaje.value.split(" "));
        dividirMensaje = mensaje.value.split(" ");
        console.log(mensaje.value);
        console.log(mensaje.value.split(" "));
        ajustarValor();
        console.log(dividirMensaje.length);
        console.log(anchoMensaje);
        console.log(mensaje.offsetWidth);
        anchoMensaje = mensaje.offsetWidth;
        console.log(anchoMensaje);
        actualizarAnchoMensaje();
        console.log(anchoMensaje);
        console.log(mensaje.scrollWidth);
        for (var i = 0; i < dividirMensaje.length; i++) {
            spanAncho.textContent = mensaje.value;
            console.log(spanAncho.offsetWidth);
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
                //mensaje.value += dividirMensaje[i] + " ";
                mensaje.value += dividirMensaje[i].slice(1) + " ";
            } else {
    
            }
            console.log(JSON.stringify(mensaje.value));
            //generarSalto();
            //removerDobleEspacioBlanco();
        }
    }
}
function entradaFilas() {
    tamanioLetra();
    //removerDobleEspacioBlanco();
    //generarSalto();
    ajustarAlto();
    ajustarFilas();
    cambiarPosicionFila();
}
mensaje.addEventListener("loaded", ajustarValor());
//texto.addEventListener("loaded", generarSalto);
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