export function mostrarFormularioProducto(producto = {}) {

    return `

    <div class="modal-overlay">

        <div class="modal">

            <h2>Nuevo Producto</h2>

            <div class="grupo-formulario">

                <label>Código</label>

                <input
                    type="text"
                    id="codigoProducto"
                    value="${producto.codigo || ""}">

            </div>

            <div class="grupo-formulario">

                <label>Nombre</label>

                <input
                    type="text"
                    id="nombreProducto"
                    value="${producto.nombre || ""}">

            </div>

            <div class="grupo-formulario">

                <label>Categoría</label>

                <input
                    type="text"
                    id="categoriaProducto"
                    value="${producto.categoria || ""}">

            </div>

            <div class="grupo-formulario">

                <label>Stock Inicial</label>

                <input
                    type="number"
                    id="stockProducto"
                    value="${producto.stock || 0}">

            </div>

            <div class="grupo-formulario">

                <label>Precio Compra</label>

                <input
                    type="number"
                    id="precioCompraProducto"
                    value="${producto.precioCompra || 0}">

            </div>

            <div class="grupo-formulario">

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