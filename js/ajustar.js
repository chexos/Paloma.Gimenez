function ajustar() {
    let ancho = window.innerWidth;
    let header = document.getElementById("header");
    header.style.height = 149 * ancho / 1920 + "px";
    let headerRedes = document.getElementsByClassName("header-redes");
    for (var i = 0; i < headerRedes.length; i++) {
        headerRedes[i].style.height = 60 * ancho / 1920 + "px";
    }
    let margenRedes = document.getElementById("margen-redes");
    let margenRedesClass = document.getElementsByClassName("margen-redes");
    let margenRed = document.getElementById("margen-red");
    let margenRedClass = document.getElementsByClassName("margen-red");
    if (ancho < 1280) {
        margenRedes.style.marginRight = 0 + "px";
        margenRedes.style.marginLeft = 30 * ancho / 360 + "px";
        for (var i = 0; i < margenRedesClass.length; i++) {
            margenRedesClass[i].style.marginRight = 0 + "px";
            margenRedesClass[i].style.marginLeft = 15 * ancho / 360 + "px";
        }
    } else if (ancho >= 1280) {
        margenRed.style.marginRight = 68.6 * ancho / 1920 + "px";
        margenRed.style.marginLeft = 0 + "px";
        for (var i = 0; i < margenRedClass.length; i++) {
            margenRedClass[i].style.marginRight = 34.3 * ancho / 1920 + "px";
            margenRedClass[i].style.marginLeft = 0 + "px";
        }
    }
    let logo = document.getElementById("logo");
    logo.style.height = 120 * ancho / 1920 + "px";
    if (ancho >= 1280) {
        logo.style.marginLeft = 68.6 * ancho / 1920 + "px";
    }
    let menu = document.getElementById("menu");
    menu.style.marginRight = 30 * ancho / 360 + "px";
    let menuMovil = document.getElementById("menuMovil");
    let menumovil = document.getElementById("menu-movil");
    if (locacion != undefined) {
        if (locacion == "campa%C3%B1as" || locacion == "obras-de-arte") {
            if (ancho < 1280) {
                menuMovil.style.backgroundColor = "rgb(44,44,44)";
            }
            else if (ancho >= 1280) {
                menuMovil.style.backgroundColor = "white";
                console.log(menumovil);
                for (var i = 0; i < menumovil.length; i++) {
                    console.log(i);
                    if (locacion == "campa%C3%B1as") {
                        if (i == 1)
                            menumovil[i].style.color =rgb(44,44,44);
                        else
                            menumovil[i].style.color =rgb(87,87,86);
                    } else if (locacion == "obras-de-arte") {
                        if (i == 3)
                            menumovil[i].style.color =rgb(44,44,44);
                        else
                            menumovil[i].style.color =rgb(87,87,86);
                    }
                }
            }
        }
    }
    if (ancho < 1280)
        menumovil.style.height =  60 * ancho / 1920 + "px";
    let enlacesMenuMovil = document.getElementsByClassName("menu-movil");
    for (var i = 0; i < enlacesMenuMovil.length; i++) {
        if (ancho < 1280) {
            enlacesMenuMovil[i].style.fontSize = 7 * ancho / 360 + "pt";
            if (i == 0)
                enlacesMenuMovil[i].style.marginTop = 17 * ancho / 360 + "px";
            enlacesMenuMovil[i].style.marginBottom = 17 * ancho / 360 + "px";
        } else if (ancho >= 1280) {
            enlacesMenuMovil[i].style.fontSize = 20 * ancho / 1920 + "pt";
            enlacesMenuMovil[i].style.margin = 0 + "px";
        }
    }
    let principal = document.getElementById("principal");
    principal.style.marginTop = 149 * ancho / 1920 + "px";
    let circulos = document.getElementById("circulos");
    if (circulos != undefined)
        circulos.style.gap = 5 * ancho / 360 + "px";
    let botonesCarrusel = document.getElementsByClassName("btn-carrusel");
    for (var i = 0; i < botonesCarrusel.length; i++) {
        botonesCarrusel[i].style.height = 6.5 * ancho / 360 + "px";
        botonesCarrusel[i].style.width = 6.5 * ancho / 360 + "px";
        botonesCarrusel[i].style.borderRadius = 25 * ancho / 360 + "px";
    }
    let marcaTuEstilo = document.getElementById("marca-tu-estilo");
    let marcarEstilo = document.getElementById("marcar-estilo");
    if (marcaTuEstilo != undefined && marcarEstilo != undefined) {
        marcaTuEstilo.style.paddingTop = 50 * ancho / 360 + "px";
        marcaTuEstilo.style.paddingBottom = 50 * ancho / 360 + "px";
        marcaTuEstilo.style.paddingRight = 55.6 * ancho / 360 + "px";
        marcaTuEstilo.style.paddingLeft = 55.6 * ancho / 360 + "px";
        marcarEstilo.style.marginBottom = 34.5 * ancho / 360 + "px";
    }
    let marcar = document.getElementById("marcar");
    if (marcar != undefined)
        marcar.style.fontSize = 86 * ancho / 1920 + "pt";
    let un = document.getElementById("un");
    if (un != undefined) {
        un.style.fontSize = 36 * ancho / 1920 + "pt";
        un.style.marginTop = 38 * ancho / 1920 + "px";
        un.style.marginLeft = 25 * ancho / 1920 + "px";
    }
    let estilo = document.getElementById("estilo");
    if (estilo != undefined) {
        estilo.style.fontSize = 50 * ancho / 1920 + "pt";
        estilo.style.marginLeft = 235 * ancho / 1920 + "px";
    }
    let parrafoIzquierda = document.getElementById("parrafo-izquierda");
    let parrafoDerecha = document.getElementById("parrafo-derecha");
    if (parrafoIzquierda != undefined && parrafoDerecha != undefined) {
        if (ancho < 1280) {
            parrafoIzquierda.style.fontSize = 9 * ancho / 360 + "pt";
            parrafoDerecha.style.fontSize = 6.2 * ancho / 360 + "pt";
        } else if (ancho >= 1280) {
            parrafoIzquierda.style.fontSize = 36 * ancho / 1920 + "pt";
            parrafoDerecha.style.fontSize = 25 * ancho / 1920 + "pt";
        }
    }
    let formulario = document.getElementById("formulario");
    if (formulario != undefined) {
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
    }
    let labelFormulario = document.getElementsByClassName("formulario");
    for (var i = 0; i < labelFormulario.length; i++) {
        labelFormulario[i].style.fontSize = 26 * ancho / 1920 + "pt";
    }
    let margenArticuloFormulario = document.getElementsByClassName("margen-formulario");
    for (var i = 0; i < margenArticuloFormulario.length; i++) {
        if (ancho < 1280) {
            margenArticuloFormulario[i].style.marginBottom = 17 * ancho / 360 + "px";
        } else if (ancho >= 1280) {
            margenArticuloFormulario[i].style.marginBottom = 0 + "px";
        }
    }
    let margenFormulario = document.getElementById("margen-formulario");
    if (margenFormulario != undefined) {
        margenFormulario.style.marginBottom = 54 * ancho / 1920 + "px";
        margenFormulario.style.gap = 52.5 * ancho / 1920 + "px";
    }
    let boton = document.getElementById("boton");
    if (boton != undefined) {
        if (ancho < 1280) {
            boton.style.marginTop = 27 * ancho / 360 + "px";
        } else if (ancho >= 1280) {
            boton.style.marginTop = 105 * ancho / 1920 + "px";
        }
    }
    let botonEnviar = document.getElementById("boton-enviar");
    if (botonEnviar != undefined) {
        botonEnviar.style.height = 15.5 * ancho / 360 + "px";
        botonEnviar.style.width = 64 * ancho / 360 + "px";
        botonEnviar.style.borderRadius = 5 * ancho / 360 + "px";
        botonEnviar.style.fontSize = 7 * ancho / 360 + "pt";
    }
    let footer = document.getElementById("footer");
    if (ancho < 1280) {
        footer.style.paddingTop = 32.5 * ancho / 360 + "px";
    } else if (ancho >= 1280) {
        footer.style.paddingTop = 88 * ancho / 1920 + "px";
    }
    let logoPiePagina = document.getElementById("logo-pie-pagina");
    logoPiePagina.style.height = 120 * ancho / 1920 + "px";
    let paddingFooter = document.getElementsByClassName("padding-footer");
    for (var i = 0; i < paddingFooter.length; i++) {
        if (ancho < 1280) {
            paddingFooter[i].style.paddingBottom = 32.5 * ancho / 360 + "px";
            paddingFooter[i].style.paddingRight = 32.5 * ancho / 360 + "px";
            paddingFooter[i].style.paddingLeft = 32.5 * ancho / 360 + "px";
        } else if (ancho >= 1280) {
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
    for (var i = 0; i < redireccionamientoPiePagina.length; i++) {
        if (ancho < 1280) {
            redireccionamientoPiePagina[i].style.fontSize = 5 * ancho / 360 + "pt";
        } else if (ancho >= 1280) {
            redireccionamientoPiePagina[i].style.fontSize = 16 * ancho / 1920 + "pt";
        }
    }
    let iconosRedireccionamiento = document.getElementsByClassName("iconos-redireccionamiento");
    for (var i = 0; i < iconosRedireccionamiento.length; i++) {
        if (ancho < 1280) {
            iconosRedireccionamiento[i].style.height = 12 * ancho / 360 + "px";
        } else if (ancho >= 1280 && ancho < 1920) {
            iconosRedireccionamiento[i].style.height = 25 * ancho / 1280 + "px";
        } else if (ancho >= 1920) {
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
    let ampliar = document.getElementById("ampliar");
    if (ampliar != undefined) {
        ampliar.style.top = header.getBoundingClientRect().height + "px";
    }
    let margenProducto = document.getElementById("margen-producto");
    if (margenProducto != undefined) {
        if (ancho < 1280) {
            margenProducto.style.marginTop = 55.6 * ancho / 360 + "px";
            margenProducto.style.marginBottom = 55.6 * ancho / 360 + "px";
            margenProducto.style.marginRight = 51.326 * ancho / 360 + "px";
            margenProducto.style.marginLeft = 51.326 * ancho / 360 + "px";
            margenProducto.style.gap = 5.21 * ancho / 360 + "px";
        } else if (ancho >= 1280) {
            margenProducto.style.margin = 344 * ancho / 1920 + "px";
            margenProducto.style.gap = 26 * ancho / 1920 + "px";
        }
    }
    let resaltado = document.getElementsByClassName("resaltado");
    if (resaltado != undefined) {
        for (var i = 0; i < resaltado.length; i++) {
            resaltado[i].style.fontSize = 3 * ancho / 360 + "pt";
            resaltado[i].style.paddingTop = 5 * ancho / 360 + "px";
            resaltado[i].style.paddingBottom = 5 * ancho / 360 + "px";
        }
    }
    let margen = document.getElementById("margen");
    if (margen != undefined) {
        if (ancho < 1280) {
            margen.style.marginTop = 55.6 * ancho / 360 + "px";
            margen.style.marginBottom = 55.6 * ancho / 360 + "px";
            margen.style.marginLeft = 51.326 * ancho / 360 + "px";
            margen.style.marginRight = 51.326 * ancho / 360 + "px";
            //margen.style.gap = 5.21 * ancho / 360 + "px";
        } else if (ancho >= 1280) {
            margen.style.marginTop = 344 * ancho / 1920 + "px";
            margen.style.marginBottom = 344 * ancho / 1920 + "px";
            margen.style.marginLeft = 214 * ancho / 1920 + "px";
            margen.style.marginRight = 214 * ancho / 1920 + "px";
            //margen.style.gap = 26 * ancho / 1920 + "px";
        }
    }
    let multimediaAmpliado = document.getElementById("multimediaAmpliado");
    if (multimediaAmpliado != undefined) {
        let rect = multimediaAmpliado.getBoundingClientRect();
        let cerrar = document.getElementById("cerrar");
        let btnIzq = document.getElementById("altoMultimediaIzq");
        let btnDer = document.getElementById("altoMultimediaDer");
        if (ancho < 1920) {
            //cerrar.style.right = rect.left - 100 + "px";
            btnIzq.style.left = rect.left - 100 + "px";
            btnDer.style.right = rect.left - 100 + "px";
        } else if (ancho >= 1920) {
            //cerrar.style.right = rect.left - 100 + "px";
            btnIzq.style.left = rect.left - 200 + "px";
            btnDer.style.right = rect.left - 200 + "px";
        }
    }
    let cerrar = document.getElementById("cerrar");
    if (cerrar != undefined) {
        if (ancho < 1280) {
            cerrar.style.transform = "scale(1.5)";
        } else if (ancho >= 1280) {

        }
    }
    let cerrarIzquierda = document.getElementById("cerrar-izq");
    let cerrarDerecha = document.getElementById("cerrar-der");
    if (cerrarIzquierda != undefined) {
        if (ancho < 1280) {
            cerrarIzquierda.style.left = 2 * ancho / 360 + "px";
            cerrarDerecha.style.right = 6 * ancho / 360 + "px";
        } else if (ancho >= 1280) {

        }
    }
    let pasar = document.getElementsByClassName("pasar");
    if (pasar != undefined) {
        for (var i = 0; i < pasar.length; i++) {

        }
    }
    let seccionParrafo = document.getElementsByClassName("seccion-parrafo");
    if (seccionParrafo != undefined) {
        for (var i = 0; i < seccionParrafo.length; i++) {
            if (ancho < 1280) {
                seccionParrafo[i].style.marginLeft = 5.25 * ancho / 360 + "px";
                seccionParrafo[i].style.marginRight = 5.25 * ancho / 360 + "px";
            } else if (ancho >= 1280) {
                seccionParrafo[i].style.marginLeft = 26 * ancho / 1920 + "px";
                seccionParrafo[i].style.marginRight = 26 * ancho / 1920 + "px";
            }
        }
    }
    let parrafo = document.getElementsByClassName("parrafo");
    if (parrafo != undefined) {
        for (var i = 0; i < parrafo.length; i++) {
            if (ancho < 1280) {
                parrafo[i].style.marginTop = 5.25 * ancho / 360 + "px";
                parrafo[i].style.marginBottom = 5.25 * ancho / 360 + "px";
            } else if (ancho >= 1280) {
                parrafo[i].style.marginTop = 26 * ancho / 1920 + "px";
                parrafo[i].style.marginBottom = 26 * ancho / 1920 + "px";
            }
        }
    }
    let textoParrafo = document.getElementsByClassName("texto-parrafo");
    if (textoParrafo != undefined) {
        for (var i = 0; i < textoParrafo.length; i++) {
            if (ancho < 1280) {
                textoParrafo[i].style.fontSize = 4.5 * ancho / 360 + "pt";
            } else if (ancho >= 1280) {
                textoParrafo[i].style.fontSize = 16 * ancho / 1920 + "pt";
            }
        }
    }
    let headerTitulos = document.getElementsByClassName("header-titulos");
    if (headerTitulos != undefined) {
        for (var i = 0; i < headerTitulos.length; i++) {
            if (ancho < 1280) {
                headerTitulos[i].style.marginBottom = 5.25 * ancho / 360 + "px";
            } else if (ancho >= 1280) {
                headerTitulos[i].style.marginBottom = 26 * ancho / 1920 + "px";
            }
        }
    }
    let titulosTexto = document.getElementsByClassName("titulos-texto");
    if (titulosTexto != undefined) {
        for (var i = 0; i < titulosTexto.length; i++) {
            if (ancho < 1280) {
                titulosTexto[i].style.fontSize = 10 * ancho / 360 + "pt";
            } else if (ancho >= 1280) {
                titulosTexto[i].style.fontSize = 36 * ancho / 1920 + "pt";
            }
        }
    }
    let textoInformativo = document.getElementsByClassName("texto-informativo");
    if (textoInformativo != undefined) {
        for (var i = 0; i < textoInformativo.length; i++) {
            if (ancho < 1280) {
                textoInformativo[i].style.fontSize = 3.5 * ancho / 360 + "pt";
            } else if (ancho >= 1280) {
                textoInformativo[i].style.fontSize = 14 * ancho / 1920 + "pt";
            }
        }
    }
    let margenMovil = document.getElementsByClassName("margen-movil");
    let margenEscritorio = document.getElementsByClassName("margen-escritorio")
    if (margenMovil != undefined) {
        if (ancho < 1920) {
            for (var i = 0; i < margenMovil.length; i++) {
                margenMovil[i].style.marginBottom = 11.75 * ancho / 360 + "px";
            }
        } else if (ancho >= 1920) {
            for (var i = 0; i < margenMovil.length; i++) {
                margenMovil[i].style.marginBottom = 0 + "px";
            }
            for (var i = 0; i < margenEscritorio.length; i++) {
                margenEscritorio[i].style.marginBottom = 59 * ancho / 1920 + "px";
            }
        }
    }
    let tituloModa = document.getElementById("titulo-moda");
    if (tituloModa != undefined) {
        if (ancho < 1280) {
            tituloModa.style.fontSize = 10 * ancho / 360 + "pt";
            tituloModa.style.marginBottom = 14.5 * ancho / 360 + "px";

        } else if (ancho >= 1280) {
            tituloModa.style.fontSize = 48 * ancho / 1920 + "pt";
            tituloModa.style.marginBottom = 85 * ancho / 1920 + "px";
        }
    }
    let margenModa = document.getElementById("margen-moda");
    if (margenModa != undefined) {
        if (ancho < 1280) {
            margenModa.style.paddingRight = 4 * ancho / 360 + "px";
            margenModa.style.paddingLeft = 4 * ancho / 360 + "px";
            margenModa.style.paddingBottom = 7 * ancho / 360 + "px";
        } else if (ancho >= 1280) {
            margenModa.style.paddingRight = 0 + "px";
            margenModa.style.paddingLeft = 0 + "px";
            margenModa.style.paddingBottom = 18 * ancho / 1920 + "px";
        }
    }
    let estilos = document.getElementsByClassName("estilo");
    if (estilos != undefined) {
        for (var i = 0; i < estilos.length; i++) {
            if (ancho < 1280) {
                estilos[i].style.fontSize = 5 * ancho / 360 + "pt";
            } else if (ancho >= 1280) {
                estilos[i].style.fontSize = 30 * ancho / 1920 + "pt";
            }
        }
    }
    let descripcion = document.getElementById("descripcion");
    if (descripcion != undefined) {
        if (ancho < 1280) {
            descripcion.style.fontSize = 8 * ancho / 360 + "pt";
            descripcion.style.marginBottom = 14.5 * ancho / 360 + "px";
        } else if (ancho >= 1280) {
            descripcion.style.fontSize = 37 * ancho / 1920 + "pt";
            descripcion.style.marginBottom = 85 * ancho / 1920 + "px";
        }
    }
    let galeriaModas = document.getElementById("galeria-modas");
    if (galeriaModas != undefined) {
        if (ancho < 1280) {
            galeriaModas.style.gap = 5.25 * ancho / 360 + "px";
        } else if (ancho >= 1280) {
            galeriaModas.style.gap = 26 * ancho / 1920 + "px";
        }
    }
    let creditos = document.getElementById("creditos");
    if (creditos != undefined) {
        if (ancho < 1280) {
            creditos.style.fontSize = 12 * ancho / 360 + "pt";
            creditos.style.marginTop = 14.5 * ancho / 360 + "px";
            creditos.style.marginBottom = 14.5 * ancho / 360 + "px";
        } else if (ancho >= 1280) {
            creditos.style.fontSize = 56 * ancho / 1920 + "pt";
            creditos.style.marginTop = 85 * ancho / 1920 + "px";
            creditos.style.marginBottom = 85 * ancho / 1920 + "px";
        }
    }
    let informacionCreditos = document.getElementsByClassName("informacion-creditos");
    if (informacionCreditos != undefined) {
        for (var i = 0; i < informacionCreditos.length; i++) {
            if (ancho < 1280) {
                informacionCreditos[i].style.fontSize = 6 * ancho / 360 + "pt";
            } else if (ancho >= 1280) {
                informacionCreditos[i].style.fontSize = 30 * ancho / 1920 + "pt";
            }
        }
    }
        if (ancho < 1280) {

        } else if (ancho >= 1280) {
            
        }
        if (ancho < 1280) {

        } else if (ancho >= 1280 && ancho < 1920) {
            
        } else if (ancho >= 1920) {
            
        }
}
window.addEventListener("resize", function() {
    ajustar();
});
window.addEventListener("load", function() {
    ajustar();
});