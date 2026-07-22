import { mostrarFormularioVehiculo } from "./vehiculo-form.js";
import { clientes } from "./clientes.js";

const vehiculos = JSON.parse(sessionStorage.getItem("vehiculos")) || [];

function renderVehiculos() {
  const lista = document.getElementById("listaVehiculos");

  if (!lista) return;

  lista.innerHTML = "";

  vehiculos.forEach((vehiculo, indice) => {
    lista.innerHTML += `
      <tr>
        <td>${vehiculo.patente}</td>
        <td>${vehiculo.marca}</td>
        <td>${vehiculo.modelo}</td>
        <td>${vehiculo.anio}</td>
        <td>${vehiculo.cliente || "-"}</td>

        <td>

          <button
            class="btn-secondary btnEditar"
            data-indice="${indice}">
            Editar
          </button>

          <button
            class="btn-primary btnEliminar"
            data-indice="${indice}">
            Eliminar
          </button>

        </td>

      </tr>
    `;
  });

  document.querySelectorAll(".btnEliminar").forEach((boton) => {
    boton.addEventListener("click", () => {
      const indice = Number(boton.dataset.indice);

      vehiculos.splice(indice, 1);

      sessionStorage.setItem("vehiculos", JSON.stringify(vehiculos));

      renderVehiculos();
    });
  });

  document.querySelectorAll(".btnEditar").forEach((boton) => {
    boton.addEventListener("click", () => {
      const indice = Number(boton.dataset.indice);

      abrirFormulario(vehiculos[indice], indice);
    });
  });
}

function abrirFormulario(vehiculo = {}, indice = null) {
  document.body.insertAdjacentHTML(
    "beforeend",
    mostrarFormularioVehiculo(vehiculo, clientes),
  );

  const modal = document.getElementById("modalVehiculo");

  if (indice !== null) {
    modal.dataset.indice = indice;
  }

  const btnCancelar = document.getElementById("btnCancelarVehiculo");

  btnCancelar.addEventListener("click", () => {
    document.querySelector(".modal-overlay").remove();
  });

  const btnGuardar = document.getElementById("btnGuardarVehiculo");

  btnGuardar.addEventListener("click", () => {
    const patente = document
      .getElementById("patenteVehiculo")
      .value.trim()
      .toUpperCase();

    if (!patente) {
      alert("Debe ingresar la patente.");
      return;
    }

    const existe = vehiculos.some((v, i) => {
      return v.patente === patente && i !== Number(modal.dataset.indice);
    });

    if (existe) {
      alert("Ya existe un vehículo con esa patente.");
      return;
    }

    const vehiculoNuevo = {
      patente,

      marca: document.getElementById("marcaVehiculo").value.trim(),

      modelo: document.getElementById("modeloVehiculo").value.trim(),

      anio: document.getElementById("anioVehiculo").value.trim(),

      cliente: document.getElementById("clienteVehiculo").value,
    };

    if (modal.dataset.indice !== undefined) {
      vehiculos[modal.dataset.indice] = vehiculoNuevo;

      sessionStorage.setItem("vehiculos", JSON.stringify(vehiculos));
    } else {
      vehiculos.push(vehiculoNuevo);
    }
    sessionStorage.setItem("vehiculos", JSON.stringify(vehiculos));

    renderVehiculos();

    document.querySelector(".modal-overlay").remove();
  });
}

export function mostrarVehiculos(contenido) {
  contenido.innerHTML = `

    <div class="topbar">

      <div>
        <h1>Vehículos</h1>
        <p>Administración de vehículos del taller.</p>
      </div>

      <button
        class="btn-primary"
        id="btnNuevoVehiculo">

        + Nuevo Vehículo

      </button>

    </div>

    <section class="panel">

      <h2>Listado de vehículos</h2>

      <table>

        <thead>

          <tr>

            <th>Patente</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Año</th>
            <th>Cliente</th>
            <th>Acciones</th>

          </tr>

        </thead>

        <tbody id="listaVehiculos">

        </tbody>

      </table>

    </section>

  `;

  document.getElementById("btnNuevoVehiculo").addEventListener("click", () => {
    abrirFormulario();
  });

  renderVehiculos();
}

export { vehiculos };
