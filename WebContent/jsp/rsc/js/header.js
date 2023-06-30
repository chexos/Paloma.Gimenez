let navMovil = document.getElementById("nav-btn");
let navLateral = document.getElementById("nav-lateral");
let span = document.getElementsByTagName("span");
navMovil.addEventListener("click", menu);
function menu() {
	if (navLateral.style.left == "0%") {
		span[0].style.transform = "rotate(0deg)";
		span[0].style.top = "0";
		span[1].style.opacity = "1";
		span[2].style.top = "0";
		span[2].style.transform = "rotate(0deg)";
		navLateral.style.left = "100%";
	} else {
		span[0].style.transform = "rotate(45deg)";
		span[0].style.top = "5px";
		span[1].style.opacity = "0";
		span[2].style.top = "-5px";
		span[2].style.transform = "rotate(-45deg)";
		navLateral.style.left = "0%";
	}
}