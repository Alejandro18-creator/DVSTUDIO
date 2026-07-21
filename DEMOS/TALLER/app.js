import { mostrarPanelPrincipal } from "./js/panel.js";
import { mostrarAgenda } from "./js/agenda.js";
import { mostrarClientes } from "./js/clientes.js";

const contenido = document.getElementById("contenido");

function cargarVista(vista) {
  switch (vista) {
    case "panel":
      mostrarPanelPrincipal(contenido);
      break;

    case "agenda":
      mostrarAgenda(contenido);
      break;

    case "clientes":
      mostrarClientes(contenido);
      break;

    case "vehiculos":
      // mostrarVehiculos();
      break;

    case "ordenes":
      // mostrarOrdenes();
      break;

    case "inventario":
      // mostrarInventario();
      break;

    case "reportes":
      // mostrarReportes();
      break;
  }
}

const enlaces = document.querySelectorAll("[data-view]");

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", function (e) {
    e.preventDefault();

    const vista = this.dataset.view;

    cargarVista(vista);
  });
});

cargarVista("panel");
