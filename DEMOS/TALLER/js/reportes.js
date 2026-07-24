export function mostrarReportes(contenido) {
  contenido.innerHTML = `

    <div class="topbar">

      <div>
        <h1>Reportes</h1>
        <p>Resumen general de la actividad del taller.</p>
      </div>

    </div>

    <section class="panel">

      <h2>🚗 Vehículos en Taller</h2>

      <p><strong>Total:</strong> 12</p>

      <table>

        <thead>
          <tr>
            <th>Cliente</th>
            <th>Vehículo</th>
            <th>Patente</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Juan Pérez</td>
            <td>Toyota Yaris</td>
            <td>ABCD12</td>
            <td>En reparación</td>
          </tr>

          <tr>
            <td>Ana Soto</td>
            <td>Hyundai Accent</td>
            <td>EFGH34</td>
            <td>Esperando repuestos</td>
          </tr>

          <tr>
            <td>Carlos Díaz</td>
            <td>Kia Rio</td>
            <td>IJKL56</td>
            <td>Listo para entrega</td>
          </tr>

        </tbody>

      </table>

    </section>

    <section class="panel">

      <h2>📅 Citas de Hoy</h2>

      <p><strong>Total:</strong> 8</p>

      <table>

        <thead>
          <tr>
            <th>Hora</th>
            <th>Cliente</th>
            <th>Vehículo</th>
            <th>Motivo</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>09:00</td>
            <td>Juan Pérez</td>
            <td>Toyota Yaris</td>
            <td>Cambio de aceite</td>
          </tr>

          <tr>
            <td>10:30</td>
            <td>Ana Soto</td>
            <td>Hyundai Accent</td>
            <td>Frenos</td>
          </tr>

          <tr>
            <td>11:30</td>
            <td>Pedro Rojas</td>
            <td>Nissan Versa</td>
            <td>Mantención</td>
          </tr>

        </tbody>

      </table>

    </section>

    <section class="panel">

      <h2>👥 Clientes Registrados</h2>

      <p><strong>Total:</strong> 10</p>

      <table>

        <thead>
          <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Vehículo</th>
            <th>Patente</th>
            <th>Correo Electrónico</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Juan Pérez</td>
            <td>+56 9 9876 5432</td>
            <td>Toyota Yaris</td>
            <td>ABCD12</td>
            <td>juan@email.cl</td>
          </tr>

          <tr>
            <td>Ana Soto</td>
            <td>+56 9 9123 4567</td>
            <td>Hyundai Accent</td>
            <td>EFGH34</td>
            <td>ana@email.cl</td>
          </tr>

          <tr>
            <td>Carlos Díaz</td>
            <td>+56 9 9988 7766</td>
            <td>Kia Rio</td>
            <td>IJKL56</td>
            <td>carlos@email.cl</td>
          </tr>

          <tr>
            <td>Pedro Rojas</td>
            <td>+56 9 9654 3210</td>
            <td>Nissan Versa</td>
            <td>MNOP78</td>
            <td>pedro@email.cl</td>
          </tr>

          <tr>
            <td>María González</td>
            <td>+56 9 9547 8521</td>
            <td>Chevrolet Sail</td>
            <td>QRST90</td>
            <td>maria@email.cl</td>
          </tr>

          <tr>
            <td>Luis Herrera</td>
            <td>+56 9 9456 7890</td>
            <td>Suzuki Swift</td>
            <td>UVWX12</td>
            <td>luis@email.cl</td>
          </tr>

          <tr>
            <td>Camila Torres</td>
            <td>+56 9 9321 6548</td>
            <td>Mazda 3</td>
            <td>YZAB34</td>
            <td>camila@email.cl</td>
          </tr>

          <tr>
            <td>Diego Morales</td>
            <td>+56 9 9234 5678</td>
            <td>Peugeot 208</td>
            <td>CDEF56</td>
            <td>diego@email.cl</td>
          </tr>

          <tr>
            <td>Francisca Silva</td>
            <td>+56 9 9789 1234</td>
            <td>Renault Clio</td>
            <td>GHIJ78</td>
            <td>fran@email.cl</td>
          </tr>

          <tr>
            <td>Ricardo Muñoz</td>
            <td>+56 9 9111 2233</td>
            <td>Volkswagen Gol</td>
            <td>KLMN90</td>
            <td>ricardo@email.cl</td>
          </tr>

        </tbody>

      </table>

    </section>

    <section class="panel">

      <h2>🔧 Órdenes de Trabajo Abiertas</h2>

      <p><strong>Total:</strong> 15</p>

      <table>

        <thead>
          <tr>
            <th>N° OT</th>
            <th>Cliente</th>
            <th>Vehículo</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>1001</td>
            <td>Juan Pérez</td>
            <td>Toyota Yaris</td>
            <td>En proceso</td>
          </tr>

          <tr>
            <td>1002</td>
            <td>Ana Soto</td>
            <td>Hyundai Accent</td>
            <td>Esperando repuestos</td>
          </tr>

          <tr>
            <td>1003</td>
            <td>Carlos Díaz</td>
            <td>Kia Rio</td>
            <td>Diagnóstico</td>
          </tr>

        </tbody>

      </table>

    </section>

  `;
}
