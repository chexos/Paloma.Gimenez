let footer = document.getElementById("footer");
function pxfooter() {
	footer.style.height = footer.clientHeight / 2 + 2 + "px";
}
document.addEventListener("resize", function() {
	pxfooter();
});
document.addEventListener("DOMContentLoaded", function() {
	pxfooter();
});