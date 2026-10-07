// ===== MODO OSCURO =====
// Busco el botón por su id
var botonTema = document.getElementById("btnTema");

// Cuando hago clic, agrego o quito la clase "oscuro" del body
botonTema.addEventListener("click", function () {
  document.body.classList.toggle("oscuro");

  // Cambio el texto del botón según el tema actual
  if (document.body.classList.contains("oscuro")) {
    botonTema.textContent = "Modo claro";
  } else {
    botonTema.textContent = "Modo oscuro";
  }
});

// ===== FECHA =====
// Creo un objeto Date con la fecha de hoy
var hoy = new Date();

// Fecha completa en español, por ejemplo: "martes, 6 de octubre de 2026"
var opciones = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
document.getElementById("fecha").textContent = hoy.toLocaleDateString("es-ES", opciones);

// Año para el pie de página
document.getElementById("anio").textContent = hoy.getFullYear();
