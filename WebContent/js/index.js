let marcaTuEstilo = document.getElementById("marcaTuEstilo");
let artIz = document.getElementById("art-iz");
function alturaMarca() {
	marcaTuEstilo.style.height = artIz.clientHeight + "px";
}
window.addEventListener("resize", function() {
	alturaMarca();
});
window.addEventListener("DOMContentLoaded", function() {
	alturaMarca();
});