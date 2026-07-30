export function mostrarVistaFiniquito(datos) {

    return `

    <div class="modal-overlay finiquito">

        <div class="modal finiquito-modal">

            <h2 style="text-align:center;">FINIQUITO</h2>

            <div class="formulario-produccion">

                <div class="fila-formulario">
                    <label>Empresa</label>
                    <div class="fila-valor">${datos.empresa}</div>
                </div>

                <div class="fila-formulario">
                    <label>Trabajador</label>
                    <div class="fila-valor">${datos.trabajador}</div>
                </div>

                <div class="fila-formulario">
                    <label>Cargo</label>
                    <div class="fila-valor">${datos.cargo}</div>
                </div>

                <div class="fila-formulario">
                    <label>Fecha de ingreso</label>
                    <div class="fila-valor">${datos.fechaIngreso}</div>
                </div>

                <div class="fila-formulario">
                    <label>Fecha de término</label>
                    <div class="fila-valor">${datos.fechaTermino}</div>
                </div>

                <div class="fila-formulario">
                    <label>Causal</label>
                    <div class="fila-valor">${datos.causal}</div>
                </div>

                <h3>Haberes</h3>

                <div class="fila-formulario">
                    <label>Último sueldo</label>
                    <div class="fila-valor" style="text-align:right;">$ ${datos.sueldo}</div>
                </div>

                <div class="fila-formulario">
                    <label>Otros haberes</label>
                    <div class="fila-valor" style="text-align:right;">$ ${datos.haberes}</div>
                </div>

                <h3>Descuentos</h3>

                <div class="fila-formulario">
                    <label>Otros descuentos</label>
                    <div class="fila-valor" style="text-align:right;">$ ${datos.descuentos}</div>
                </div>

                <h3>Observaciones</h3>

                <div class="fila-formulario">
                    <label></label>
                    <div class="observaciones-documento">${datos.observaciones || "-"}</div>
                </div>

                <div class="firmas">

                    <div>
                        ___________________________<br>
                        Empleador
                    </div>

                    <div>
                        ___________________________<br>
                        Trabajador
                    </div>

                </div>

                <div class="acciones-formulario">

                    <button id="btnCerrarPreview" class="btn-principal">Cerrar</button>

                </div>

            </div>

        </div>

    </div>

    `;
}