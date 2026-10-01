// Funcionalidad: registrar un nuevo contacto

function agregarContacto(nombre, telefono, correo) {
  contactos.push({ id: siguienteId++, nombre: nombre, telefono: telefono, correo: correo });
  listarContactos();
  mostrarMensaje("Contacto registrado correctamente.", "exito");
}

document.getElementById("form-contacto").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const correo = document.getElementById("correo").value.trim();

  if (nombre.length < 3) {
    mostrarMensaje("El nombre debe tener al menos 3 caracteres.", "error");
    return;
  }
  if (!/^[0-9]{9}$/.test(telefono)) {
    mostrarMensaje("El teléfono debe tener exactamente 9 dígitos.", "error");
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    mostrarMensaje("Ingrese un correo electrónico válido.", "error");
    return;
  }

  agregarContacto(nombre, telefono, correo);
  this.reset();
});