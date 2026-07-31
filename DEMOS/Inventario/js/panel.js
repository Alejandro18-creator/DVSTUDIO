export function mostrarPanel() {
  const contenido = document.getElementById("contenido");

  contenido.innerHTML = `
    <section class="panel">

      <div class="card">
        <h1>📦 Control de Inventario</h1>
        <p>Bienvenido al sistema de gestión de inventario de DEVSTUDIO.</p>
      </div>

      <div class="dashboard-grid">

        <div class="card">
          <h3>📦 Productos</h3>
          <h2>0</h2>
        </div>

        <div class="card">
          <h3>🏷 Categorías</h3>
          <h2>0</h2>
        </div>

        <div class="card">
          <h3>⚠ Stock Bajo</h3>
          <h2>0</h2>
        </div>

        <div class="card">
          <h3>🔄 Movimientos</h3>
          <h2>0</h2>
        </div>

      </div>

      <div class="card">
        <h3>Actividad reciente</h3>
        <p>Aún no existen movimientos registrados.</p>
      </div>

    </section>
  `;
}