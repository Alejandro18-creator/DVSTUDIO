import { vehiculosData } from "./datos/vehiculos.js";

const citas = JSON.parse(sessionStorage.getItem("citas")) || [];

function renderAgenda() {
  const tabla = document.getElementById("tablaAgenda");

  if (!tabla) return;

  if (citas.length === 0) {
    tabla.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center;">
                    No hay citas programadas.
                </td>
            </tr>
        `;

    return;
  }

  tabla.innerHTML = "";

  citas.forEach((cita, index) => {
    tabla.innerHTML += `
            <tr>
                <td>${cita.hora}</td>
                <td>${cita.cliente}</td>
                <td>${cita.vehiculo}</td>
                <td>${cita.patente}</td>
                <td>${cita.motivo}</td>
                <td>${cita.estado}</td>
                <td>
                    <button class="btn-eliminar" data-index="${index}">
                    Eliminar
                    </button>
                </td>
            </tr>
        `;
  });
}

function cargarHorasDisponibles() {
  const select = document.getElementById("horaCita");

  select.innerHTML = `
        <option value="">Seleccione una hora</option>
    `;

  for (let hora = 9; hora <= 18; hora++) {
    const texto = `${String(hora).padStart(2, "0")}:00`;

    select.innerHTML += `
            <option value="${texto}">
                ${texto}
            </option>
        `;
  }
}

function mostrarFormularioCita() {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
        <div class="modal-overlay">

            <div class="modal">

                <h2>Solicitud de Atención</h2>

                <div class="form-group">
    <label>Fecha</label>
    <input type="date" id="fechaCita">
</div>

<div class="form-group">
    <label>Hora</label>

    <select id="horaCita">
        <option value="">Seleccione una hora</option>
    </select>
</div>

                <div class="form-group">
                    <label>Cliente</label>
                    <input type="text" id="clienteCita">
                </div>

                <div class="form-group">
    <label>Teléfono</label>
    <input type="tel" id="telefonoCita">
</div>

<div class="form-group">
    <label>Correo Electrónico</label>
    <input type="email" id="emailCita">
</div>

                <div class="form-group">
    <label>Marca</label>

    <select id="marcaCita">
        <option value="">Seleccione una marca</option>
    </select>
</div>

<div class="form-group">
    <label>Modelo</label>

    <select id="modeloCita">
        <option value="">Seleccione una marca primero</option>
    </select>
</div>

                <div class="form-group">
                    <label>Patente</label>
                    <input type="text" id="patenteCita">
                </div>

                <div class="form-group">
                    <label>Motivo</label>
                    <textarea id="motivoCita"></textarea>
                </div>


                <div class="acciones-modal">
                    <button class="btn-secondary" id="btnCancelarCita">
                        Cancelar
                    </button>

                    <button class="btn-primary" id="btnGuardarCita">
                        Guardar
                    </button>
                </div>

            </div>

        </div>

    `,
  );
  cargarHorasDisponibles();

  const inputFecha = document.getElementById("fechaCita");

  const hoy = new Date().toISOString().split("T")[0];

  inputFecha.min = hoy;

  inputFecha.addEventListener("click", () => {
    if (typeof inputFecha.showPicker === "function") {
      inputFecha.showPicker();
    }
  });

  const selectMarca = document.getElementById("marcaCita");

  Object.keys(vehiculosData).forEach((marca) => {
    selectMarca.innerHTML += `
        <option value="${marca}">
            ${marca}
        </option>
    `;
  });

  const selectModelo = document.getElementById("modeloCita");

  selectMarca.addEventListener("change", () => {
    selectModelo.innerHTML = `
        <option value="">Seleccione un modelo</option>
    `;

    const modelos = vehiculosData[selectMarca.value] || [];

    modelos.forEach((modelo) => {
      selectModelo.innerHTML += `
            <option value="${modelo}">
                ${modelo}
            </option>
        `;
    });
  });

  document.getElementById("btnCancelarCita").addEventListener("click", () => {
    document.querySelector(".modal-overlay").remove();
  });
  document.getElementById("btnGuardarCita").addEventListener("click", () => {
    const cita = {
      telefono: document.getElementById("telefonoCita").value.trim(),

      email: document.getElementById("emailCita").value.trim(),

      hora: document.getElementById("horaCita").value,

      cliente: document.getElementById("clienteCita").value.trim(),

      marca: document.getElementById("marcaCita").value,

      modelo: document.getElementById("modeloCita").value,

      patente: document
        .getElementById("patenteCita")
        .value.trim()
        .toUpperCase(),

      motivo: document.getElementById("motivoCita").value.trim(),

      estado: "Pendiente",
    };

    if (!cita.hora || !cita.cliente) {
      alert("Debe ingresar al menos la hora y el cliente.");
      return;
    }

    citas.push(cita);

    sessionStorage.setItem("citas", JSON.stringify(citas));

    document.querySelector(".modal-overlay").remove();

    renderAgenda();
    document.querySelectorAll(".btn-eliminar").forEach((boton) => {
      boton.addEventListener("click", () => {
        const index = Number(boton.dataset.index);

        if (!confirm("¿Eliminar esta cita?")) return;

        citas.splice(index, 1);

        sessionStorage.setItem("citas", JSON.stringify(citas));

        renderAgenda();
      });
    });
  });
}

export function mostrarAgenda(contenido) {
  contenido.innerHTML = `

        <div class="topbar">

            <div>
                <h1>Agenda</h1>
                <p>Administración de citas del taller.</p>
            </div>

            <button class="btn-primary" id="btnNuevaCita">
    + Solicitud de Atención
</button>

        </div>

        <section class="panel">

            <h2>Citas programadas para hoy</h2>

            <table>

                <thead>
                    <tr>
                        <th>Hora</th>
                        <th>Cliente</th>
                        <th>Vehículo</th>
                        <th>Patente</th>
                        <th>Motivo</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody id="tablaAgenda"></tbody>

            </table>

        </section>

    `;
  renderAgenda();

  document
    .getElementById("btnNuevaCita")
    .addEventListener("click", mostrarFormularioCita);
}
