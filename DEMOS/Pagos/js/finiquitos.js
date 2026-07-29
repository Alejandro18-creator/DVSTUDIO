

import { mostrarFormularioFiniquito } from "./finiquito-form.js";
/*import { mostrarVistaFiniquito } from "./finiquito-preview.js";*/

const btnNuevo = document.getElementById("btnNuevoFiniquito");

if (btnNuevo) {
  btnNuevo.addEventListener("click", () => {
    mostrarFormularioFiniquito((datos) => {
      const trabajadores =
        JSON.parse(sessionStorage.getItem("trabajadores")) || [];

      const trabajador = trabajadores.find(
        (t) => t.nombre === datos.trabajador,
      );

      const finiquito = {
        trabajador: datos.trabajador,

        empresa: trabajador?.empresa || "-",

        cargo: trabajador?.cargo || "-",

        fechaIngreso: datos.fechaIngreso,

        fechaTermino: datos.fechaTermino,

        causal: datos.causal,

        sueldo: datos.sueldo,

        haberes: datos.haberes,

        descuentos: datos.descuentos,

        observaciones: datos.observaciones,
      };

      mostrarVistaFiniquito(finiquito);
    });
  });
}
