import { mostrarFormularioContrato } from "./contrato-form.js";

export function mostrarContratos() {
  const contenido = document.getElementById("contenido");

  contenido.innerHTML = `

        <div class="encabezado-modulo">

            <h2>Contratos</h2>

            <button class="btn-principal" id="btnNuevoContrato">
                + Nuevo Contrato
            </button>

        </div>

        <table class="tabla">

            <thead>

                <tr>
                    <th>Trabajador</th>
                    <th>Empresa</th>
                    <th>Cargo</th>
                    <th>Fecha Inicio</th>
                    <th>Fecha Término</th>
                    <th>Acciones</th>
                </tr>

            </thead>

            <tbody>

                <tr>
                    <td>Juan Pérez</td>
                    <td>Constructora ABC</td>
                    <td>Soldador</td>
                    <td>01-07-2026</td>
                    <td>31-12-2026</td>
                    <td>
                        <button>Editar</button>
                        <button>Eliminar</button>
                    </td>
                </tr>

            </tbody>

        </table>

    `;
  document.getElementById("btnNuevoContrato").addEventListener("click", () => {
    document.body.insertAdjacentHTML("beforeend", mostrarFormularioContrato());

    document
      .getElementById("btnCancelarContrato")
      .addEventListener("click", () => {
        document.querySelector(".modal-overlay").remove();
      });
  });
}
