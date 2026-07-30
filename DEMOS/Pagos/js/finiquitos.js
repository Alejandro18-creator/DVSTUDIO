import { mostrarFormularioFiniquito } from "./finiquito-form.js";
import { mostrarVistaFiniquito } from "./finiquito-preview.js";

export function mostrarFiniquitos() {

    const contenido = document.getElementById("contenido");

    contenido.innerHTML = `

        <div class="encabezado-modulo">

            <h2>Finiquitos</h2>

            <button
                class="btn-principal"
                id="btnNuevoFiniquito">

                + Nuevo Finiquito

            </button>

        </div>

        <table class="tabla">

            <thead>

                <tr>

                    <th>Trabajador</th>
                    <th>Fecha Término</th>
                    <th>Causal</th>
                    <th>Estado</th>
                    <th>Acciones</th>

                </tr>

            </thead>

            <tbody>

                <tr>

                    <td colspan="5" style="text-align:center">

                        No hay finiquitos registrados.

                    </td>

                </tr>

            </tbody>

        </table>

    `;

    document
        .getElementById("btnNuevoFiniquito")
        .addEventListener("click", () => {

            document.body.insertAdjacentHTML(
                "beforeend",
                mostrarFormularioFiniquito()
            );

            document
                .getElementById("btnCancelarFiniquito")
                .addEventListener("click", () => {

                    document
                        .querySelector(".modal-overlay")
                        .remove();

                });

            document
                .getElementById("btnGenerarFiniquito")
                .addEventListener("click", () => {

                    const trabajadores =
                        JSON.parse(sessionStorage.getItem("trabajadores")) || [];

                    const nombreTrabajador =
                        document.getElementById("trabajador").value;

                    const trabajador =
                        trabajadores.find(
                            t => `${t.nombre} ${t.apellidos}` === nombreTrabajador
                        );

                    const datos = {

                        trabajador: nombreTrabajador,

                        empresa: trabajador?.empresa || "-",

                        cargo: trabajador?.cargo || "-",

                        fechaIngreso:
                            document.getElementById("fechaIngreso").value,

                        fechaTermino:
                            document.getElementById("fechaTermino").value,

                        causal:
                            document.getElementById("causal").value,

                        sueldo:
                            document.getElementById("sueldo").value,

                        haberes:
                            document.getElementById("haberes").value,

                        descuentos:
                            document.getElementById("descuentos").value,

                        observaciones:
                            document.getElementById("observaciones").value

                    };

                    document
                        .querySelector(".modal-overlay")
                        .remove();

                    document.body.insertAdjacentHTML(
                        "beforeend",
                        mostrarVistaFiniquito(datos)
                    );

                    document
                        .getElementById("btnCerrarPreview")
                        .addEventListener("click", () => {

                            document
                                .querySelector(".modal-overlay")
                                .remove();

                        });

                });

        });

}