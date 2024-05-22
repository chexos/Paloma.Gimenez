let texto = document.getElementById("texto");
let mensaje = document.getElementById("mensaje");
function ajustarValor() {
    mensaje.value = "";
}
mensaje.addEventListener("loaded", ajustarValor());
var filasTexto = mensaje.rows;
function ajustarFilas() {
    let filas = mensaje.value.split("\n").length;
    if (filas > 2) {
        mensaje.rows = filas;
    } else {
        mensaje.rows = 2;
    }
    let span = document.createElement("span");
    span.className = "fila";
    //console.log(filasTexto);
    if (mensaje.rows > filasTexto) {
        //console.log(mensaje.rows);
        filasTexto = mensaje.rows;
        for (var i = 1; i <= mensaje.rows; i++) {
            if (i > 0) {
                console.log(100 / i);
                //span.style.top = (100 / i) + "%";
                texto.appendChild(span);
            }
        }
    }/*
    for (var i = 1; i <= mensaje.rows; i++) {
        if (i > 0) {
            //console.log(100 / i);
            span.style.top = (100 / mensaje.rows) + "%";
            texto.appendChild(span);
        }
    }*/
}
mensaje.addEventListener("input", ajustarFilas);
mensaje.addEventListener("loaded", ajustarFilas());