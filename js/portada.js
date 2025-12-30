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
            carrusel.className = "transicion-1";
            circulos.className = "transicion-1";
        }
        switch (p) {
            case 0:
                cp = 10;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("primera-imagen-cero");
                circulos.classList.add("trasladar-0");
                break;
            case 1:
                cp = 0;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("primera-imagen");
                circulos.classList.add("trasladar-100");
                break;
            case 2:
                cp = 1;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("segunda-imagen");
                circulos.classList.add("trasladar-200");
                break;
            case 3:
                cp = 2;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("tercera-imagen");
                circulos.classList.add("trasladar-300");
                break;
            case 4:
                cp = 3;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("cuarta-imagen");
                circulos.classList.add("trasladar-400");
                break;
            case 5:
                cp = 4;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("quinta-imagen");
                circulos.classList.add("trasladar-500");
                break;
            case 6:
                cp = 5;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("sexta-imagen");
                circulos.classList.add("trasladar-600");
                break;
            case 7:
                cp = 6;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("septima-imagen");
                circulos.classList.add("trasladar-700");
                break;
            case 8:
                cp = 7;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("octava-imagen");
                circulos.classList.add("trasladar-800");
                break;
            case 9:
                cp = 8;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("novena-imagen");
                circulos.classList.add("trasladar-900");
                break;
            case 10:
                cp = 9;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("decima-imagen");
                circulos.classList.add("trasladar-1000");
                break;
            case 11:
                cp = 10;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("onceava-imagen");
                circulos.classList.add("trasladar-1100");
                break;
            case 12:
                cp = 0;
                cambiarCirculo();
                removerClasesPortada();
                carrusel.classList.add("doceava-imagen");
                circulos.classList.add("trasladar-1200");
                break;
            default:
                break;
        }
    }
    function primerCirculo() {
        if (p > 6 && p < 12) {
            p = 12;
        } else if (p >= 0 && p < 7) {
            p = 1;
        }
        verificarPortada();
    }
    botonesCarrusel[0].addEventListener("click", primerCirculo);
    function SegundoCirculo() {
        p = 2;
        verificarPortada();
    }
    botonesCarrusel[1].addEventListener("click", SegundoCirculo);
    function tercerCirculo() {
        p = 3;
        verificarPortada();
    }
    botonesCarrusel[2].addEventListener("click", tercerCirculo);
    function cuartoCirculo() {
        p = 4;
        verificarPortada();
    }
    botonesCarrusel[3].addEventListener("click", cuartoCirculo);
    function quintoCirculo() {
        p = 5;
        verificarPortada();
    }
    botonesCarrusel[4].addEventListener("click", quintoCirculo);
    function sextoCirculo() {
        p = 6;
        verificarPortada();
    }
    botonesCarrusel[5].addEventListener("click", sextoCirculo);
    function septimoCirculo() {
        p = 7;
        verificarPortada();
    }
    botonesCarrusel[6].addEventListener("click", septimoCirculo);
    function octavoCirculo() {
        p = 8;
        verificarPortada();
    }
    botonesCarrusel[7].addEventListener("click", octavoCirculo);
    function novenoCirculo() {
        p = 9;
        verificarPortada();
    }
    botonesCarrusel[8].addEventListener("click", novenoCirculo);
    function decimoCirculo() {
        p = 10;
        verificarPortada();
    }
    botonesCarrusel[9].addEventListener("click", decimoCirculo);
    function onceavoCirculo() {
        if (p > 0 && p < 6) {
            p = 0;
        } else if (p > 5 && p < 11) {
            p = 11;
        }
        verificarPortada();
    }
    botonesCarrusel[10].addEventListener("click", onceavoCirculo);
    function removerClases() {
        carrusel.className = "";
        circulos.className = "";
    }
    function finalTransicion() {
        if (p == 12) {
            removerClases();
            p = 1;
            cp = 0;
            cambiarCirculo();
            carrusel.classList.add("primera-imagen");
            circulos.classList.add("trasladar-100");
        } else if (p == 0) {
            removerClases();
            p = 11;
            cp = 10;
            cambiarCirculo();
            carrusel.classList.add("onceava-imagen");
            circulos.classList.add("trasladar-1100");
        }
    }
    carrusel.addEventListener("transitionend", finalTransicion);
    let imagenCarrusel = document.getElementsByClassName("imagen-carrusel");
    function rotacion() {
        p++;
        cp++;
        if (p >= imagenCarrusel.length) {
            p = 0;
            cp = 0;
        }
        let x = 0;
        let x2 = 0;
        let x3 = 0;
        let x4 = 0;
        let posActual;
        let prevenir = false;
    }
}
document.addEventListener("DOMContentLoaded", portada);