export function mostrarFormularioProducto(producto = {}) {
  return `

    <div class="modal-overlay">

        <div
    class="modal"
    id="modalProducto">

            <h2>Nuevo Producto</h2>

            <div class="form-group">

                <label>Código</label>

                <input
                    type="text"
                    id="codigoProducto"
                    value="${producto.codigo || ""}">

            </div>

            <div class="form-group">

                <label>Nombre</label>

                <input
                    type="text"
                    id="nombreProducto"
                    value="${producto.nombre || ""}">

            </div>

            <div class="form-group">

    <label>Categoría</label>

    <select id="categoriaProducto">

        <option value="">Seleccione una categoría</option>

        <option value="Herramientas">Herramientas</option>
        <option value="Electricidad">Electricidad</option>
        <option value="Ferretería">Ferretería</option>
        <option value="Pinturas">Pinturas</option>
        <option value="Repuestos">Repuestos</option>
        <option value="Insumos">Insumos</option>
        <option value="Limpieza">Limpieza</option>
        <option value="Seguridad">Seguridad</option>
        <option value="Oficina">Oficina</option>
        <option value="Otros">Otros</option>

    </select>

</div>

            <div class="form-group">

                <label>Stock Inicial</label>

                <input
                    type="number"
                    id="stockProducto"
                    value="${producto.stock || 0}">

            </div>

            <div class="form-group">

                <label>Precio Compra</label>

                <input
                    type="number"
                    id="precioCompraProducto"
                    value="${producto.precioCompra || 0}">

            </div>

            <div class="form-group">

                <label>Precio Venta</label>

                <input
                    type="number"
                    id="precioVentaProducto"
                    value="${producto.precioVenta || 0}">

            </div>

            <div class="acciones-formulario">

                <button
                    id="btnGuardarProducto"
                    class="btn-principal">

                    Guardar

                </button>

                <button
                    id="btnCancelarProducto"
                    class="btn-secundario">

                    Cancelar

                </button>

            </div>

        </div>

    </div>

    `;
}
