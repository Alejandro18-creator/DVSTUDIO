export function mostrarFormularioCliente(cliente = {}) {
  return `

        <div class="modal-overlay">

            <div class="modal" id="modalCliente">

                <h2>Nuevo Cliente</h2>

                <div class="form-group">
                    <label>Nombre Completo</label>
                    <input
    type="text"
    id="nombreCliente"
    value="${cliente.nombre || ""}">
                </div>

                <div class="form-group">
                    <label>Teléfono</label>
                    <input
    type="text"
    id="telefonoCliente"
    value="${cliente.telefono || ""}">
                </div>

                <div class="form-group">
                    <label>Correo</label>
                    <input
    type="email"
    id="correoCliente"
    value="${cliente.correo || ""}">
                </div>

                <div class="form-group">
                    <label>Dirección</label>
                    <input
    type="text"
    id="direccionCliente"
    value="${cliente.direccion || ""}">
                </div>

                <div class="acciones">

                    <button class="btn-secondary" id="btnCancelarCliente">
                        Cancelar
                    </button>

                    <button type="button" class="btn-primary" id="btnGuardarCliente">
                        Guardar Cliente
                    </button>

                </div>

            </div>

        </div>

    `;
}
