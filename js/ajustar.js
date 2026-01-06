function resize() {
    let ancho = window.innerWidth;
    let header = document.getElementById("header");
    header.style.height = 149 * ancho / 1920 + "px";
    let headerRedes = document.getElementsByClassName("header-redes");
    for (var i = 0; i < headerRedes.length; i++) {
        headerRedes[i].style.height = 60 * ancho / 1920 + "px";
    }
    let logo = document.getElementById("logo");
    logo.style.height = 120 * ancho / 1920 + "px";
    let menuMovil = document.getElementById("menu-movil");
    if (ancho < 1280)
        menuMovil.style.height = 20 * ancho / 360 + "px";
    let enlacesMenuMovil = document.getElementsByClassName("menu-movil");
    if (ancho < 1280) {
        for (var i = 0; i < enlacesMenuMovil.length; i++) {
            enlacesMenuMovil[i].style.fontSize = 7 * ancho / 360 + "pt";
            if (i == 0)
                enlacesMenuMovil[i].style.marginTop = 17 * ancho / 360 + "px";
            enlacesMenuMovil[i].style.marginBottom = 17 * ancho / 360 + "px";
        }
    } else if (ancho >= 1280) {
        for (var i = 0; i < enlacesMenuMovil.length; i++) {
            enlacesMenuMovil[i].style.fontSize = 20 * ancho / 1920 + "pt";
            enlacesMenuMovil[i].style.margin = 0 + "px";
        }
    }
    let principal = document.getElementById("principal");
    principal.style.marginTop = 149 * ancho / 1920 + "px";
    let circulos = document.getElementById("circulos");
    circulos.style.gap = 5 * ancho / 360 + "px";
    let botonesCarrusel = document.getElementsByClassName("btn-carrusel");
    for (var i = 0; i < botonesCarrusel.length; i++) {
        botonesCarrusel[i].style.height = 6.5 * ancho / 360 + "px";
        botonesCarrusel[i].style.width = 6.5 * ancho / 360 + "px";
        botonesCarrusel[i].style.borderRadius = 25 * ancho / 360 + "px";
    }
    let marcaTuEstilo = document.getElementById("marca-tu-estilo");
    let marcarEstilo = document.getElementById("marcar-estilo");
    if (ancho < 1280) {
        marcaTuEstilo.style.paddingTop = 50 * ancho / 360 + "px";
        marcaTuEstilo.style.paddingBottom = 50 * ancho / 360 + "px";
        marcaTuEstilo.style.paddingRight = 55.6 * ancho / 360 + "px";
        marcaTuEstilo.style.paddingLeft = 55.6 * ancho / 360 + "px";
        marcarEstilo.style.marginBottom = 34.5 * ancho / 360 + "px";
    } else if (ancho >= 1280) {
        marcaTuEstilo.style.paddingTop = 50 * ancho / 360 + "px";
        marcaTuEstilo.style.paddingBottom = 50 * ancho / 360 + "px";
        marcaTuEstilo.style.paddingRight = 55.6 * ancho / 360 + "px";
        marcaTuEstilo.style.paddingLeft = 55.6 * ancho / 360 + "px";
        marcarEstilo.style.marginBottom = 34.5 * ancho / 360 + "px";
    }
    let marcar = document.getElementById("marcar");
    marcar.style.fontSize = 86 * ancho / 1920 + "pt";
    let un = document.getElementById("un");
    un.style.fontSize = 36 * ancho / 1920 + "pt";
    un.style.marginTop = 38 * ancho / 1920 + "px";
    un.style.marginLeft = 25 * ancho / 1920 + "px";
    let estilo = document.getElementById("estilo");
    estilo.style.fontSize = 50 * ancho / 1920 + "pt";
    estilo.style.marginLeft = 235 * ancho / 1920 + "px";
    let parrafoIzquierda = document.getElementById("parrafo-izquierda");
    let parrafoDerecha = document.getElementById("parrafo-derecha");
    if (ancho < 1280) {
        parrafoIzquierda.style.fontSize = 9 * ancho / 360 + "pt";
        parrafoDerecha.style.fontSize = 6.2 * ancho / 360 + "pt";
    } else if (ancho >= 1280) {
        parrafoIzquierda.style.fontSize = 36 * ancho / 1920 + "pt";
        parrafoDerecha.style.fontSize = 25 * ancho / 1920 + "pt";
    }
    let formulario = document.getElementById("formulario");
    if (ancho < 1280) {
        formulario.style.paddingTop = 36.5 * ancho / 360 + "px";
        formulario.style.paddingBottom = 36.5 * ancho / 360 + "px";
        formulario.style.paddingRight = 57.5 * ancho / 360 + "px";
        formulario.style.paddingLeft = 57.5 * ancho / 360 + "px";
    } else if (ancho >= 1280) {
        formulario.style.paddingTop = 150 * ancho / 1920 + "px";
        formulario.style.paddingBottom = 150 * ancho / 1920 + "px";
        formulario.style.paddingRight = 225.5 * ancho / 1920 + "px";
        formulario.style.paddingLeft = 225.5 * ancho / 1920 + "px";
    }
    let labelFormulario = document.getElementsByClassName("formulario");
    for (var i = 0; i < labelFormulario.length; i++) {
        labelFormulario[i].style.fontSize = 26 * ancho / 1920 + "pt";
    }
    let margenArticuloFormulario = document.getElementsByClassName("margen-formulario");
    if (ancho < 1280) {
        for (var i = 0; i < margenArticuloFormulario.length; i++) {
            margenArticuloFormulario[i].style.marginBottom = 17 * ancho / 360 + "px";
        }
    } else if (ancho >= 1280) {
        for (var i = 0; i < margenArticuloFormulario.length; i++) {
            margenArticuloFormulario[i].style.marginBottom = 0 + "px";
        }
    }
    let margenFormulario = document.getElementById("margen-formulario");
    margenFormulario.style.marginBottom = 54 * ancho / 1920 + "px";
    margenFormulario.style.gap = 52.5 * ancho / 1920 + "px";
    let boton = document.getElementById("boton");
    if (ancho < 1280) {
        boton.style.marginTop = 27 * ancho / 360 + "px";
    } else if (ancho >= 1280) {
        boton.style.marginTop = 105 * ancho / 1920 + "px";
    }
    let botonEnviar = document.getElementById("boton-enviar");
    botonEnviar.style.height = 15.5 * ancho / 360 + "px";
    botonEnviar.style.width = 64 * ancho / 360 + "px";
    botonEnviar.style.borderRadius = 5 * ancho / 360 + "px";
    botonEnviar.style.fontSize = 7 * ancho / 360 + "pt";
    let footer = document.getElementById("footer");
    if (ancho < 1280) {
        footer.style.paddingTop = 32.5 * ancho / 360 + "px";
    } else if (ancho >= 1280) {
        footer.style.paddingTop = 88 * ancho / 1920 + "px";
    }
    //falta el logo pie de pagina
    let logoPiePagina = document.getElementById("logo-pie-pagina");
    let paddingFooter = document.getElementsByClassName("padding-footer");
    if (ancho < 1280) {
        for (var i = 0; i < paddingFooter.length; i++) {
            paddingFooter[i].style.paddingBottom = 32.5 * ancho / 360 + "px";
            paddingFooter[i].style.paddingRight = 32.5 * ancho / 360 + "px";
            paddingFooter[i].style.paddingLeft = 32.5 * ancho / 360 + "px";
        }
    } else if (ancho >= 1280) {
        for (var i = 0; i < paddingFooter.length; i++) {
            paddingFooter[i].style.paddingBottom = 104 * ancho / 1920 + "px";
            paddingFooter[i].style.paddingRight = 225.5 * ancho / 1920 + "px";
            paddingFooter[i].style.paddingLeft = 225.5 * ancho / 1920 + "px";
        }
    }
    let paloma = document.getElementById("paloma");
    paloma.style.fontSize = 36 * ancho / 1920 + "pt";
    let enlacesPiePagina = document.getElementsByClassName("enlaces-pie-pagina");
    for (var i = 0; i < enlacesPiePagina.length; i++) {
        enlacesPiePagina[i].style.fontSize = 26 * ancho / 1920 + "pt";
    }
    let margenPiePagina = document.getElementsByClassName("margen-pie-pagina");
    for (var i = 0; i < margenPiePagina.length; i++) {
        margenPiePagina[i].style.marginBottom = 53.5 * ancho / 1920 + "px";
    }
    let enlaceWhatsapp = document.getElementById("enlace-whatsapp");
    enlaceWhatsapp.style.marginBottom = 36 * ancho / 1920 + "px";
    let redireccionamientoPiePagina = document.getElementsByClassName("redireccionamiento-pie-pagina");
    if (ancho < 1280) {
        for (var i = 0; i < redireccionamientoPiePagina.length; i++) {
            redireccionamientoPiePagina[i].style.fontSize = 5 * ancho / 360 + "pt";
        }
    } else if (ancho >= 1280) {
        for (var i = 0; i < redireccionamientoPiePagina.length; i++) {
            redireccionamientoPiePagina[i].style.fontSize = 16 * ancho / 1920 + "pt";
        }
    }
    let iconosRedireccionamiento = document.getElementsByClassName("iconos-redireccionamiento");
    if (ancho < 1280) {
        for (var i = 0; i < iconosRedireccionamiento.length; i++) {
            iconosRedireccionamiento[i].style.height = 12 * ancho / 360 + "px";
        }
    } else if (ancho >= 1280 && ancho < 1920) {
        for (var i = 0; i < iconosRedireccionamiento.length; i++) {
            iconosRedireccionamiento[i].style.height = 25 * ancho / 1280 + "px";
        }
    } else if (ancho >= 1920) {
        for (var i = 0; i < iconosRedireccionamiento.length; i++) {
            iconosRedireccionamiento[i].style.height = "auto";
        }
    }
    let pieDePagina = document.getElementById("pie-de-pagina");
    pieDePagina.style.height = 80 * ancho / 1920 + "px";
    let palomaGimenez = document.getElementById("paloma-gimenez");
    if (ancho < 1280) {
        palomaGimenez.style.fontSize = 5 * ancho / 360 + "pt";
    } else if (ancho >= 1280 && ancho < 1920) {
        palomaGimenez.style.fontSize = 11 * ancho / 1280 + "pt";
    } else if (ancho >= 1920) {
        palomaGimenez.style.fontSize = 16 * ancho / 1920 + "pt";
    }
    if (ancho < 1280) {

    } else if (ancho >= 1280 && ancho < 1920) {
        
    } else if (ancho >= 1920) {
        
    }
}
window.addEventListener("resize", resize);
document.addEventListener("DOMContentLoaded", resize);