// Funcionalidad: listar contactos y ver el detalle de uno

function crearBoton(texto, accion, id, clase) {
  const boton = document.createElement("button");
  boton.type = "button";
  boton.textContent = texto;
  boton.dataset.accion = accion;
  boton.dataset.id = id;
  boton.className = clase;
  return boton;
}

function listarContactos() {
  const contenedor = document.getElementById("lista-contactos");
  contenedor.innerHTML = "";

  if (contactos.length === 0) {
    const vacio = document.createElement("p");
    vacio.className = "vacio";
    vacio.textContent = "No hay contactos registrados.";
    contenedor.appendChild(vacio);
    return;
  }

  contactos.forEach(function (c) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta";

    const titulo = document.createElement("h3");
    titulo.textContent = c.nombre;

    const telefono = document.createElement("p");
    telefono.textContent = "Tel: " + c.telefono;

    tarjeta.append(
      titulo,
      telefono,
      crearBoton("Ver", "ver", c.id, "btn-ver"),
      crearBoton("Eliminar", "eliminar", c.id, "btn-eliminar")
    );
    contenedor.appendChild(tarjeta);
  });
}

function verDetalle(id) {
  const detalle = document.getElementById("detalle");
  detalle.innerHTML = "";

  const c = contactos.find(function (x) {
    return x.id === id;
  });
  if (!c) return;

  const titulo = document.createElement("h2");
  titulo.textContent = "Detalle del contacto";
  const nombre = document.createElement("p");
  nombre.textContent = "Nombre: " + c.nombre;
  const telefono = document.createElement("p");
  telefono.textContent = "Teléfono: " + c.telefono;
  const correo = document.createElement("p");
  correo.textContent = "Correo: " + c.correo;
  detalle.append(titulo, nombre, telefono, correo);
}

document
  .getElementById("lista-contactos")
  .addEventListener("click", function (e) {
    if (e.target.dataset.accion === "ver") {
      verDetalle(Number(e.target.dataset.id));
    }
  });