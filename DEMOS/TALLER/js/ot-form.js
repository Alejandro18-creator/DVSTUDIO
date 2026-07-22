import { vehiculos } from "./vehiculos.js";

export function mostrarFormularioOT() {
  return `
    <div class="modal-overlay">

      <div class="modal" id="modalOT">

        <h2>Nueva Orden de Trabajo</h2>

        <div class="form-group">
          <label>Vehículo</label>

          <select id="vehiculoOT">

            <option value="">Seleccione un vehículo</option>

            ${vehiculos
              .map(
                (v, index) => `
                  <option value="${index}">
                    ${v.patente} - ${v.marca} ${v.modelo}
                  </option>
                `
              )
              .join("")}

          </select>
        </div>

        <div class="form-group">
          <label>Cliente</label>
          <input
            type="text"
            id="clienteOT"
            readonly
          >
        </div>

        <div class="form-group">
          <label>Patente</label>
          <input
            type="text"
            id="patenteOT"
            readonly
          >
        </div>

        <div class="form-group">
          <label>Marca / Modelo</label>
          <input
            type="text"
            id="modeloOT"
            readonly
          >
        </div>

        <div class="form-group">
          <label>Kilometraje</label>
          <input
            type="number"
            id="kilometrajeOT"
            placeholder="Ej.: 125000"
          >
        </div>

        <div class="form-group">
          <label>Motivo de ingreso</label>
          <textarea
            id="motivoOT"
            rows="3"
            placeholder="Describa el motivo del ingreso del vehículo..."
          ></textarea>
        </div>

        <div class="acciones">

          <button class="btn-secondary" id="btnCancelarOT">
            Cancelar
          </button>

          <button class="btn-primary" id="btnGuardarOT">
            Guardar
          </button>

        </div>

      </div>

    </div>
  `;
}