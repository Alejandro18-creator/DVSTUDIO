import { mostrarFormularioProducto } from "./producto-form.js";

export function mostrarProductos() {

    const contenido = document.getElementById("contenido");

    const productos =
        JSON.parse(sessionStorage.getItem("productos")) || [];

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

        });

}