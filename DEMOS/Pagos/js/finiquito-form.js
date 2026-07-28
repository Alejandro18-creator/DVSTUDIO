import { cerrarModal } from "./modal.js";

export function mostrarFormularioFiniquito(onGuardar) {
  const trabajadores = JSON.parse(sessionStorage.getItem("trabajadores")) || [];

  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";

  overlay.innerHTML = `
        <div class="modal">

            <h2>Nuevo Finiquito</h2>

            <div class="grupo-formulario">
                <label>Trabajador</label>
                <select id="finiquitoTrabajador">
                    <option value="">Seleccione un trabajador</option>

                    ${trabajadores
                      .map(
                        (t) => `
                        <option value="${t.nombre}">
                            ${t.nombre}
                        </option>
                    `,
                      )
                      .join("")}

                </select>
            </div>

            <div class="grupo-formulario">
                <label>Fecha de ingreso</label>
                <input
                    type="date"
                    id="finiquitoIngreso"
                    readonly
                >
            </div>

            <div class="grupo-formulario">
                <label>Fecha de término</label>
                <input
                    type="date"
                    id="finiquitoTermino"
                >
            </div>

            <div class="grupo-formulario">
                <label>Causal de término</label>

                <select id="finiquitoCausal">

                    <option value="">
                        Seleccione...
                    </option>

                    <option>Renuncia voluntaria</option>
                    <option>Mutuo acuerdo</option>
                    <option>Vencimiento del plazo</option>
                    <option>Conclusión del trabajo</option>
                    <option>Necesidades de la empresa</option>
                    <option>Despido por incumplimiento</option>

                </select>

            </div>

            <div class="grupo-formulario">
                <label>Último sueldo imponible</label>

                <input
                    type="number"
                    id="finiquitoSueldo"
                    min="0"
                    value="0"
                >
            </div>

            <div class="grupo-formulario">
                <label>Otros haberes</label>

                <input
                    type="number"
                    id="finiquitoHaberes"
                    min="0"
                    value="0"
                >
            </div>

            <div class="grupo-formulario">
                <label>Otros descuentos</label>

                <input
                    type="number"
                    id="finiquitoDescuentos"
                    min="0"
                    value="0"
                >
            </div>

            <div class="grupo-formulario">
                <label>Observaciones</label>

                <textarea
                    id="finiquitoObservaciones"
                    rows="4"
                ></textarea>
            </div>

            <div class="acciones-formulario">
                <button id="btnGuardarFiniquito">
                    Generar
                </button>

                <button id="btnCancelarFiniquito">
                    Cancelar
                </button>
            </div>

        </div>
    `;

  document.body.appendChild(overlay);

  const trabajadorSelect = overlay.querySelector("#finiquitoTrabajador");

  const fechaIngreso = overlay.querySelector("#finiquitoIngreso");

  trabajadorSelect.addEventListener("change", () => {
    const trabajador = trabajadores.find(
      (t) => t.nombre === trabajadorSelect.value,
    );

    fechaIngreso.value = trabajador?.fechaIngreso || "";
  });

  overlay
    .querySelector("#btnCancelarFiniquito")
    .addEventListener("click", () => cerrarModal(overlay));

  overlay
    .querySelector("#btnGuardarFiniquito")
    .addEventListener("click", () => {
      onGuardar({
        trabajador: trabajadorSelect.value,

        fechaIngreso: fechaIngreso.value,

        fechaTermino: overlay.querySelector("#finiquitoTermino").value,

        causal: overlay.querySelector("#finiquitoCausal").value,

        sueldo: overlay.querySelector("#finiquitoSueldo").value,

        haberes: overlay.querySelector("#finiquitoHaberes").value,

        descuentos: overlay.querySelector("#finiquitoDescuentos").value,

        observaciones: overlay.querySelector("#finiquitoObservaciones").value,
      });

      cerrarModal(overlay);
    });
}
