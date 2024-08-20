let ampliar = document.getElementById("ampliar");
let imagenAmpliada = document.getElementById("imagenAmpliada");
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
imagen[0] = "Tamaño - Producto - 603x670 - 1.png";
imagen[1] = "Tamaño - Producto - 603x670 - 2.png";
imagen[2] = "Tamaño - Producto - 603x670 - 3.png";
imagen[3] = "Tamaño - Producto - 603x670 - 4.png";
imagen[4] = "Tamaño - Producto - 603x670 - 5.png";
imagen[5] = "Tamaño - Producto - 603x670 - 6.png";
imagen[6] = "Tamaño - Producto - 603x670 - 7.png";
imagen[7] = "Tamaño - Producto - 603x670 - 8.png";
imagen[8] = "Tamaño - Producto - 603x670 - 9.png";
imagen[9] = "Tamaño - Producto - 603x670 - 10.png";
imagen[10] = "Tamaño - Producto - 603x670 - 11.png";
imagen[11] = "Tamaño - Producto - 603x670 - 12.png";
imagen[12] = "Tamaño - Producto - 603x670 - 13.png";
imagen[13] = "Tamaño - Producto - 603x670 - 14.png";
imagen[14] = "Tamaño - Producto - 603x670 - 15.png";
imagen[15] = "Tamaño - Producto - 603x670 - 16.png";
imagen[16] = "Tamaño---Producto---603x670---gif---1.gif";
imagen[17] = "Tamaño---Producto---603x670---gif---2.gif";
imagen[18] = "Tamaño---Producto---603x670---gif---3.gif";
imagen[19] = "Tamaño---Producto---603x670---gif---4.gif";
imagen[20] = "Tamaño---Producto---603x670---gif---5.gif";
function intercambiarImagen(a) {
    estado = true;
    if (a == 1) {
        console.log(imagenAmpliada.src);
        console.log("file:///C:/Users/sgglm/OneDrive/Escritorio/sebastián/Proyectos/Paloma.Gimenez/Paloma.Gimenez/"
                    + imagen[0]);
        if (imagenAmpliada.src == imagen[0]) {
            console.log(imagenAmpliada.src);
        } else {
            console.log(imagen[0]);
        }
        img = imagenAmpliada.src.slice(0, imagenAmpliada.src.length - 4);
        console.log(img);
        img = img.slice(img.length - 1, img.length);
        console.log(img);
        imagenAmpliada.src = "imágenes/" + imagen[0];
    } else if (a == 2) {
        img = imagenAmpliada.src.slice(0, imagenAmpliada.src.length - 4);
        img = img.slice(img.length - 1, img.length);
        imagenAmpliada.src = "imágenes/" + imagen[0];
    }
}
altoImagenIzq.addEventListener("click", () => intercambiarImagen(1));
altoImagenDer.addEventListener("click", () => intercambiarImagen(2));
function asignarAltoImagen() {
    console.log(imagenAmpliada.offsetHeight);
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
    console.log(estado);
    if (estado == true) {
        estado = false;
        return;
    }
    console.log(ampliar.classList.contains("opacidad"));
    console.log(a);
    if (a != - 1) {
        ampliar.classList.add("opacidad");
        console.log(imagenAmpliada.src);
        console.log(sesion[a].src);
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
        console.log(i);
        ampliarImagen(i);
    });
}
ampliar.addEventListener("click", () => {
    console.log(0);
    ampliarImagen(-1);
});