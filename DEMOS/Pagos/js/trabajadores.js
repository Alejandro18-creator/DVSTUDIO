import { mostrarFormularioTrabajador } from "./trabajador-form.js";

const STORAGE_TRABAJADORES = "trabajadores";

function obtenerTrabajadores() {
  return JSON.parse(sessionStorage.getItem(STORAGE_TRABAJADORES)) || [];
}

function guardarTrabajadores(datos) {
  sessionStorage.setItem(STORAGE_TRABAJADORES, JSON.stringify(datos));
}

export function mostrarTrabajadores() {
  const contenido = document.getElementById("contenido");
  const trabajadores = obtenerTrabajadores();

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
        ${
          trabajadores.length === 0
            ? `
              <tr>
                <td colspan="6" style="text-align:center">
                  No hay trabajadores registrados.
                </td>
              </tr>
            `
            : trabajadores
                .map(
                  (t, index) => `
                <tr>
                  <td>${t.rut}</td>
                  <td>${t.nombre} ${t.apellidos}</td>
                  <td>${t.cargo}</td>
                  <td>${t.empresa}</td>
                  <td>${t.telefono}</td>

                  <td>
                    <button class="btnEditar" data-index="${index}">
                      Editar
                    </button>

                    <button class="btnEliminar" data-index="${index}">
                      Eliminar
                    </button>
                  </td>
                </tr>
              `,
                )
                .join("")
        }
      </tbody>
    </table>
  `;

  document
    .getElementById("btnNuevoTrabajador")
    .addEventListener("click", () => abrirFormulario());

  document.querySelectorAll(".btnEditar").forEach((boton) => {
    boton.addEventListener("click", () => {
      abrirFormulario(Number(boton.dataset.index));
    });
  });

  document.querySelectorAll(".btnEliminar").forEach((boton) => {
    boton.addEventListener("click", () => {
      eliminarTrabajador(Number(boton.dataset.index));
    });
  });
}

function abrirFormulario(index = null) {
  const trabajadores = obtenerTrabajadores();

  const trabajador =
    index === null ? {} : trabajadores[index];

  document.body.insertAdjacentHTML(
    "beforeend",
    mostrarFormularioTrabajador(trabajador)
  );

  document
    .getElementById("btnCancelarTrabajador")
    .addEventListener("click", () => {
      document.querySelector(".modal-overlay").remove();
    });

  document
    .getElementById("btnGuardarTrabajador")
    .addEventListener("click", () => {

      const trabajadores = obtenerTrabajadores();

      const datos = {
        rut: document.getElementById("rut").value,
        nombre: document.getElementById("nombre").value,
        apellidos: document.getElementById("apellidos").value,
        fechaNacimiento: document.getElementById("fechaNacimiento").value,
        direccion: document.getElementById("direccion").value,
        telefono: document.getElementById("telefono").value,
        correo: document.getElementById("correo").value,
        cargo: document.getElementById("cargo").value,
        empresa: document.getElementById("empresa").value,
        fechaIngreso: document.getElementById("fechaIngreso").value,
      };

      if (index === null) {
        trabajadores.push(datos);
      } else {
        trabajadores[index] = datos;
      }

      guardarTrabajadores(trabajadores);

      document.querySelector(".modal-overlay").remove();

      mostrarTrabajadores();
    });
}

function eliminarTrabajador(index) {

  if (!confirm("¿Desea eliminar este trabajador?")) return;

  const trabajadores = obtenerTrabajadores();

  trabajadores.splice(index, 1);

  guardarTrabajadores(trabajadores);

  mostrarTrabajadores();
}