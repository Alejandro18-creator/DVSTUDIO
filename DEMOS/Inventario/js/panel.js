export function mostrarPanel() {
  const contenido = document.getElementById("contenido");

  contenido.innerHTML = `
    <section class="panel">
      <h1>Control de Inventario</h1>
      <p>Bienvenido al sistema de inventario.</p>
    </section>
  `;
}