import { mostrarFormularioTrabajador } from "./trabajador-form.js";

export function mostrarTrabajadores() {
  const contenido = document.getElementById("contenido");

  contenido.innerHTML = `
    <div class="encabezado-modulo">

      <h1>👷 Trabajadores</h1>

      <button class="btn-principal" id="btnNuevoTrabajador">
        + Nuevo Trabajador
      </button>

    </div>

    <table class="tabla">

      <thead>
        <tr>
          <th>RUT</th>
          <th>Nombre</th>
          <th>Cargo</th>
          <th>Empresa</th>
          <th>Teléfono</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>18.456.789-2</td>
          <td>Juan Pérez</td>
          <td>Maestro</td>
          <td>Constructora Sur</td>
          <td>+56 9 8765 4321</td>

          <td>
            <button>Editar</button>
            <button>Eliminar</button>
          </td>
        </tr>

      </tbody>

    </table>
    `;

  document
    .getElementById("btnNuevoTrabajador")
    .addEventListener("click", () => {
      document.body.insertAdjacentHTML(
        "beforeend",
        mostrarFormularioTrabajador(),
      );

      document
        .getElementById("btnCancelarTrabajador")
        .addEventListener("click", () => {
          document.querySelector(".modal-overlay").remove();
        });
    });
}
