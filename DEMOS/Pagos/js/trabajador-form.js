export function mostrarFormularioTrabajador(trabajador = {}) {
  return `
    <div class="modal-overlay">

      <div class="modal">

        <h2>${trabajador.rut ? "Editar Trabajador" : "Nuevo Trabajador"}</h2>

        <div class="form-group">
          <label>RUT</label>
          <input type="text" id="rut" value="${trabajador.rut || ""}">
        </div>

        <div class="form-group">
          <label>Nombre</label>
          <input type="text" id="nombre" value="${trabajador.nombre || ""}">
        </div>

        <div class="form-group">
          <label>Apellidos</label>
          <input type="text" id="apellidos" value="${trabajador.apellidos || ""}">
        </div>

        <div class="form-group">
          <label>Fecha de Nacimiento</label>
          <input type="date" id="fechaNacimiento" value="${trabajador.fechaNacimiento || ""}">
        </div>

        <div class="form-group">
          <label>Dirección</label>
          <input type="text" id="direccion" value="${trabajador.direccion || ""}">
        </div>

        <div class="form-group">
          <label>Teléfono</label>
          <input type="text" id="telefono" value="${trabajador.telefono || ""}">
        </div>

        <div class="form-group">
          <label>Correo</label>
          <input type="email" id="correo" value="${trabajador.correo || ""}">
        </div>

        <div class="form-group">
          <label>Cargo</label>
          <input type="text" id="cargo" value="${trabajador.cargo || ""}">
        </div>

        <div class="form-group">
          <label>Empresa</label>
          <input type="text" id="empresa" value="${trabajador.empresa || ""}">
        </div>

        <div class="form-group">
          <label>Fecha de Ingreso</label>
          <input type="date" id="fechaIngreso" value="${trabajador.fechaIngreso || ""}">
        </div>

        <div class="acciones-formulario">
          <button id="btnGuardarTrabajador">Guardar</button>
          <button id="btnCancelarTrabajador">Cancelar</button>
        </div>

      </div>

    </div>
  `;
}
