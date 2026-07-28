import { mostrarFormularioContrato } from "./contrato-form.js";

const STORAGE_CONTRATOS = "contratos";

function obtenerContratos() {
    return JSON.parse(sessionStorage.getItem(STORAGE_CONTRATOS)) || [];
}

function guardarContratos(datos) {
    sessionStorage.setItem(STORAGE_CONTRATOS, JSON.stringify(datos));
}

export function mostrarContratos() {

    const contenido = document.getElementById("contenido");
    const contratos = obtenerContratos();

    contenido.innerHTML = `
        <div class="encabezado-modulo">

            <h2>Contratos</h2>

            <button class="btn-principal" id="btnNuevoContrato">
                + Nuevo Contrato
            </button>

        </div>

        <table class="tabla">

            <thead>
                <tr>
                    <th>Trabajador</th>
                    <th>Empresa</th>
                    <th>Cargo</th>
                    <th>Fecha Inicio</th>
                    <th>Fecha Término</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>

                ${
                    contratos.length === 0
                    ? `
                        <tr>
                            <td colspan="6" style="text-align:center">
                                No hay contratos registrados.
                            </td>
                        </tr>
                    `
                    : contratos.map((c,index)=>`
                        <tr>

                            <td>${c.trabajador}</td>
                            <td>${c.empresa}</td>
                            <td>${c.cargo}</td>
                            <td>${c.fechaInicio}</td>
                            <td>${c.fechaTermino}</td>

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
        .getElementById("btnNuevoContrato")
        .addEventListener("click", () => abrirFormulario());

    document.querySelectorAll(".btnEditar").forEach(btn=>{
        btn.addEventListener("click",()=>{
            abrirFormulario(Number(btn.dataset.index));
        });
    });

    document.querySelectorAll(".btnEliminar").forEach(btn=>{
        btn.addEventListener("click",()=>{
            eliminarContrato(Number(btn.dataset.index));
        });
    });

}

function abrirFormulario(index=null){

    const contratos = obtenerContratos();

    const contrato =
        index===null ? {} : contratos[index];

    document.body.insertAdjacentHTML(
        "beforeend",
        mostrarFormularioContrato(contrato)
    );

    const trabajadores =
        JSON.parse(sessionStorage.getItem("trabajadores")) || [];

    const selectTrabajador =
        document.getElementById("trabajador");

    const empresa =
        document.getElementById("empresa");

    const cargo =
        document.getElementById("cargo");

    function actualizarDatos(){

        const trabajador =
            trabajadores.find(t =>
                `${t.nombre} ${t.apellidos}` === selectTrabajador.value
            );

        if(trabajador){

            empresa.value = trabajador.empresa;
            cargo.value = trabajador.cargo;

        }

    }

    actualizarDatos();

    selectTrabajador.addEventListener(
        "change",
        actualizarDatos
    );

    document
        .getElementById("btnCancelarContrato")
        .addEventListener("click",()=>{

            document.querySelector(".modal-overlay").remove();

        });

    document
        .getElementById("btnGuardarContrato")
        .addEventListener("click",()=>{

            const contratos = obtenerContratos();

            const datos = {

                trabajador: selectTrabajador.value,
                empresa: empresa.value,
                cargo: cargo.value,
                fechaInicio: document.getElementById("fechaInicio").value,
                fechaTermino: document.getElementById("fechaTermino").value

            };

            if(index===null){
                contratos.push(datos);
            }else{
                contratos[index]=datos;
            }

            guardarContratos(contratos);

            document.querySelector(".modal-overlay").remove();

            mostrarContratos();

        });

}

function eliminarContrato(index){

    if(!confirm("¿Desea eliminar este contrato?")) return;

    const contratos = obtenerContratos();

    contratos.splice(index,1);

    guardarContratos(contratos);

    mostrarContratos();

}