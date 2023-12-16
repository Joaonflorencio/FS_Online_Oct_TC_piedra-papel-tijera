const opciones = ["piedra", "papel", "tijera"];
let puntosUsuario = 0;
let puntosOrdenador = 0;

const botones = document.querySelectorAll('.boton-jugada');
const resultados = document.getElementById('resultados');
const contadorUsuario = document.getElementById('contador-usuario');
const contadorOrdenador = document.getElementById('contador-ordenador');

// for (let i = 0; i < botones.length; i++) {
//   botones[i].addEventListener('click', function () {
//     const eleccionUsuario = botones[i].dataset.jugada;
//     const eleccionordenador = opciones[Math.floor(Math.random() * 3)];

//     const resultado = obtenerResultado(eleccionUsuario, eleccionordenador);
//     mostrarResultado(resultado, eleccionUsuario, eleccionordenador);

//     if (resultado === "Ganaste") {
//       puntosUsuario++;
//     } else if (resultado === "Perdiste") {
//       puntosOrdenador++;
//     }

//     actualizarPuntuacion();
//   });
// }


botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const eleccionUsuario = boton.dataset.jugada;
    const eleccionOrdenador = opciones[Math.floor(Math.random() * 3)];    
    const resultado = obtenerResultado(eleccionUsuario, eleccionOrdenador);
    mostrarResultado(resultado, eleccionUsuario, eleccionOrdenador);

    if (resultado === "Ganaste") {
      puntosUsuario++;
    } else if (resultado === "Perdiste") {
      puntosOrdenador++;
    }

    actualizarPuntuacion();
  });
});

const obtenerResultado = (usuario, ordenador) => {
  if (usuario === ordenador) return "Empate";
  if (
    (usuario === "piedra" && ordenador === "tijera") ||
    (usuario === "papel" && ordenador === "piedra") ||
    (usuario === "tijera" && ordenador === "papel")
  ) {
    return "Ganaste";
  }
  return "Perdiste";
}

const mostrarResultado = (resultado, usuario, ordenador) => {
  resultados.innerHTML = `Tú elegiste <strong>${usuario}</strong>. El ordenador eligió <strong>${ordenador}</strong>. Resultado: ${resultado}`;
}

const actualizarPuntuacion = () => {
  contadorUsuario.textContent = `Tus puntos: ${puntosUsuario}`;
  contadorOrdenador.textContent = `Puntos del ordenador: ${puntosOrdenador}`;
}