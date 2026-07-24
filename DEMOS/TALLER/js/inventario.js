import { mostrarFormularioProducto } from "./inventario-form.js";

const inventario =
  JSON.parse(sessionStorage.getItem("inventario")) || [];

function guardarInventario() {
  sessionStorage.setItem("inventario", JSON.stringify(inventario));
}

function renderizarInventario() {
  const lista = document.getElementById("listaInventario");

  if (!lista) return;

  lista.innerHTML = "";

  inventario.forEach((producto, indice) => {
    lista.innerHTML += `
      <tr>
        <td>${producto.producto}</td>
        <td>${producto.categoria}</td>
        <td>${producto.stock}</td>
        <td>${producto.stockMinimo}</td>
        <td>$${Number(producto.precio).toLocaleString()}</td>

        <td>

          <button
            class="btn-secondary btnEditar"
            data-indice="${indice}">
            Editar
          </button>

          <button
            class="btn-primary btnEliminar"
            data-indice="${indice}">
            Eliminar
          </button>

        </td>

      </tr>
    `;
  });

  document.querySelectorAll(".btnEliminar").forEach((boton) => {
    boton.addEventListener("click", () => {

      const indice = Number(boton.dataset.indice);

      if (!confirm("¿Eliminar este producto?")) return;

      inventario.splice(indice, 1);

      guardarInventario();

      renderizarInventario();

    });
  });

  document.querySelectorAll(".btnEditar").forEach((boton) => {
    boton.addEventListener("click", () => {

      const indice = Number(boton.dataset.indice);

      abrirFormulario(inventario[indice], indice);

    });
  });
}

function abrirFormulario(producto = {}, indice = null) {

  document.body.insertAdjacentHTML(
    "beforeend",
    mostrarFormularioProducto(producto)
  );

  const modal = document.getElementById("modalProducto");

  if (indice !== null) {
    modal.dataset.indice = indice;
  }

  document
    .getElementById("cancelarProducto")
    .addEventListener("click", () => {
      document.querySelector(".modal-overlay").remove();
    });

  document
    .getElementById("guardarProducto")
    .addEventListener("click", () => {

      const nuevoProducto = {
        producto: document.getElementById("producto").value.trim(),
        categoria: document.getElementById("categoria").value.trim(),
        stock: Number(document.getElementById("stock").value),
        stockMinimo: Number(document.getElementById("stockMinimo").value),
        precio: Number(document.getElementById("precio").value),
      };

      if (!nuevoProducto.producto) {
        alert("Debe ingresar el nombre del producto.");
        return;
      }

      if (modal.dataset.indice !== undefined) {
        inventario[modal.dataset.indice] = nuevoProducto;
      } else {
        inventario.push(nuevoProducto);
      }

      guardarInventario();

      renderizarInventario();

      document.querySelector(".modal-overlay").remove();

    });
}
export function mostrarInventario(contenido) {
  contenido.innerHTML = `

    <div class="topbar">

      <div>
        <h1>Inventario</h1>
        <p>Administración de productos del taller.</p>
      </div>

      <button
        class="btn-primary"
        id="btnNuevoProducto">
        + Nuevo Producto
      </button>

    </div>

    <section class="panel">

      <h2>Listado de productos</h2>

      <table id="tablaInventario">

        <thead>

          <tr>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Stock</th>
            <th>Stock Mín.</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>

        </thead>

        <tbody id="listaInventario">

        </tbody>

      </table>

    </section>

  `;

  document
    .getElementById("btnNuevoProducto")
    .addEventListener("click", () => {
      abrirFormulario();
    });

  renderizarInventario();
}

export { inventario };