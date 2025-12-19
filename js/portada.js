function portada() {
    let botonesCarrusel = document.getElementsByClassName("btn-carrusel");
    let cp = -1;
    function cambiarCirculo() {
        for (var i = 0; i < botonesCarrusel.length; i++) {
            if (i == cp)
                botonesCarrusel[i].classList.add("btn-seleccionado");
            else
                botonesCarrusel[i].classList.remove("btn-seleccionado");
        }
    }
    let p = 0;
    function verificarPortada() {
        switch (p) {
            case 0:
                cp = 11;
                cambiarCirculo();
        }
    }
    function cambiarPortada() {
    }
}
document.addEventListener("DOMContentLoaded", function() {

});