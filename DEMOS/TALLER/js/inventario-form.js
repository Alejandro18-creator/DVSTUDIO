export function mostrarFormularioProducto(producto = {}) {
  return `
    <div class="modal-overlay">

      <div class="modal" id="modalProducto">

        <h2>${
          producto.producto ? "Editar Producto" : "Nuevo Producto"
        }</h2>

        <div class="form-group">
          <label>Producto</label>
          <input
            type="text"
            id="producto"
            value="${producto.producto || ""}">
        </div>

        <div class="form-group">
          <label>Categoría</label>
          <input
            type="text"
            id="categoria"
            value="${producto.categoria || ""}">
        </div>

        <div class="form-group">
          <label>Stock</label>
          <input
            type="number"
            id="stock"
            min="0"
            value="${producto.stock ?? ""}">
        </div>

        <div class="form-group">
          <label>Stock Mínimo</label>
          <input
            type="number"
            id="stockMinimo"
            min="0"
            value="${producto.stockMinimo ?? ""}">
        </div>

        <div class="form-group">
          <label>Precio</label>
          <input
            type="number"
            id="precio"
            min="0"
            value="${producto.precio ?? ""}">
        </div>

        <div class="acciones-modal">

          <button
            class="btn-primary"
            id="guardarProducto">
            Guardar
          </button>

          <button
            class="btn-secondary"
            id="cancelarProducto">
            Cancelar
          </button>

        </div>

      </div>

    </div>
  `;
}