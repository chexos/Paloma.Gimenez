let ampliar = document.getElementById("ampliar");
let multimediaAmpliado = document.getElementById("multimediaAmpliado");
let cambiarMultimedia = "https://chexos.github.io/Paloma.Gimenez/multimedia/";
let nombreMultimedia;
let sesion = document.getElementsByClassName("sesion");
let figuraSesion = document.getElementsByClassName("figura-sesion");
let estiloAmpliar = window.getComputedStyle(ampliar);
let altoMultimedia = document.getElementsByClassName("alto-multimedia");
let altoMultimediaIzq = document.getElementById("altoMultimediaIzq");
let altoMultimediaDer = document.getElementById("altoMultimediaDer");
let img;
let estado = false;
let ruta = "C:/Users/sgglm/OneDrive/Escritorio/sebastián/Proyectos/Paloma.Gimenez/Paloma.Gimenez/";
let resolucion;
function revisarResolucion() {
    resolucion = window.innerWidth;
    if (resolucion >= 1920) {
        
    }
}
let producto = new Array(20);
producto[0] = "Tama%C3%B1o-Producto-603x670-1.png";
producto[1] = "Tama%C3%B1o-Producto-603x670-2.png";
producto[2] = "Tama%C3%B1o-Producto-603x670-3.png";
producto[3] = "Tama%C3%B1o-Producto-603x670-4.png";
producto[4] = "Tama%C3%B1o-Producto-603x670-5.png";
producto[5] = "Tama%C3%B1o-Producto-603x670-6.png";
producto[6] = "Tama%C3%B1o-Producto-603x670-7.png";
producto[7] = "Tama%C3%B1o-Producto-603x670-8.png";
producto[8] = "Tama%C3%B1o-Producto-603x670-9.gif";
producto[9] = "Tama%C3%B1o-Producto-603x670-10.png";
producto[10] = "Tama%C3%B1o-Producto-603x670-11.png";
producto[11] = "Tama%C3%B1o-Producto-603x670-12.gif";
producto[12] = "Tama%C3%B1o-Producto-603x670-13.gif";
producto[13] = "Tama%C3%B1o-Producto-603x670-14.png";
producto[14] = "Tama%C3%B1o-Producto-603x670-15.gif";
producto[15] = "Tama%C3%B1o-Producto-603x670-16.png";
producto[16] = "Tama%C3%B1o-Producto-603x670-17.gif";
producto[17] = "Tama%C3%B1o-Producto-603x670-18.png";
producto[18] = "Tama%C3%B1o-Producto-603x670-19.png";
producto[19] = "Tama%C3%B1o-Producto-603x670-20.png";
let campaña = new Array(9);
campaña[0] = "Taman%CC%83o-Producto-480x670-1.png";
campaña[1] = "Taman%CC%83o-Producto-480x670-2.png";
campaña[2] = "";
campaña[3] = "Taman%CC%83o-Producto-480x670-3.png";
campaña[4] = "Taman%CC%83o-Producto-986x670-1.png";
campaña[5] = "Taman%CC%83o-Producto-480x670-4.png";
campaña[6] = "Taman%CC%83o-Producto-480x670-5.png";
campaña[7] = "Taman%CC%83o-Producto-480x670-6.png";
campaña[8] = "Taman%CC%83o-Producto-480x670-7.png";
let fetichePie = new Array(12);
fetichePie[0] = "Tama%C3%B1o-Moda-480x670-FeticheDePie.png";
fetichePie[1] = "Tama%C3%B1o-Moda-480x670-FeticheDePie-2.png";
fetichePie[2] = "Tama%C3%B1o-Moda-480x670-FeticheDePie-3.png";
fetichePie[3] = "Tama%C3%B1o-Moda-480x670-FeticheDePie-4.png";
fetichePie[4] = "Tama%C3%B1o-Moda-986x670-FeticheDePie-5.png";
fetichePie[5] = "Tama%C3%B1o-Moda-480x670-FeticheDePie-6.png";
fetichePie[6] = "Tama%C3%B1o-Moda-480x670-FeticheDePie-7.png";
fetichePie[7] = "Tama%C3%B1o-Moda-480x670-FeticheDePie-8.png";
fetichePie[8] = "Tama%C3%B1o-Moda-480x670-FeticheDePie-9.png";
fetichePie[9] = "Tama%C3%B1o-Moda-986x670-FeticheDePie-10.png";
fetichePie[10] = "Tama%C3%B1o-Moda-480x670-FeticheDePie-11.png";
fetichePie[11] = "Tama%C3%B1o-Moda-480x670-FeticheDePie-12.png";
//fetichePie[12] = "Tama%C3%B1o-Moda-480x670-FootFetish-10.png";
//fetichePie[13] = "Tama%C3%B1o-Moda-480x670-FootFetish-11.png";
let colapso = new Array(8);
colapso[0] = "Tama%C3%B1o-Moda-480x670-Colapso-1.png";
colapso[1] = "Tama%C3%B1o-Moda-480x670-Colapso-2.png";
colapso[2] = "Tama%C3%B1o-Moda-480x670-Colapso-3.png";
colapso[3] = "Tama%C3%B1o-Moda-480x670-Colapso-4.png";
colapso[4] = "Tama%C3%B1o-Moda-480x670-Colapso-5.png";
colapso[5] = "Tama%C3%B1o-Moda-480x670-Colapso-6.png";
colapso[6] = "Tama%C3%B1o-Moda-480x670-Colapso-7.png";
colapso[7] = "Tama%C3%B1o-Moda-480x670-Colapso-8.png";
//colapso[8] = "Tama%C3%B1o-Moda-480x670-Colapso-9.png";
//colapso[9] = "Tama%C3%B1o-Moda-480x670-Colapso-10.png";
let camino = new Array(21);
camino[0] = "Taman%CC%83o-Moda-480x730-Nora-1.png";
camino[1] = "Taman%CC%83o-Moda-480x730-Nora-2.png";
camino[2] = "Taman%CC%83o-Moda-480x730-Nora-3.png";
camino[3] = "Taman%CC%83o-Moda-480x730-Nora-4.png";
camino[4] = "Taman%CC%83o-Moda-480x730-Nora-5.png";
camino[5] = "Taman%CC%83o-Moda-480x730-Nora-6.png";
camino[6] = "Taman%CC%83o-Moda-480x730-Nora-7.png";
camino[7] = "Taman%CC%83o-Moda-480x730-Nora-8.png";
camino[8] = "Taman%CC%83o-Moda-480x730-Nora-9.png";
camino[9] = "Taman%CC%83o-Moda-480x730-Nora-10.png";
camino[10] = "Taman%CC%83o-Moda-480x730-Nora-11.png";
camino[11] = "Taman%CC%83o-Moda-480x730-Nora-12.png";
camino[12] = "Taman%CC%83o-Moda-480x730-Nora-13.png";
camino[13] = "Taman%CC%83o-Moda-480x730-Nora-14.png";
camino[14] = "Taman%CC%83o-Moda-480x730-Nora-15.png";
camino[15] = "Taman%CC%83o-Moda-480x730-Nora-16.png";
camino[16] = "Taman%CC%83o-Moda-480x730-Nora-17.png";
camino[17] = "Taman%CC%83o-Moda-480x730-Nora-18.png";
camino[18] = "Taman%CC%83o-Moda-480x730-Nora-19.png";
camino[19] = "Taman%CC%83o-Moda-480x730-Nora-20.png";
camino[20] = "Taman%CC%83o-Moda-480x730-Nora-21.png";
let locacion;
function conseguirLocacion() { 
    locacion = location.pathname.slice(16, location.pathname.length - 5);
}
document.addEventListener("DOMContentLoaded", conseguirLocacion);
document.addEventListener("unload", conseguirLocacion);
function intercambiarMultimedia(a) {
    estado = true;
    nombreMultimedia = multimediaAmpliado.src.slice(51, multimediaAmpliado.src.length);
    console.log(nombreMultimedia);
    if (locacion == "producto") {
        for (let i = 0; i < producto.length; i++) {
            if (producto[i] == nombreMultimedia) {
                if (a == 1) {
                    if (i == 0) {
                        multimediaAmpliado.src = cambiarMultimedia + producto[producto.length - 1];
                    } else {
                        multimediaAmpliado.src = cambiarMultimedia + producto[i - 1];
                    }
                } else if (a == 2) {
                    if (i == producto.length - 1) {
                        multimediaAmpliado.src = cambiarMultimedia + producto[0];
                    }
                    else {
                        multimediaAmpliado.src = cambiarMultimedia + producto[i + 1];
                    }
                }
            }
        }
    } else if (locacion == "campa%C3%B1as") {
        console.log("a");
        for (let i = 0; i < campaña.length; i++) {
            if (campaña[i] == nombreMultimedia) {
                if (a == 1) {
                    if (i == 0) {
                        multimediaAmpliado.src = cambiarMultimedia + campaña[campaña.length - 1];
                    } else {
                        multimediaAmpliado.src = cambiarMultimedia + campaña[i - 1];
                    }
                } else if (a == 2) {
                    if (i == campaña.length - 1) {
                        multimediaAmpliado.src = cambiarMultimedia + campaña[0];
                    }
                    else {
                        multimediaAmpliado.src = cambiarMultimedia + campaña[i + 1];
                    }
                }
            }
        }
    } else if (locacion == "foot-fetish") {
        for (let i = 0; i < fetichePie.length; i++) {
            if (fetichePie[i] == nombreMultimedia) {
                if (a == 1) {
                    if (i == 0) {
                        multimediaAmpliado.src = cambiarMultimedia + fetichePie[fetichePie.length - 1];
                    } else {
                        multimediaAmpliado.src = cambiarMultimedia + fetichePie[i - 1];
                    }
                } else if (a == 2) {
                    if (i == fetichePie.length - 1) {
                        multimediaAmpliado.src = cambiarMultimedia + fetichePie[0];
                    }
                    else {
                        multimediaAmpliado.src = cambiarMultimedia + fetichePie[i + 1];
                    }
                }
            }
        }
    } else if (locacion == "colapso") {
        for (let i = 0; i < colapso.length; i++) {
            if (colapso[i] == nombreMultimedia) {
                if (a == 1) {
                    if (i == 0) {
                        multimediaAmpliado.src = cambiarMultimedia + colapso[colapso.length - 1];
                    } else {
                        multimediaAmpliado.src = cambiarMultimedia + colapso[i - 1];
                    }
                } else if (a == 2) {
                    if (i == colapso.length - 1) {
                        multimediaAmpliado.src = cambiarMultimedia + colapso[0];
                    }
                    else {
                        multimediaAmpliado.src = cambiarMultimedia + colapso[i + 1];
                    }
                }
            }
        }
    } else if (locacion == "horse-journey") {
        for (let i = 0; i < camino.length; i++) {
            if (camino[i] == nombreMultimedia) {
                if (a == 1) {
                    if (i == 0) {
                        multimediaAmpliado.src = cambiarMultimedia + camino[camino.length - 1];
                    } else {
                        multimediaAmpliado.src = cambiarMultimedia + camino[i - 1];
                    }
                } else if (a == 2) {
                    if (i == camino.length - 1) {
                        multimediaAmpliado.src = cambiarMultimedia + camino[0];
                    }
                    else {
                        multimediaAmpliado.src = cambiarMultimedia + camino[i + 1];
                    }
                }
            }
        }
    }
}
altoMultimediaIzq.addEventListener("click", () => intercambiarMultimedia(1));
altoMultimediaDer.addEventListener("click", () => intercambiarMultimedia(2));
function asignarAltoMultimedia() {
    altoMultimedia[0].style.height = multimediaAmpliado.offsetHeight + "px";
}
altoMultimedia[0].addEventListener("onload", asignarAltoMultimedia());
function eliminarResaltado(a) {
    figuraSesion[a].classList.remove("resaltar");
}
function resaltarUno(a) {
    eliminarResaltado(a);
    figuraSesion[a].classList.toggle("resaltar");
}
function ampliarMultimedia(a) {
    if (estado == true) {
        estado = false;
        return;
    }
    if (a != - 1) {
        ampliar.classList.add("opacidad");
        multimediaAmpliado.src = sesion[a].src;
        asignarAltoMultimedia();
    } else if (a == -1) {
        if (ampliar.classList.contains("opacidad")) {
            ampliar.classList.remove("opacidad");
        }
    }
}
for (let i = 0; i < figuraSesion.length; i++) {
    figuraSesion[i].addEventListener("touchstart", () => resaltarUno(i));
    figuraSesion[i].addEventListener("touchend", () => eliminarResaltado(i));
    figuraSesion[i].addEventListener("click", () => {
        ampliarMultimedia(i);
    });
}
ampliar.addEventListener("click", () => {
    ampliarMultimedia(-1);
});