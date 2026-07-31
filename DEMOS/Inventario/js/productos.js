import { mostrarFormularioProducto } from "./producto-form.js";

export function mostrarProductos() {

    const contenido = document.getElementById("contenido");

    const productos = cargarProductos();

    contenido.innerHTML = `

        <div class="encabezado-modulo">

            <h2>Productos</h2>

            <button
                class="btn-principal"
                id="btnNuevoProducto">

                + Nuevo Producto

            </button>

        </div>

        <table class="tabla">

            <thead>

                <tr>

                    <th>Código</th>
                    <th>Producto</th>
                    <th>Categoría</th>
                    <th>Stock</th>
                    <th>Precio Venta</th>
                    <th>Acciones</th>

                </tr>

            </thead>

            <tbody>

                ${
                    productos.length

                    ?

                    productos.map(producto => `

                        <tr>

                            <td>${producto.codigo}</td>
                            <td>${producto.nombre}</td>
                            <td>${producto.categoria}</td>
                            <td>${producto.stock}</td>
                            <td>$ ${producto.precioVenta}</td>

                            <td>

                                <button>Editar</button>
                                <button>Eliminar</button>

                            </td>

                        </tr>

                    `).join("")

                    :

                    `

                    <tr>

                        <td colspan="6" style="text-align:center;">

                            No hay productos registrados.

                        </td>

                    </tr>

                    `

                }

            </tbody>

        </table>

    `;

    document
        .getElementById("btnNuevoProducto")
        .addEventListener("click", () => {

            document.body.insertAdjacentHTML(
                "beforeend",
                mostrarFormularioProducto()
            );

            document
                .getElementById("btnCancelarProducto")
                .addEventListener("click", () => {

                    document
                        .querySelector(".modal-overlay")
                        .remove();

                });

            document
                .getElementById("btnGuardarProducto")
                .addEventListener("click", () => {

                    guardarProducto();

                });

        });

}

function cargarProductos() {

    return JSON.parse(
        sessionStorage.getItem("productos")
    ) || [];

}

function guardarProductosStorage(productos) {

    sessionStorage.setItem(
        "productos",
        JSON.stringify(productos)
    );

}

function guardarProducto() {

    const productos = cargarProductos();

    const nuevoProducto = {

        codigo: document.getElementById("codigoProducto").value.trim(),
        nombre: document.getElementById("nombreProducto").value.trim(),
        categoria: document.getElementById("categoriaProducto").value.trim(),
        stock: Number(document.getElementById("stockProducto").value),
        precioCompra: Number(document.getElementById("precioCompraProducto").value),
        precioVenta: Number(document.getElementById("precioVentaProducto").value)

    };

    productos.push(nuevoProducto);

    guardarProductosStorage(productos);

    document
        .querySelector(".modal-overlay")
        .remove();

    mostrarProductos();

}