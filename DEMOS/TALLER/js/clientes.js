import { mostrarFormularioCliente } from "./cliente-form.js";

const clientes = [];

function renderizarClientes() {
  const lista = document.getElementById("listaClientes");

  if (!lista) return;

  lista.innerHTML = "";

  clientes.forEach((cliente, indice) => {
    lista.innerHTML += `

            <tr>

                <td>${cliente.nombre}</td>
                <td>${cliente.telefono}</td>
                <td>${cliente.correo}</td>
                <td>${cliente.direccion}</td>

                <td>

                    <button
    class="btn-secondary btnEditar"
    data-indice="${indice}">
    Editar
</button>

                    <button
    class="btn-primary btnEliminar" data-indice="${indice}">
    Eliminar
</button>

                </td>

            </tr>

        `;
  });
  document.querySelectorAll(".btnEliminar").forEach((boton) => {
    boton.addEventListener("click", () => {
      const indice = Number(boton.dataset.indice);

      clientes.splice(indice, 1);

      renderizarClientes();
    });
  });
  document.querySelectorAll(".btnEditar").forEach((boton) => {
    boton.addEventListener("click", () => {
      const indice = Number(boton.dataset.indice);

      abrirFormulario(clientes[indice], indice);

      const btnCancelar = document.getElementById("btnCancelarCliente");

      btnCancelar.addEventListener("click", () => {
        document.querySelector(".modal-overlay").remove();
      });
    });
  });
}

function abrirFormulario(cliente = {}, indice = null) {
  document.body.insertAdjacentHTML(
    "beforeend",
    mostrarFormularioCliente(cliente),
  );

  const modal = document.getElementById("modalCliente");

  if (indice !== null) {
    modal.dataset.indice = indice;
  }

  const btnCancelar = document.getElementById("btnCancelarCliente");

  btnCancelar.addEventListener("click", () => {
    document.querySelector(".modal-overlay").remove();
  });

  const btnGuardar = document.getElementById("btnGuardarCliente");

  btnGuardar.addEventListener("click", () => {
    const clienteNuevo = {
      nombre: document.getElementById("nombreCliente").value.trim(),
      telefono: document.getElementById("telefonoCliente").value.trim(),
      correo: document.getElementById("correoCliente").value.trim(),
      direccion: document.getElementById("direccionCliente").value.trim(),
    };

    if (!clienteNuevo.nombre) {
      alert("Debe ingresar el nombre del cliente.");
      return;
    }

    if (modal.dataset.indice !== undefined) {
      clientes[modal.dataset.indice] = clienteNuevo;
    } else {
      clientes.push(clienteNuevo);
    }

    renderizarClientes();

    document.querySelector(".modal-overlay").remove();
  });

  return modal;
}

export function mostrarClientes(contenido) {
  contenido.innerHTML = `

        <div class="topbar">

            <div>
                <h1>Clientes</h1>
                <p>Administración de clientes del taller.</p>
            </div>

            <button class="btn-primary" id="btnNuevoCliente"> 
            + Nuevo Cliente
            </button>

        </div>

        <section class="panel">

    <h2>Listado de clientes</h2>

    <table id="tablaClientes">

        <thead>
            <tr>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>Correo</th>
                <th>Dirección</th>
                <th>Acciones</th>
            </tr>
        </thead>

        <tbody id="listaClientes">

        </tbody>

    </table>

</section>

    `;
  const boton = document.getElementById("btnNuevoCliente");

  boton.addEventListener("click", () => {
    abrirFormulario();
  });
  renderizarClientes();
}

export { clientes };
