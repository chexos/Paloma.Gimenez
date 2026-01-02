let p = 0;
let cp = -1;
let circulos = document.getElementById("circulos");
function portada() {
    let carrusel = document.getElementById("carrusel");
    function primerCirculo() {
        if (p > 6 && p < 12) {
            p = 12;
        } else if (p >= 0 && p < 7) {
            p = 1;
        }
        verificarPortada();
        reiniciarRotacion();
    }
    botonesCarrusel[0].addEventListener("click", primerCirculo);
    function SegundoCirculo() {
        p = 2;
        verificarPortada();
        reiniciarRotacion();
    }
    botonesCarrusel[1].addEventListener("click", SegundoCirculo);
    function tercerCirculo() {
        p = 3;
        verificarPortada();
        reiniciarRotacion();
    }
    botonesCarrusel[2].addEventListener("click", tercerCirculo);
    function cuartoCirculo() {
        p = 4;
        verificarPortada();
        reiniciarRotacion();
    }
    botonesCarrusel[3].addEventListener("click", cuartoCirculo);
    function quintoCirculo() {
        p = 5;
        verificarPortada();
        reiniciarRotacion();
    }
    botonesCarrusel[4].addEventListener("click", quintoCirculo);
    function sextoCirculo() {
        p = 6;
        verificarPortada();
        reiniciarRotacion();
    }
    botonesCarrusel[5].addEventListener("click", sextoCirculo);
    function septimoCirculo() {
        p = 7;
        verificarPortada();
        reiniciarRotacion();
    }
    botonesCarrusel[6].addEventListener("click", septimoCirculo);
    function octavoCirculo() {
        p = 8;
        verificarPortada();
        reiniciarRotacion();
    }
    botonesCarrusel[7].addEventListener("click", octavoCirculo);
    function novenoCirculo() {
        p = 9;
        verificarPortada();
        reiniciarRotacion();
    }
    botonesCarrusel[8].addEventListener("click", novenoCirculo);
    function decimoCirculo() {
        p = 10;
        verificarPortada();
        reiniciarRotacion();
    }
    botonesCarrusel[9].addEventListener("click", decimoCirculo);
    function onceavoCirculo() {
        if (p > 0 && p < 6) {
            p = 0;
        } else if (p > 5 && p < 11) {
            p = 11;
        }
        verificarPortada();
        reiniciarRotacion();
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
}
let botonesCarrusel = document.getElementsByClassName("btn-carrusel");
function cambiarCirculo() {
    for (var i = 0; i < botonesCarrusel.length; i++) {
        if (i == cp)
            botonesCarrusel[i].classList.add("btn-seleccionado");
        else
            botonesCarrusel[i].classList.remove("btn-seleccionado");
    }
}
function removerEstilo() {
    carrusel.style.removeProperty("transform");
    circulos.style.removeProperty("transform");
}
function verificarPortada() {
    function removerClasesPortada() {
        removerEstilo();
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
function rotacion() {
    let imagenCarrusel = document.getElementsByClassName("imagen-carrusel");
    let rotarSlider;
    let x = 0;
    let x2 = 0;
    let x3 = 0;
    p++;
    cp++;
    if (p >= imagenCarrusel.length) {
        p = 0;
        cp = 0;
    }
    verificarPortada();
    rotarSlider = setTimeout(rotacion, 3000);
    function touchStart(e) {
        if (p == 0 || p == 12) {
            return;
        }
        else {
            clearTimeout(rotarSlider);
            x = e.touches[0].pageX;
        }
    }
    let principal = document.getElementById("principal");
    function touchMove(e) {
        if (p == 0 || p == 12) {
            return;
        } else {
            let newWidth;
            let newAncho;
            let cambioNewWidth;
            clearTimeout(rotarSlider);
            x2 = e.touches[0].pageX;
            newWidth = - principal.clientWidth * p;
            newAncho = principal.clientWidth * p;
            carrusel.classList.remove("transicion-1");
            circulos.classList.remove("transicion-1");
            if (x > x2) {
                cambioNewWidth = x - x2;
                carrusel.style.transform = "translateX(" + (newWidth - cambioNewWidth) + "px)";
                circulos.style.transform = "translateX(" + (newAncho + cambioNewWidth) + "px)";
            } else {
                cambioNewWidth = x2 - x;
                carrusel.style.transform = "translateX(" + (newWidth + cambioNewWidth) + "px)";
                circulos.style.transform = "translateX(" + (newAncho - cambioNewWidth) + "px)";
            }
        }
    }
    function touchEnd(e) {
        if (p == 0 || p == 12) {
            return;
        } else {
            x3 = e.changedTouches[0].clientX;
            if (x > x3) {
                if (p == 1 || p == 12) {
                    carrusel.classList.add("transicion-1");
                }
                if (p < 13)
                    p++;
            } else if (x < x3) {
                if (p == 0) {
                    p = 11;
                } else {
                    p--;
                }
            } else {

            }
            carrusel.classList.add("transicion-1");
            verificarPortada();
            rotarSlider = setTimeout(rotacion, 3000);
            e.stopImmediatePropagation();
        }
    }
    carrusel.addEventListener("touchstart", touchStart, { passive: false });
    carrusel.addEventListener("touchmove", touchMove, { passive: false });
    carrusel.addEventListener("touchend", touchEnd);
}
function reiniciarRotacion() {
    clearTimeout(rotarSlider);
    rotarSlider = setTimeout(rotacion, 3000);
}
document.addEventListener("DOMContentLoaded", function() {
    portada();
    rotacion();
});