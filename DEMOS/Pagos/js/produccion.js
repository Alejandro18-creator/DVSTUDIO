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
  const produccion = obtenerProduccion();

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
          <th>Trabajador</th>
          <th>Labor</th>
          <th>Campo / Fundo</th>
          <th>Fecha</th>
          <th>Cantidad</th>
          <th>Valor</th>
          <th>Cantidad</th>
<th>Valor</th>
<th>Total</th>
<th>Acciones</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>

        ${
          produccion.length === 0
            ? `
              <tr>
                <td colspan="7" style="text-align:center">
                  No hay registros.
                </td>
              </tr>
            `
            : produccion.map((p, index) => `
              <tr>

                <td>${p.trabajador}</td>
                <td>${p.labor}</td>
                <td>${p.campo}</td>
                <td>${p.fecha}</td>
                <td>${p.cantidad}</td>
                <td>${Number(p.valor).toLocaleString("es-CL", {
                style: "currency",
                currency: "CLP"
                 })}</td>

                <td>${Number(p.total).toLocaleString("es-CL", {
                style: "currency",
                currency: "CLP"
                 })}</td>

                <td>
                  <button class="btnEditar" data-index="${index}">
                    Editar
                  </button>

                  <button class="btnEliminar" data-index="${index}">
                    Eliminar
                  </button>
                </td>

              </tr>
            `).join("")
        }

      </tbody>

    </table>
  `;

  document
    .getElementById("btnNuevaProduccion")
    .addEventListener("click", () => abrirFormulario());

  document.querySelectorAll(".btnEditar").forEach((btn) => {
    btn.addEventListener("click", () => {
      abrirFormulario(Number(btn.dataset.index));
    });
  });

  document.querySelectorAll(".btnEliminar").forEach((btn) => {
    btn.addEventListener("click", () => {
      eliminarProduccion(Number(btn.dataset.index));
    });
  });

}

function abrirFormulario(index = null) {

  const produccion = obtenerProduccion();

  const registro =
    index === null ? {} : produccion[index];

  document.body.insertAdjacentHTML(
    "beforeend",
    mostrarFormularioProduccion(registro)
  );

  document
    .getElementById("btnCancelarProduccion")
    .addEventListener("click", () => {
      document.querySelector(".modal-overlay").remove();
    });

    const cantidad = document.getElementById("cantidad");
    const valor = document.getElementById("valor");
    const total = document.getElementById("total");
    valor.addEventListener("input", formatearValor);
    valor.addEventListener("input", () => {

    const numero = valor.value.replace(/\D/g, "");

    if (numero === "") {
        valor.value = "";
        calcularTotal();
        return;
    }

    valor.value = "$" + Number(numero).toLocaleString("es-CL");

    calcularTotal();

});

function formatearValor() {

    let numero = valor.value.replace(/\D/g, "");

    if (numero === "") {
        valor.value = "";
        calcularTotal();
        return;
    }

    valor.value = Number(numero).toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP"
    });

    calcularTotal();

}

function calcularTotal() {

    const totalCalculado =
        (Number(cantidad.value) || 0) *
        (Number(valor.value.replace(/\D/g, "")) || 0)

    total.value = "$" + totalCalculado.toLocaleString("es-CL");

}

cantidad.addEventListener("input", calcularTotal);
valor.addEventListener("input", calcularTotal);

calcularTotal();

  document
    .getElementById("btnGuardarProduccion")
    .addEventListener("click", () => {

      const produccion = obtenerProduccion();

      const datos = {

        trabajador: document.getElementById("trabajador").value,
        labor: document.getElementById("labor").value,
        campo: document.getElementById("campo").value,
        fecha: document.getElementById("fecha").value,
        cantidad: document.getElementById("cantidad").value,
        valor: document.getElementById("valor").value,
        observacion: document.getElementById("observacion").value,
        total:
(Number(document.getElementById("cantidad").value) || 0) *
(Number(document.getElementById("valor").value.replace(/\D/g, "")) || 0)
      };

      if (index === null) {
        produccion.push(datos);
      } else {
        produccion[index] = datos;
      }

      guardarProduccion(produccion);

      document.querySelector(".modal-overlay").remove();

      mostrarProduccion();

    });

}

function eliminarProduccion(index) {

  if (!confirm("¿Desea eliminar este registro?")) return;

  const produccion = obtenerProduccion();

  produccion.splice(index, 1);

  guardarProduccion(produccion);

  mostrarProduccion();

}