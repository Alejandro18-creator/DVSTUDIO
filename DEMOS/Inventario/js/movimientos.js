import { mostrarFormularioMovimiento } from "./movimiento-form.js";

function renderTabla() {
  const tbody = document.querySelector(".tabla tbody");

  const movimientos =
    JSON.parse(sessionStorage.getItem("movimientos")) || [];

  const productos =
    JSON.parse(sessionStorage.getItem("productos")) || [];

  const codigoBuscado =
    document.getElementById("buscarCodigo")?.value || "";

  let saldo = 0;

  const filtrados = movimientos.filter((mov) => {
  if (codigoBuscado === "") return true;

  return String(mov.producto).trim() === String(codigoBuscado).trim();
});

  tbody.innerHTML = "";

if (filtrados.length === 0) {
  tbody.innerHTML = `
    <tr>
      <td colspan="5" style="text-align:center;">
        No hay resultados
      </td>
    </tr>
  `;
  return;
}

  tbody.innerHTML = "";

  filtrados.forEach((mov) => {
    const prod = productos.find(
      (p) => p.codigo === mov.producto
    );

    const entrada = Number(mov.entrada) || 0;
    const salida = Number(mov.salida) || 0;

    saldo += entrada - salida;

    tbody.innerHTML += `
      <tr>
        <td>${mov.fecha}</td>
        <td>${mov.producto}</td>
        <td>${prod ? prod.nombre : "-"}</td>
        <td>${entrada || "-"}</td>
        <td>${salida || "-"}</td>
      </tr>
    `;
  });

  // saldo final
  tbody.innerHTML += `
    <tr>
      <td colspan="4" style="text-align:right;">
        <strong>Saldo:</strong>
      </td>
      <td><strong>${saldo}</strong></td>
    </tr>
  `;
}

export function mostrarMovimientos() {
  const contenido = document.getElementById("contenido");

  contenido.innerHTML = `
    <div class="encabezado-modulo">
      <h2>Movimientos de Stock</h2>

      <button class="btn-principal" id="btnNuevoMovimiento">
        + Nuevo Movimiento
      </button>
    </div>

    <select id="buscarCodigo" style="margin-bottom:15px; padding:8px; width:220px;">
      <option value="">Todos los productos</option>
    </select>

    <table class="tabla">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Código</th>
          <th>Producto</th>
          <th>Entrada</th>
          <th>Salida</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  `;

  // cargar productos en filtro
  const productos =
    JSON.parse(sessionStorage.getItem("productos")) || [];

  const selectFiltro =
    document.getElementById("buscarCodigo");

  productos.forEach((p) => {
    selectFiltro.innerHTML += `
      <option value="${p.codigo}">
        ${p.codigo} - ${p.nombre}
      </option>
    `;
  });

  // evento filtro
  selectFiltro.addEventListener("change", () => {
    renderTabla();
  });

  renderTabla();

  // botón nuevo movimiento
  document
    .getElementById("btnNuevoMovimiento")
    .addEventListener("click", () => {
      document.body.insertAdjacentHTML(
        "beforeend",
        mostrarFormularioMovimiento()
      );

      const productos =
        JSON.parse(sessionStorage.getItem("productos")) || [];

      const select =
        document.getElementById("productoMovimiento");

      productos.forEach((producto) => {
        const option = document.createElement("option");
        option.value = producto.codigo;
        option.textContent = producto.nombre;
        select.appendChild(option);
      });

      // guardar
      document
        .getElementById("btnGuardarMovimiento")
        .addEventListener("click", () => {
          const fecha =
            document.getElementById("fechaMovimiento").value;

          const producto =
            document.getElementById("productoMovimiento").value;

          if (!fecha || !producto) {
            alert("Completa los campos");
            return;
          }

          const movimientos =
            JSON.parse(
              sessionStorage.getItem("movimientos")
            ) || [];

          const nuevoMovimiento = {
            fecha,
            producto,
            entrada: 0,
            salida: 0,
          };

          movimientos.push(nuevoMovimiento);

          sessionStorage.setItem(
            "movimientos",
            JSON.stringify(movimientos)
          );

          renderTabla();

          document
            .querySelector(".modal-overlay")
            .remove();
        });

      // cancelar
      document
        .getElementById("btnCancelarMovimiento")
        .addEventListener("click", () => {
          document
            .querySelector(".modal-overlay")
            .remove();
        });
    });
}