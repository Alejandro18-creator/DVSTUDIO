export function mostrarVistaLiquidacion(datos) {
  return `

<div class="modal-overlay">

<div class="modal modal-liquidacion">

<div class="encabezado-liquidacion">

<div class="icono-liquidacion">📄</div>

<h1>LIQUIDACIÓN DE SUELDO</h1>

<p>Detalle de haberes y descuentos del trabajador</p>

</div>

<div class="tarjeta-datos">

<div class="dato">

<div class="icono">👤</div>

<div>

<label>TRABAJADOR</label>

<h3>${datos.trabajador}</h3>

</div>

</div>

<div class="dato">

<div class="icono">📅</div>

<div>

<label>MES</label>

<h3>${datos.mes}</h3>

</div>

</div>

<div class="dato">

<div class="icono">🏢</div>

<div>

<label>EMPRESA</label>

<h3>${datos.empresa}</h3>

</div>

</div>

<div class="dato">

<div class="icono">💼</div>

<div>

<label>CARGO</label>

<h3>${datos.cargo}</h3>

</div>

</div>

</div>

<div class="columnas-liquidacion">

    <div class="card card-haberes">

        <h2>💵 HABERES</h2>

        <table>

            <tr>

                <th>Concepto</th>

                <th>Monto</th>

            </tr>

            <tr>

                <td>Producción</td>

                <td>${datos.produccion}</td>

            </tr>

            <tr>

                <td>Sueldo mínimo</td>

                <td>${datos.sueldoMinimo}</td>

            </tr>

            <tr class="total">

                <td>Total Haberes</td>

                <td>${datos.totalHaberes}</td>

            </tr>

        </table>

    </div>

    <div class="card card-descuentos">

        <h2>🛡 DESCUENTOS</h2>

        <table>

            <tr>

                <th>Concepto</th>

                <th>Monto</th>

            </tr>

            <tr>

                <td>AFP</td>

                <td>${datos.afp}</td>

            </tr>

            <tr>

                <td>Salud</td>

                <td>${datos.salud}</td>

            </tr>

            <tr>

                <td>Anticipo</td>

                <td>${datos.anticipo}</td>

            </tr>

            <tr class="total">

                <td>Total Descuentos</td>

                <td>${datos.totalDescuentos}</td>

            </tr>

        </table>

    </div>

</div>


<div class="liquido-final">

<h2>LÍQUIDO A PAGAR</h2>

<h1>${datos.liquido}</h1>

</div>

<div class="acciones-formulario">

<button id="btnGuardarLiquidacion">💾 Guardar</button>

<button id="btnImprimirLiquidacion">🖨 Imprimir</button>

<button id="btnCerrarPreview">⬅ Volver</button>

</div>

</div>

</div>

`;
}
