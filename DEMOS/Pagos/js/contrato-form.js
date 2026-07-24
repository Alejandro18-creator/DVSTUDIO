export function mostrarFormularioContrato(contrato = {}) {
  return `

        <div class="modal-overlay">

            <div class="modal">

                <h2>${contrato.id ? "Editar Contrato" : "Nuevo Contrato"}</h2>

                <div class="form-group">
                    <label>Trabajador</label>
                    <select id="trabajador">
                        <option>Seleccione...</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>Empresa</label>
                    <input
                        type="text"
                        id="empresa"
                        value="${contrato.empresa || ""}">
                </div>

                <div class="form-group">
                    <label>Cargo</label>
                    <input
                        type="text"
                        id="cargo"
                        value="${contrato.cargo || ""}">
                </div>

                <div class="form-group">
                    <label>Fecha Inicio</label>
                    <input
                        type="date"
                        id="fechaInicio"
                        value="${contrato.fechaInicio || ""}">
                </div>

                <div class="form-group">
                    <label>Fecha Término</label>
                    <input
                        type="date"
                        id="fechaTermino"
                        value="${contrato.fechaTermino || ""}">
                </div>

                <div class="acciones-formulario">

                    <button id="btnGuardarContrato" class="btn-principal">
                        Guardar
                    </button>

                    <button id="btnCancelarContrato">
                        Cancelar
                    </button>

                </div>

            </div>

        </div>

    `;
}
