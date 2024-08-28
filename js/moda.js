document.addEventListener("DOMContentLoaded", function() {
    let parrafo = document.getElementsByClassName("parrafo");
    let alto = document.getElementById("alto");
    for (let i = 0; i < parrafo.length; i++) {
        parrafo[i].style.height = alto.clientHeight + "px";
        console.log(i);
    }
});