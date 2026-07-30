export function mostrarFormularioFiniquito(finiquito = {}) {

    const trabajadores =
        JSON.parse(sessionStorage.getItem("trabajadores")) || [];

    return `

        <div class="modal-overlay finiquito">

            <div class="modal finiquito-modal">

                <h2>
                    ${finiquito.id ? "Editar Finiquito" : "Nuevo Finiquito"}
                </h2>

                <div class="formulario-produccion">

                    <div class="fila-formulario">

                        <label>Trabajador</label>

                        <select id="trabajador">

                            <option value="">-- Seleccionar trabajador --</option>

                            ${trabajadores.map(trabajador => `
                                <option
                                    value="${trabajador.nombre} ${trabajador.apellidos}"
                                    ${finiquito.trabajador === `${trabajador.nombre} ${trabajador.apellidos}` ? "selected" : ""}
                                >
                                    ${trabajador.nombre} ${trabajador.apellidos}
                                </option>
                            `).join("")}

                        </select>

                    </div>

                    <div class="fila-formulario">

                        <label>Fecha de ingreso</label>

                        <input
                            type="date"
                            id="fechaIngreso"
                            value="${finiquito.fechaIngreso || ""}"
                            readonly>

                    </div>

                    <div class="fila-formulario">

                        <label>Fecha de término</label>

                        <input
                            type="date"
                            id="fechaTermino"
                            value="${finiquito.fechaTermino || ""}">

                    </div>

                    <div class="fila-formulario">

                        <label>Causal de término</label>

                        <select id="causal">

                            <option value="">-- Seleccionar causal --</option>

                            <option>Renuncia voluntaria</option>
                            <option>Mutuo acuerdo</option>
                            <option>Necesidades de la empresa</option>
                            <option>Vencimiento del plazo</option>
                            <option>Conclusión del trabajo</option>
                            <option>Despido por incumplimiento</option>

                        </select>

                    </div>

                    <div class="fila-formulario">

                        <label>Último sueldo imponible</label>

                        <input
                            type="text"
                            id="sueldo"
                            value="${finiquito.sueldo || ""}"
                            inputmode="numeric">

                    </div>

                    <div class="fila-formulario">

                        <label>Otros haberes</label>

                        <input
                            type="text"
                            id="haberes"
                            value="${finiquito.haberes || ""}"
                            inputmode="numeric">

                    </div>

                    <div class="fila-formulario">

                        <label>Otros descuentos</label>

                        <input
                            type="text"
                            id="descuentos"
                            value="${finiquito.descuentos || ""}"
                            inputmode="numeric">

                    </div>

                    <div class="fila-formulario">

                        <label>Observaciones</label>

                        <textarea
                            id="observaciones">${finiquito.observaciones || ""}</textarea>

                    </div>

                </div>

                <div class="acciones-formulario">

                    <button
                        id="btnGenerarFiniquito"
                        class="btn-principal">

                        Generar Finiquito

                    </button>

                    <button id="btnCancelarFiniquito">

                        Cancelar

                    </button>

                </div>

            </div>

        </div>

    `;

}