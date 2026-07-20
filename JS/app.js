

const reveals = document.querySelectorAll(".reveal");



function mostrarSecciones() {
  const altoVentana = window.innerHeight;

  reveals.forEach((elemento) => {
    const posicion = elemento.getBoundingClientRect().top;

    

    if (posicion < altoVentana - 100) {
      elemento.classList.add("active");
    }
  });
}

window.addEventListener("scroll", mostrarSecciones);
window.addEventListener("load", mostrarSecciones);
