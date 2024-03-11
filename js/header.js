let menu = document.getElementById("menu");
let menuMovil = document.getElementById("menuMovil");
let menumovil = document.getElementsByClassName("menu-movil");
function moverMenu(e) {
    if (!menuMovil.classList.contains("visibility"))
        menuMovil.classList.add("visibility");
    else
        menuMovil.classList.remove("visibility");
}
menumovil[0].addEventListener("click", moverMenu);
menumovil[1].addEventListener("click", moverMenu);
menumovil[2].addEventListener("click", moverMenu);
menumovil[3].addEventListener("click", moverMenu);
menu.addEventListener("click", moverMenu);