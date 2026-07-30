import { mostrarPanel } from "./js/panel.js";
import { mostrarTrabajadores } from "./js/trabajadores.js";
import { mostrarContratos } from "./js/contratos.js";
import { mostrarProduccion } from "./js/produccion.js";
import { mostrarLiquidaciones } from "./js/liquidaciones.js";
import { mostrarFiniquitos } from "./js/finiquitos.js";
import { mostrarProductos } from "./Inventario/productos.js";

document.getElementById("btnPanel").addEventListener("click", mostrarPanel);

document
  .getElementById("btnTrabajadores")
  .addEventListener("click", mostrarTrabajadores);

document
  .getElementById("btnContratos")
  .addEventListener("click", mostrarContratos);

document
  .getElementById("btnProduccion")
  .addEventListener("click", mostrarProduccion);

document
  .getElementById("btnLiquidaciones")
  .addEventListener("click", mostrarLiquidaciones);

document
  .getElementById("btnFiniquitos")
  .addEventListener("click", mostrarFiniquitos);

mostrarPanel();
