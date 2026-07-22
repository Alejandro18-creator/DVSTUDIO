import { vehiculos } from "./vehiculos.js";
import { mostrarFormularioOT } from "./ot-form.js";

const ordenes = JSON.parse(sessionStorage.getItem("ordenes")) || [];

function renderOrdenes() {
  const tabla = document.getElementById("tablaOT");

  if (!tabla) return;

  if (ordenes.length === 0) {
    tabla.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center;">
          No hay órdenes de trabajo registradas.
        </td>
      </tr>
    `;
    return;
  }

  tabla.innerHTML = "";

  ordenes.forEach((ot) => {
    tabla.innerHTML += `
      <tr>
        <td>${ot.numero}</td>
        <td>${ot.patente}</td>
        <td>${ot.cliente}</td>
        <td>${ot.estado}</td>
        <td>
          <button class="btn-secondary">Ver</button>
        </td>
      </tr>
    `;
  });
}

function abrirFormulario() {
  document.body.insertAdjacentHTML("beforeend", mostrarFormularioOT());

  const cmbVehiculo = document.getElementById("vehiculoOT");

  cmbVehiculo.addEventListener("change", () => {
    if (cmbVehiculo.value === "") return;

    const vehiculo = vehiculos[Number(cmbVehiculo.value)];

    document.getElementById("clienteOT").value = vehiculo.cliente;
    document.getElementById("patenteOT").value = vehiculo.patente;
    document.getElementById("modeloOT").value =
      `${vehiculo.marca} ${vehiculo.modelo}`;
  });

  document.getElementById("btnCancelarOT").addEventListener("click", () => {
    document.querySelector(".modal-overlay").remove();
  });

  document.getElementById("btnGuardarOT").addEventListener("click", () => {
    if (cmbVehiculo.value === "") {
      alert("Seleccione un vehículo.");
      return;
    }

    ordenes.push({
      numero: `OT-${String(ordenes.length + 1).padStart(4, "0")}`,

      cliente: document.getElementById("clienteOT").value,

      patente: document.getElementById("patenteOT").value,

      modelo: document.getElementById("modeloOT").value,

      kilometraje: document.getElementById("kilometrajeOT").value,

      motivo: document.getElementById("motivoOT").value,

      estado: "Abierta",
    });

    sessionStorage.setItem("ordenes", JSON.stringify(ordenes));

    document.querySelector(".modal-overlay").remove();

    renderOrdenes();
  });
}

export function mostrarOrdenes(contenido) {
  contenido.innerHTML = `
    <div class="topbar">

      <div>
        <h1>Órdenes de Trabajo</h1>
        <p>Administra las órdenes de trabajo del taller.</p>
      </div>

      <button class="btn-primary" id="btnNuevaOT">
        + Nueva OT
      </button>

    </div>

    <div class="tabla-container">

      <table>

        <thead>
          <tr>
            <th>N° OT</th>
            <th>Patente</th>
            <th>Cliente</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody id="tablaOT"></tbody>

      </table>

    </div>
  `;

  renderOrdenes();

  document
    .getElementById("btnNuevaOT")
    .addEventListener("click", abrirFormulario);
}

export { ordenes };
