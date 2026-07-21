export function mostrarAgenda(contenido) {

    contenido.innerHTML = `

        <div class="topbar">

            <div>
                <h1>Agenda</h1>
                <p>Administración de citas del taller.</p>
            </div>

            <button class="btn-primary">
                + Nueva Cita
            </button>

        </div>

        <section class="panel">

            <h2>Citas programadas para hoy</h2>

            <table>

                <thead>
                    <tr>
                        <th>Hora</th>
                        <th>Cliente</th>
                        <th>Vehículo</th>
                        <th>Patente</th>
                        <th>Estado</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td>09:00</td>
                        <td>Juan Pérez</td>
                        <td>Toyota Yaris</td>
                        <td>LKHG52</td>
                        <td><span class="estado diagnostico">Confirmada</span></td>
                    </tr>

                    <tr>
                        <td>10:30</td>
                        <td>María González</td>
                        <td>Kia Morning</td>
                        <td>PRXT18</td>
                        <td><span class="estado reparacion">En espera</span></td>
                    </tr>

                </tbody>

            </table>

        </section>

    `;

}