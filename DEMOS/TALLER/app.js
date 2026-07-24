import { mostrarPanelPrincipal } from "./js/panel.js";
import { mostrarAgenda } from "./js/agenda.js";
import { mostrarClientes } from "./js/clientes.js";
import { mostrarVehiculos } from "./js/vehiculos.js";
import { mostrarOrdenes } from "./js/ordenes.js";
import { mostrarInventario } from "./js/inventario.js";

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
      mostrarVehiculos(contenido);
      break;

    case "ordenes":
      mostrarOrdenes(contenido);
      break;

    case "inventario":
  mostrarInventario(contenido);
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
