import { mostrarPanel } from "./js/panel.js";
import { mostrarProductos } from "./js/productos.js";
import { mostrarMovimientos } from "./js/movimientos.js";

document.getElementById("btnPanel").addEventListener("click", mostrarPanel);

document
  .getElementById("btnProductos")
  .addEventListener("click", mostrarProductos);

document
  .getElementById("btnMovimientos")
  .addEventListener("click", mostrarMovimientos);

mostrarPanel();
