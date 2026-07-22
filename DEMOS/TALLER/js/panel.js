export function mostrarPanelPrincipal(contenido) {
  contenido.innerHTML = `

        <div class="topbar">

            <div>
                <h1>Panel Principal</h1>
                <p>
                    Bienvenido a MotorPro. Aquí podrás controlar una <span class="demo-texto">demostración</span> 
                    de las operaciones diarias de un taller.
                </p>
            </div>

        </div>

        <div class="cards">

            <div class="card">
                <h3>🚗 Vehículos en Taller</h3>
                <h2>12</h2>
            </div>

            <div class="card">
                <h3>📅 Citas de Hoy</h3>
                <h2>8</h2>
            </div>

            <div class="card">
                <h3>👥 Clientes Registrados</h3>
                <h2>246</h2>
            </div>

            <div class="card">
                <h3>🔧 OT Abiertas</h3>
                <h2>15</h2>
            </div>

        </div>

    `;
}
