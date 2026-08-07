const menu = [
  { nombre: "🍔 Hamburguesa", precio: 5000 },
  { nombre: "🍕 Pizza", precio: 8000 },
  { nombre: "🥤 Bebida", precio: 2000 },
  { nombre: "🍟 Papas fritas", precio: 3000 },
];

const contenedor = document.getElementById("mesas");

let mesas = [];

document.getElementById("btnMesa").addEventListener("click", () => {
  const nuevaMesa = {
    id: mesas.length + 1,
    pedidos: [],
    estado: "Libre",
    total: 0,
  };

  mesas.push(nuevaMesa);
  render();
});

function render() {
  contenedor.innerHTML = `

    <div style="text-align:center; margin-bottom:30px;">
      <h1 style="color:#22c55e; font-size:28px;">
        🍽️ DVSTUDIO RESTAURANT
      </h1>
      <p style="color:#9ca3af;">
        Demo interactiva de gestión de mesas
      </p>
    </div>

    <div class="mesas">
      ${mesas
        .map(
          (mesa) => `
        <div class="mesa ${mesa.estado === "Ocupada" ? "ocupada" : ""}" 
             onclick="seleccionarMesa(${mesa.id})">
             
          <h3>Mesa</h3>
          <p>#${mesa.id}</p>
          <span>${mesa.estado}</span>
        </div>
      `,
        )
        .join("")}
    </div>

    <div class="panel" id="panelMesa">
      <h2>Selecciona una mesa</h2>
    </div>
  `;
}

function agregarPedido(id, nombre, precio) {
  const mesa = mesas.find((m) => m.id === id);

  const existente = mesa.pedidos.find((p) => p.nombre === nombre);

  if (existente) {
    existente.cantidad += 1;
  } else {
    mesa.pedidos.push({ nombre, precio, cantidad: 1 });
  }

  // ✅ SUMAR TOTAL
  mesa.total += precio;
  mesa.estado = "Ocupada";

  render();
  seleccionarMesa(id);
}

function cerrarMesa(id) {
  const mesa = mesas.find((m) => m.id === id);

  // ❌ quitar alert
  // alert(`Total a pagar: $${mesa.total}`);

  // ✅ mostrar total en la tarjeta
  mesa.estado = "Pagado";

  render();

  // volver a seleccionar para ver el total
  seleccionarMesa(id);
}

function eliminarPedido(id, nombre) {
  const mesa = mesas.find((m) => m.id === id);

  const pedido = mesa.pedidos.find((p) => p.nombre === nombre);

  if (!pedido) return;

  // restar del total
  mesa.total -= pedido.precio * pedido.cantidad;

  // eliminar pedido
  mesa.pedidos = mesa.pedidos.filter((p) => p.nombre !== nombre);

  render();
  seleccionarMesa(id);
}

function seleccionarMesa(id) {
  const mesa = mesas.find((m) => m.id === id);

  const panel = document.getElementById("panelMesa");

  panel.innerHTML = `
    <h2>Mesa #${mesa.id}</h2>
    <p>Estado: ${mesa.estado}</p>
    <p>Total: $${mesa.total}</p>

    <div class="menu">
      ${menu
        .map(
          (item) => `
        <button onclick="agregarPedido(${mesa.id}, '${item.nombre}', ${item.precio})">
          ${item.nombre}
        </button>
      `,
        )
        .join("")}
    </div>

    <ul>
      ${mesa.pedidos
        .map(
          (p) => `
        <li onclick="eliminarPedido(${mesa.id}, '${p.nombre}')">
          ${p.nombre} x${p.cantidad} - $${p.precio * p.cantidad}
        </li>
      `,
        )
        .join("")}
    </ul>

    <button onclick="cerrarMesa(${mesa.id})">
      💰 Cerrar Mesa
    </button>
  `;
}
