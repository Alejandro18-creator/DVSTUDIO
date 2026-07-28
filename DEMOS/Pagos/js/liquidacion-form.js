export function mostrarFormularioLiquidacion(liquidacion = {}) {

    const trabajadores =
        JSON.parse(sessionStorage.getItem("trabajadores")) || [];

    return `

        <div class="modal-overlay">

            <div class="modal">

                <h2>
                    ${liquidacion.id ? "Editar Liquidación" : "Nueva Liquidación"}
                </h2>

                <div class="formulario-produccion">

                    <div class="fila-formulario">

                        <label>Trabajador</label>

                        <select id="trabajador">

                            <option value="">-- Seleccionar trabajador --</option>

                            ${trabajadores.map(trabajador => `
                                <option
                                    value="${trabajador.nombre} ${trabajador.apellidos}"
                                    ${liquidacion.trabajador === `${trabajador.nombre} ${trabajador.apellidos}` ? "selected" : ""}
                                >
                                    ${trabajador.nombre} ${trabajador.apellidos}
                                </option>
                            `).join("")}

                        </select>

                    </div>

                    <div class="fila-formulario">

                        <label>Mes trabajado</label>

                        <input
                            type="month"
                            id="mes"
                            value="${liquidacion.mes || ""}">

                    </div>

                    <div class="fila-formulario">

                        <label>Anticipo</label>

                        <input
                            type="text"
                            id="anticipo"
                            value="${liquidacion.anticipo || ""}"
                            inputmode="numeric">

                    </div>

                    <div class="fila-formulario">

                        <label>Sueldo mínimo</label>

                        <input
                            type="text"
                            id="sueldoMinimo"
                            value="${liquidacion.sueldoMinimo || "529000"}"
                            inputmode="numeric">

                    </div>

                </div>

                <div class="acciones-formulario">

                    <button
                        id="btnGenerarLiquidacion"
                        class="btn-principal">

                        Generar Liquidación

                    </button>

                    <button id="btnCancelarLiquidacion">

                        Cancelar

                    </button>

                </div>

            </div>

        </div>

    `;

}