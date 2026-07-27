import { mostrarFormularioProduccion } from "./produccion-form.js";

const STORAGE_PRODUCCION = "produccion";

function obtenerProduccion() {
  return JSON.parse(sessionStorage.getItem(STORAGE_PRODUCCION)) || [];
}

function guardarProduccion(datos) {
  sessionStorage.setItem(STORAGE_PRODUCCION, JSON.stringify(datos));
}

export function mostrarProduccion() {
  const contenido = document.getElementById("contenido");

  contenido.innerHTML = `

        <div class="encabezado-modulo">

            <h2>Producción</h2>

            <button class="btn-principal" id="btnNuevaProduccion">
                + Nueva Producción
            </button>

        </div>

        <table class="tabla">

            <thead>

                <tr>
                    <th>Labor</th>
<th>Campo / Fundo</th>
<th>Fecha</th>
<th>Cantidad</th>
<th>Valor</th>
<th>Acciones</th>
                </tr>

            </thead>

            <tbody id="tablaProduccion">

</tbody>

        </table>

       `;

  document
    .getElementById("btnNuevaProduccion")
    .addEventListener("click", () => {
      document.body.insertAdjacentHTML(
        "beforeend",
        mostrarFormularioProduccion(),
      );

      document
        .getElementById("btnCancelarProduccion")
        .addEventListener("click", () => {
          document.querySelector(".modal-overlay").remove();
        });
    });
}
