import { mostrarFormularioMovimiento } from "./movimiento-form.js";

export function mostrarMovimientos() {
  const contenido = document.getElementById("contenido");

  contenido.innerHTML = `

        <div class="encabezado-modulo">

            <h2>Movimientos de Stock</h2>

            <button
                class="btn-principal"
                id="btnNuevoMovimiento">

                + Nuevo Movimiento

            </button>

        </div>

        <table class="tabla">

            <thead>

                <tr>

                    <th>Fecha</th>
                    <th>Producto</th>
                    <th>Tipo</th>
                    <th>Entrada</th>
                    <th>Salida</th>
                    <th>Saldo</th>
                    <th>Observación</th>

                </tr>

            </thead>

            <tbody>

                <tr>

                    <td colspan="7" style="text-align:center;">

                        No existen movimientos registrados.

                    </td>

                </tr>

            </tbody>

        </table>

    `;
  document
    .getElementById("btnNuevoMovimiento")
    .addEventListener("click", () => {
      document.body.insertAdjacentHTML(
        "beforeend",
        mostrarFormularioMovimiento(),
      );
    });
}
