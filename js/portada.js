function portada() {
    let cp = -1;
    let botonesCarrusel = document.getElementsByClassName("btn-carrusel");
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
    let circulos = document.getElementById("circulos");
    function verificarPortada() {
        function removerClasesPortada() {
            carrusel.classList.remove(carrusel.classList);
            circulos.classList.remove(circulos.classList);
        }
        switch (p) {
            case 0:
                cp = 11;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("primera-imagen-cero");
                circulos.classList.add("trasladar-1300");
                break;
            case 1:
                cp = 1;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("primera-imagen");
                circulos.classList.add("trasladar-100");
                break;
            case 2:
                cp = 2;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("segunda-imagen");
                circulos.classList.add("trasladar-200");
                break;
            case 3:
                cp = 3;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("tercera-imagen");
                circulos.classList.add("trasladar-300");
                break;
            case 4:
                cp = 4;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("cuarta-imagen");
                circulos.classList.add("trasladar-400");
                break;
            case 5:
                cp = 5;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("quinta-imagen");
                circulos.classList.add("trasladar-500");
                break;
            case 6:
                cp = 6;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("sexta-imagen");
                circulos.classList.add("trasladar-600");
                break;
            case 7:
                cp = 7;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("septima-imagen");
                circulos.classList.add("trasladar-700");
                break;
            case 8:
                cp = 8;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("octava-imagen");
                circulos.classList.add("trasladar-800");
                break;
            case 9:
                cp = 9;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("novena-imagen");
                circulos.classList.add("trasladar-900");
                break;
            case 10:
                cp = 10;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("decima-imagen");
                circulos.classList.add("trasladar-1000");
                break;
            case 11:
                cp = 11;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("onceava-imagen");
                circulos.classList.add("trasladar-1100");
                break;
            case 12:
                cp = 12;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("doceava-imagen");
                circulos.classList.add("trasladar-1200");
                break;
            case 13:
                cp = 13;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("treceava-imagen");
                circulos.classList.add("trasladar-1300");
                break;
            case 14:
                cp = 14;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("catorceava-imagen");
                circulos.classList.add("trasladar-100");
                break;
            default:
                break;
        }
    }
    function primerCirculo() {
        cp = 0;
        verificarPortada();
    }
    botonesCarrusel[0].addEventListener("click", primerCirculo);
    function SegundoCirculo() {
        cp = 1;
        verificarPortada();
    }
    botonesCarrusel[1].addEventListener("click", SegundoCirculo);
}
document.addEventListener("DOMContentLoaded", function() {
    portada();
});