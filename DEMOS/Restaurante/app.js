const contenedor = document.getElementById("mesas");

let mesas = [];

document.getElementById("btnMesa").addEventListener("click", () => {

  const nuevaMesa = {
    id: Date.now(),
    pedidos: []
  };

  mesas.push(nuevaMesa);
  render();
});

function render() {
  contenedor.innerHTML = "";

  mesas.forEach(mesa => {
    contenedor.innerHTML += `
      <div class="mesa">
        <h3>Mesa #${mesa.id}</h3>
        <button onclick="agregarPedido(${mesa.id})">
          ➕ Pedido
        </button>
        <ul>
          ${mesa.pedidos.map(p => `<li>${p}</li>`).join("")}
        </ul>
      </div>
    `;
  });
}

function agregarPedido(id) {
  const nombre = prompt("Producto:");

  if (!nombre) return;

  const mesa = mesas.find(m => m.id === id);
  mesa.pedidos.push(nombre);

  render();
}