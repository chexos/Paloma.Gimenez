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
let imagen = new Array(21);
imagen[0] = "Tama%C3%B1o-Producto-603x670-1.png";
imagen[1] = "Tama%C3%B1o-Producto-603x670-2.png";
imagen[2] = "Tama%C3%B1o-Producto-603x670-3.png";
imagen[3] = "Tama%C3%B1o-Producto-603x670-4.png";
imagen[4] = "Tama%C3%B1o-Producto-603x670-5.png";
imagen[5] = "Tama%C3%B1o-Producto-603x670-6.png";
imagen[6] = "Tama%C3%B1o-Producto-603x670-7.png";
imagen[7] = "Tama%C3%B1o-Producto-603x670-8.png";
imagen[8] = "Tama%C3%B1o-Producto-603x670-9.gif";
imagen[9] = "Tama%C3%B1o-Producto-603x670-10.png";
imagen[10] = "Tama%C3%B1o-Producto-603x670-11.png";
imagen[11] = "Tama%C3%B1o-Producto-603x670-12.gif";
imagen[12] = "Tama%C3%B1o-Producto-603x670-13.gif";
imagen[13] = "Tama%C3%B1o-Producto-603x670-14.png";
imagen[14] = "Tama%C3%B1o-Producto-603x670-15.gif";
imagen[15] = "Tama%C3%B1o-Producto-603x670-16.png";
imagen[16] = "Tama%C3%B1o-Producto-603x670-17.gif";
imagen[17] = "Tama%C3%B1o-Producto-603x670-18.png";
imagen[18] = "Tama%C3%B1o-Producto-603x670-19.png";
imagen[19] = "Tama%C3%B1o-Producto-603x670-20.png";
function intercambiarImagen(a) {
    estado = true;
    nombreImagen = imagenAmpliada.src.slice(49, imagenAmpliada.src.length);
    for (let i = 0; i < imagen.length; i++) {
        if (imagen[i] == nombreImagen) {
            if (a == 1) {
                if (i == 0) {
                    imagenAmpliada.src = cambiarImagen + imagen[imagen.length - 2];
                } else {
                    imagenAmpliada.src = cambiarImagen + imagen[i - 1];
                }
            } else if (a == 2) {
                if (i == imagen.length - 2) {
                    imagenAmpliada.src = cambiarImagen + imagen[0];
                }
                else {
                    imagenAmpliada.src = cambiarImagen + imagen[i + 1];
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