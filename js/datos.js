// Estado global de la agenda
let contactos = [];
let siguienteId = 1;

// Muestra un mensaje de validación o confirmación (tipo: "exito" | "error")
function mostrarMensaje(texto, tipo) {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = texto;
  mensaje.className = tipo;
  setTimeout(function () {
    mensaje.textContent = "";
    mensaje.className = "";
  }, 3000);
}