// Punto de entrada: muestra la lista al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  if (typeof listarContactos === "function") {
    listarContactos();
  }
});