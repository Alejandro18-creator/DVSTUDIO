export function mostrarVistaLiquidacion(datos) {

    return `

    <div class="modal-overlay">

        <div class="modal modal-liquidacion">

            <h2 style="text-align:center;">
                LIQUIDACIÓN DE SUELDO
            </h2>

            <hr>

            <div class="fila-formulario">
                <strong>Trabajador:</strong>
                <span>${datos.trabajador}</span>
            </div>

            <div class="fila-formulario">
                <strong>Mes:</strong>
                <span>${datos.mes}</span>
            </div>

            <div class="fila-formulario">
                <strong>Empresa:</strong>
                <span>${datos.empresa || "-"}</span>
            </div>

            <div class="fila-formulario">
                <strong>Cargo:</strong>
                <span>${datos.cargo || "-"}</span>
            </div>

            <br>

            <h3>HABERES</h3>

            <table class="tabla">

                <tbody>

                    <tr>
                        <td>Producción</td>
                        <td style="text-align:right;">
                            ${datos.produccion || "$0"}
                        </td>
                    </tr>

                    <tr>
                        <td>Sueldo mínimo</td>
                        <td style="text-align:right;">
                            ${datos.sueldoMinimo}
                        </td>
                    </tr>

                    <tr>
                        <td><strong>Total Haberes</strong></td>
                        <td style="text-align:right;">
                            <strong>${datos.totalHaberes || "$0"}</strong>
                        </td>
                    </tr>

                </tbody>

            </table>

            <br>

            <h3>DESCUENTOS</h3>

            <table class="tabla">

                <tbody>

                    <tr>
                        <td>AFP</td>
                        <td style="text-align:right;">
                            ${datos.afp || "$0"}
                        </td>
                    </tr>

                    <tr>
                        <td>Salud</td>
                        <td style="text-align:right;">
                            ${datos.salud || "$0"}
                        </td>
                    </tr>

                    <tr>
                        <td>Anticipo</td>
                        <td style="text-align:right;">
                            ${datos.anticipo}
                        </td>
                    </tr>

                    <tr>
                        <td><strong>Total Descuentos</strong></td>
                        <td style="text-align:right;">
                            <strong>${datos.totalDescuentos || "$0"}</strong>
                        </td>
                    </tr>

                </tbody>

            </table>

            <br>

            <h2 style="text-align:right;">

                Líquido a Pagar:
                ${datos.liquido || "$0"}

            </h2>

            <div class="acciones-formulario">

                <button id="btnGuardarLiquidacion">
                    Guardar
                </button>

                <button id="btnImprimirLiquidacion">
                    Imprimir
                </button>

                <button id="btnCerrarPreview">
                    Volver
                </button>

            </div>

        </div>

    </div>

    `;
}