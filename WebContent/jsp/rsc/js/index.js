let marcaTuEstilo = document.getElementById("marcaTuEstilo");
let artIz = document.getElementById("art-iz");
function pxmarca() {
	marcaTuEstilo.style.height = artIz.clientHeight + "px";
}
document.addEventListener("resize", function() {
	pxmarca();
});
document.addEventListener("DOMContentLoaded", function() {
	pxmarca();
});