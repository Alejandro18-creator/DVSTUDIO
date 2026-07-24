
export function mostrarFormularioProducto() {
  return `
    <div class="modal-overlay">

      <div class="modal" id="modalProducto">

        <h2>Nuevo Producto</h2>

        <div class="form-group">
          <label>Producto</label>
          <input type="text" id="producto">
        </div>

        <div class="form-group">
          <label>Categoría</label>
          <input type="text" id="categoria">
        </div>

        <div class="form-group">
          <label>Stock</label>
          <input type="number" id="stock" min="0">
        </div>

        <div class="form-group">
          <label>Stock Mínimo</label>
          <input type="number" id="stockMinimo" min="0">
        </div>

        <div class="form-group">
          <label>Precio</label>
          <input type="number" id="precio" min="0">
        </div>

        <div class="acciones-modal">
          <button class="btn btn-primary" id="guardarProducto">
            Guardar
          </button>

          <button class="btn btn-secondary" id="cancelarProducto">
            Cancelar
          </button>
        </div>

      </div>

    </div>
  `;
}