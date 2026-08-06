export function mostrarFormularioMovimiento() {
  return `

    <div class="modal-overlay">

        <div
            class="modal"
            id="modalMovimiento">

            <h2>Nuevo Movimiento</h2>

            <div class="form-group">

                <label>Fecha</label>

                <input
                    type="date"
                    id="fechaMovimiento">

            </div>

            <div class="form-group">

                <label>Producto</label>

                <select id="productoMovimiento">

                    <option value="">Seleccione un producto</option>

                </select>

            </div>
            <div class="acciones-formulario">

    <button
        id="btnGuardarMovimiento"
        class="btn-principal">

        Guardar

    </button>

    <button
        id="btnCancelarMovimiento"
        class="btn-secundario">

        Cancelar

    </button>

</div>

        </div>

    </div>

    `;
}
