let menu = document.getElementById("menu");
let menuMovil = document.getElementById("menuMovil");
function moverMenu(e) {
    e.preventDefault();
    if (!menuMovil.classList.contains("visibility"))
        menuMovil.classList.add("visibility");
    else
        menuMovil.classList.remove("visibility");
}
menu.addEventListener("click", moverMenu);