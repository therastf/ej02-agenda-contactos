// Funcionalidad: eliminar contactos

function eliminarContacto(id) {
  const c = contactos.find(function (x) {
    return x.id === id;
  });
  if (!c) return;

  if (!confirm("¿Eliminar a " + c.nombre + "?")) return;

  contactos = contactos.filter(function (x) {
    return x.id !== id;
  });
  document.getElementById("detalle").innerHTML = "";
  listarContactos();
  mostrarMensaje("Contacto eliminado.", "exito");
}

document
  .getElementById("lista-contactos")
  .addEventListener("click", function (e) {
    if (e.target.dataset.accion === "eliminar") {
      eliminarContacto(Number(e.target.dataset.id));
    }
  });