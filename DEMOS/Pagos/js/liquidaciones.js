import { mostrarFormularioLiquidacion } from "./liquidacion-form.js";
import { mostrarVistaLiquidacion } from "./liquidacion-preview.js";

export function mostrarLiquidaciones() {

    const contenido = document.getElementById("contenido");

    contenido.innerHTML = `

        <div class="encabezado-modulo">

            <h2>Liquidaciones</h2>

            <button
                class="btn-principal"
                id="btnNuevaLiquidacion">

                + Nueva Liquidación

            </button>

        </div>

        <table class="tabla">

            <thead>

                <tr>

                    <th>Trabajador</th>
                    <th>Mes</th>
                    <th>Anticipo</th>
                    <th>Sueldo Mínimo</th>
                    <th>Acciones</th>

                </tr>

            </thead>

            <tbody>

                <tr>

                    <td colspan="5" style="text-align:center">

                        No hay liquidaciones registradas.

                    </td>

                </tr>

            </tbody>

        </table>

    `;

    document
        .getElementById("btnNuevaLiquidacion")
        .addEventListener("click", () => {

            document.body.insertAdjacentHTML(
                "beforeend",
                mostrarFormularioLiquidacion()
            );

            document
                .getElementById("btnCancelarLiquidacion")
                .addEventListener("click", () => {

                    document
                        .querySelector(".modal-overlay")
                        .remove();

                });

                document
    .getElementById("btnGenerarLiquidacion")
    .addEventListener("click", () => {

        const nombreTrabajador = document.getElementById("trabajador").value;

const trabajadores =
    JSON.parse(sessionStorage.getItem("trabajadores")) || [];

const trabajador =
    trabajadores.find(t =>
        `${t.nombre} ${t.apellidos}` === nombreTrabajador
    );

const datos = {

    trabajador: nombreTrabajador,

    mes: document.getElementById("mes").value,

    anticipo: document.getElementById("anticipo").value || "$0",

    sueldoMinimo: document.getElementById("sueldoMinimo").value || "$0",

    empresa: trabajador?.empresa || "-",

    cargo: trabajador?.cargo || "-",

    produccion: "$0",

    totalHaberes: "$0",

    afp: "$0",

    salud: "$0",

    totalDescuentos: "$0",

    liquido: "$0"

};

        document.querySelector(".modal-overlay").remove();

        document.body.insertAdjacentHTML(
            "beforeend",
            mostrarVistaLiquidacion(datos)
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