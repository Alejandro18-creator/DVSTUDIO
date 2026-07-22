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

  citas.forEach((cita) => {
    tabla.innerHTML += `
            <tr>
                <td>${cita.hora}</td>
                <td>${cita.cliente}</td>
                <td>${cita.vehiculo}</td>
                <td>${cita.patente}</td>
                <td>${cita.estado}</td>
            </tr>
        `;
  });
}

function mostrarFormularioCita() {
  document.body.insertAdjacentHTML(
    "beforeend",
    `

        <div class="modal-overlay">

            <div class="modal">

                <h2>Nueva Cita</h2>

                <div class="form-group">
                    <label>Hora</label>
                    <input type="time" id="horaCita">
                </div>

                <div class="form-group">
                    <label>Cliente</label>
                    <input type="text" id="clienteCita">
                </div>

                <div class="form-group">
                    <label>Vehículo</label>
                    <input type="text" id="vehiculoCita">
                </div>

                <div class="form-group">
                    <label>Patente</label>
                    <input type="text" id="patenteCita">
                </div>

                <div class="form-group">
                    <label>Motivo</label>
                    <textarea id="motivoCita"></textarea>
                </div>

                <div class="form-group">
                    <label>Estado</label>

                    <select id="estadoCita">
                        <option>Reservada</option>
                        <option>Confirmada</option>
                        <option>Cancelada</option>
                    </select>
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

  document.getElementById("btnCancelarCita").addEventListener("click", () => {
    document.querySelector(".modal-overlay").remove();
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
    + Nueva Cita
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
                        <th>Estado</th>
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
