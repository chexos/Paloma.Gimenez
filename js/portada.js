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
            case 1:
                cp = 1;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("primera-imagen");
                break;
            case 2:
                cp = 2;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("segunda-imagen");
                break;
            case 3:
                cp = 3;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("tercera-imagen");
                break;
            case 4:
                cp = 4;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("cuarta-imagen");
                break;
            case 5:
                cp = 5;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("quinta-imagen");
                break;
            case 6:
                cp = 6;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("sexta-imagen");
                break;
            case 7:
                cp = 7;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("septima-imagen");
                break;
            case 8:
                cp = 8;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("octava-imagen");
                break;
            case 9:
                cp = 9;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("novena-imagen");
                break;
            case 10:
                cp = 10;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("decima-imagen");
                break;
            case 11:
                cp = 11;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("onceava-imagen");
                break;
            case 12:
                cp = 12;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("doceava-imagen");
                break;
            case 13:
                cp = 13;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("treceava-imagen");
                break;
            case 14:
                cp = 14;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("catorceava-imagen");
                break;
            default:
                break;
        }
    }
    function cambiarPortada() {
    }
}
document.addEventListener("DOMContentLoaded", function() {

});