
import { mostrarFormularioProducto } from "./inventario-form.js";

export let inventario = JSON.parse(sessionStorage.getItem("inventario")) || [
  {
    id: 1,
    producto: "Filtro de Aceite",
    categoria: "Filtros",
    stock: 15,
    stockMinimo: 5,
    precio: 8900
  },
  {
    id: 2,
    producto: "Aceite 5W-30",
    categoria: "Lubricantes",
    stock: 20,
    stockMinimo: 8,
    precio: 32990
  },
  {
    id: 3,
    producto: "Pastillas de Freno",
    categoria: "Frenos",
    stock: 4,
    stockMinimo: 5,
    precio: 45990
  }
];

function guardarInventario() {
  sessionStorage.setItem("inventario", JSON.stringify(inventario));
}

export function mostrarInventario(contenido) {
  guardarInventario();

  contenido.innerHTML = `
    <h2>Inventario</h2>

    <div class="acciones">
      <button class="btn btn-primary" id="btnNuevoProducto">
        + Nuevo Producto
      </button>
    </div>

    <table class="tabla">
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

    <tbody>
        ${inventario.map(producto => `
            <tr>
                <td>${producto.producto}</td>
                <td>${producto.categoria}</td>
                <td>${producto.stock}</td>
                <td>${producto.stockMinimo}</td>
                <td>$${producto.precio.toLocaleString()}</td>
                <td>
                    <button class="btn-editar">✏️</button>
                    <button class="btn-eliminar">🗑️</button>
                </td>
            </tr>
        `).join("")}
    </tbody>
</table>
  `;
const btnNuevoProducto = document.getElementById("btnNuevoProducto");

btnNuevoProducto.addEventListener("click", () => {
  document.body.insertAdjacentHTML(
    "beforeend",
    mostrarFormularioProducto()
  );

  document
    .getElementById("cancelarProducto")
    .addEventListener("click", () => {
      document.querySelector(".modal-overlay").remove();
    });
});


}