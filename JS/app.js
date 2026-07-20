console.log("app.js cargado");

const reveals = document.querySelectorAll(".reveal");

console.log(reveals);

function mostrarSecciones() {
  const altoVentana = window.innerHeight;

  reveals.forEach((elemento) => {
    const posicion = elemento.getBoundingClientRect().top;

    console.log(elemento.id, posicion);

    if (posicion < altoVentana - 100) {
      console.log("Activando:", elemento.id);
      elemento.classList.add("active");
    }
  });
}

window.addEventListener("scroll", mostrarSecciones);
window.addEventListener("load", mostrarSecciones);
