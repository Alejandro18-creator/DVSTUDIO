export function mostrarPanel() {
  const contenido = document.getElementById("contenido");

  contenido.innerHTML = `

        <h1>📊 Panel de Control</h1>

        <div class="panel-grid">

            <div class="card">
                <h3>Trabajadores</h3>
                <p>25</p>
            </div>

            <div class="card">
                <h3>Contratos</h3>
                <p>22</p>
            </div>

            <div class="card">
                <h3>Producción</h3>
                <p>18</p>
            </div>

            <div class="card">
                <h3>Liquidaciones</h3>
                <p>12</p>
            </div>

            <div class="card">
                <h3>Finiquitos</h3>
                <p>3</p>
            </div>

        </div>

    `;
}
