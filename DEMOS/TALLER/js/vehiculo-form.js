export function mostrarFormularioVehiculo(vehiculo = {}, clientes = []) {
  return `

    <div class="modal-overlay">

      <div class="modal" id="modalVehiculo">

        <h2>Nuevo Vehículo</h2>

        <div class="form-group">
          <label>Patente</label>
          <input
            type="text"
            id="patenteVehiculo"
            value="${vehiculo.patente || ""}">
        </div>

        <div class="form-group">
          <label>Marca</label>
          <input
            type="text"
            id="marcaVehiculo"
            value="${vehiculo.marca || ""}">
        </div>

        <div class="form-group">
          <label>Modelo</label>
          <input
            type="text"
            id="modeloVehiculo"
            value="${vehiculo.modelo || ""}">
        </div>

        <div class="form-group">
          <label>Año</label>
          <input
            type="number"
            id="anioVehiculo"
            value="${vehiculo.anio || ""}">
        </div>

        <div class="form-group">

  <label>Cliente</label>

  <select id="clienteVehiculo">

    <option value="">Seleccione un cliente</option>

    ${clientes
      .map(
        (cliente) => `
          <option
            value="${cliente.nombre}"
            ${vehiculo.cliente === cliente.nombre ? "selected" : ""}>
            ${cliente.nombre}
          </option>
        `,
      )
      .join("")}

  </select>

</div>

        <div class="acciones">

          <button
            class="btn-secondary"
            id="btnCancelarVehiculo">

            Cancelar

          </button>

          <button
            class="btn-primary"
            id="btnGuardarVehiculo">

            Guardar Vehículo

          </button>

        </div>

      </div>

    </div>

  `;
}
