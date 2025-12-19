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
    let carrusel = document.getElementById("carrusel");
    function verificarPortada() {
        function removerClasesPortada() {
            carrusel.classList.remove(carrusel.classList);
        }
        switch (p) {
            case 0:
                cp = 11;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("primera-imagen-cero");
                break;
        }
    }
    function cambiarPortada() {
    }
}
document.addEventListener("DOMContentLoaded", function() {

});