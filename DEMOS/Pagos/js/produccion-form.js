export function mostrarFormularioProduccion(produccion = {}) {

    return `

        <div class="modal-overlay">

            <div class="modal">

                <h2>${produccion.id ? "Editar Producción" : "Nueva Producción"}</h2>

                <div class="formulario-produccion">

    <div class="fila-formulario">
        <label>Trabajador</label>
        <select id="trabajador">
            <option value="">-- Seleccionar trabajador --</option>
        </select>
    </div>

    <div class="fila-formulario">
        <label>Labor</label>
        <select id="labor">
            <option value="">-- Seleccionar labor --</option>
        </select>
    </div>

    <div class="fila-formulario">
        <label>Campo / Fundo</label>
        <input
            type="text"
            id="campo"
            value="${produccion.campo || ""}">
    </div>

    <div class="fila-formulario">
        <label>Fecha</label>
        <input
            type="date"
            id="fecha"
            value="${produccion.fecha || ""}">
    </div>

    <div class="fila-formulario">
        <label>Cantidad</label>
        <input
            type="number"
            id="cantidad"
            value="${produccion.cantidad || ""}">
    </div>

    <div class="fila-formulario">
        <label>Valor</label>
        <input
            type="number"
            id="valor"
            value="${produccion.valor || ""}">
    </div>

    <div class="fila-formulario">
        <label>Observación</label>
        <textarea
            id="observacion"
            rows="3"
            placeholder="Ingrese una observación...">${produccion.observacion || ""}</textarea>
    </div>

</div>

                <div class="acciones-formulario">

                    <button
                        id="btnGuardarProduccion"
                        class="btn-principal">
                        Guardar
                    </button>

                    <button id="btnCancelarProduccion">
                        Cancelar
                    </button>

                </div>

            </div>

        </div>

    `;

}