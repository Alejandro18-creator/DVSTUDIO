import { mostrarPanel } from "./js/panel.js";
import { mostrarProductos } from "./js/productos.js";

document.getElementById("btnPanel").addEventListener("click", mostrarPanel);

document
  .getElementById("btnProductos")
  .addEventListener("click", mostrarProductos);

mostrarPanel();
