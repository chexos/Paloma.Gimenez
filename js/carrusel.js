let ampliar = document.getElementById("ampliar");
let imagenAmpliada = document.getElementById("imagenAmpliada");
let cambiarImagen = "https://chexos.github.io/Paloma.Gimenez/imagenes/";
let nombreImagen;
let sesion = document.getElementsByClassName("sesion");
let figuraSesion = document.getElementsByClassName("figura-sesion");
let estiloAmpliar = window.getComputedStyle(ampliar);
let altoImagen = document.getElementsByClassName("alto-imagen");
let altoImagenIzq = document.getElementById("altoImagenIzq");
let altoImagenDer = document.getElementById("altoImagenDer");
let img;
let estado = false;
let ruta = "C:/Users/sgglm/OneDrive/Escritorio/sebastián/Proyectos/Paloma.Gimenez/Paloma.Gimenez/";
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
let fetichePie = new Array(14);
fetichePie[0] = "Tama%C3%B1o-Moda-480x670-FootFetish.png";
fetichePie[1] = "Tama%C3%B1o-Moda-480x670-FootFetish-2.png";
fetichePie[2] = "Tama%C3%B1o-Moda-480x670-FootFetish-3.png";
fetichePie[3] = "Tama%C3%B1o-Moda-480x670-FootFetish-4.png";
fetichePie[4] = "Tama%C3%B1o-Moda-986x670-FootFetish-5.png";
fetichePie[5] = "Tama%C3%B1o-Moda-480x670-FootFetish-6.png";
fetichePie[6] = "Tama%C3%B1o-Moda-480x670-FootFetish-7.png";
fetichePie[7] = "Tama%C3%B1o-Moda-480x670-FootFetish-8.png";
fetichePie[8] = "Tama%C3%B1o-Moda-480x670-FootFetish-9.png";
fetichePie[9] = "Tama%C3%B1o-Moda-986x670-FootFetish-10.png";
fetichePie[10] = "Tama%C3%B1o-Moda-480x670-FootFetish-11.png";
fetichePie[11] = "Tama%C3%B1o-Moda-480x670-FootFetish-12.png";
//fetichePie[12] = "Tama%C3%B1o-Moda-480x670-FootFetish-10.png";
//fetichePie[13] = "Tama%C3%B1o-Moda-480x670-FootFetish-11.png";
let colapso = new Array(10);
colapso[0] = "Tama%C3%B1o-Moda-480x360-Colapso.png";
colapso[1] = "Tama%C3%B1o-Moda-480x670-Colapso-1.png";
colapso[2] = "Tama%C3%B1o-Moda-480x670-Colapso-2.png";
colapso[3] = "Tama%C3%B1o-Moda-480x670-Colapso-3.png";
colapso[4] = "Tama%C3%B1o-Moda-480x670-Colapso-4.png";
colapso[5] = "Tama%C3%B1o-Moda-480x670-Colapso-5.png";
colapso[6] = "Tama%C3%B1o-Moda-480x670-Colapso-6.png";
colapso[7] = "Tama%C3%B1o-Moda-480x670-Colapso-7.png";
colapso[8] = "Tama%C3%B1o-Moda-480x670-Colapso-8.png";
colapso[9] = "Tama%C3%B1o-Moda-480x670-Colapso-9.png";
let locacion;
function conseguirLocacion() { 
    locacion = location.pathname.slice(16, location.pathname.length - 5);
}
document.addEventListener("DOMContentLoaded", conseguirLocacion);
document.addEventListener("unload", conseguirLocacion);
function intercambiarImagen(a) {
    estado = true;
    nombreImagen = imagenAmpliada.src.slice(49, imagenAmpliada.src.length);
    if (locacion == "producto") {
        for (let i = 0; i < producto.length; i++) {
            if (producto[i] == nombreImagen) {
                if (a == 1) {
                    if (i == 0) {
                        imagenAmpliada.src = cambiarImagen + producto[producto.length - 2];
                    } else {
                        imagenAmpliada.src = cambiarImagen + producto[i - 1];
                    }
                } else if (a == 2) {
                    if (i == producto.length - 2) {
                        imagenAmpliada.src = cambiarImagen + producto[0];
                    }
                    else {
                        imagenAmpliada.src = cambiarImagen + producto[i + 1];
                    }
                }
            }
        }
    } else if (locacion == "foot-fetish") {
        console.log("a");
        for (let i = 0; i < fetichePie.length; i++) {
            if (fetichePie[i] == nombreImagen) {
                if (a == 1) {
                    if (i == 0) {
                        imagenAmpliada.src = cambiarImagen + fetichePie[fetichePie.length - 2];
                    } else {
                        imagenAmpliada.src = cambiarImagen + fetichePie[i - 1];
                    }
                } else if (a == 2) {
                    if (i == fetichePie.length - 2) {
                        imagenAmpliada.src = cambiarImagen + fetichePie[0];
                    }
                    else {
                        imagenAmpliada.src = cambiarImagen + fetichePie[i + 1];
                    }
                }
            }
        }
    } else if (locacion == "colapso") {
        for (let i = 0; i < colapso.length; i++) {
            if (colapso[i] == nombreImagen) {
                if (a == 1) {
                    if (i == 0) {
                        imagenAmpliada.src = cambiarImagen + colapso[colapso.length - 2];
                    } else {
                        imagenAmpliada.src = cambiarImagen + colapso[i - 1];
                    }
                } else if (a == 2) {
                    if (i == colapso.length - 2) {
                        imagenAmpliada.src = cambiarImagen + colapso[0];
                    }
                    else {
                        imagenAmpliada.src = cambiarImagen + colapso[i + 1];
                    }
                }
            }
        }
    }
}
altoImagenIzq.addEventListener("click", () => intercambiarImagen(1));
altoImagenDer.addEventListener("click", () => intercambiarImagen(2));
function asignarAltoImagen() {
    altoImagen[0].style.height = imagenAmpliada.offsetHeight + "px";
}
altoImagen[0].addEventListener("onload", asignarAltoImagen());
function eliminarResaltado(a) {
    figuraSesion[a].classList.remove("resaltar");
}
function resaltarUno(a) {
    eliminarResaltado(a);
    figuraSesion[a].classList.toggle("resaltar");
}
function ampliarImagen(a) {
    if (estado == true) {
        estado = false;
        return;
    }
    if (a != - 1) {
        ampliar.classList.add("opacidad");
        imagenAmpliada.src = sesion[a].src;
        asignarAltoImagen();
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
        ampliarImagen(i);
    });
}
ampliar.addEventListener("click", () => {
    ampliarImagen(-1);
});