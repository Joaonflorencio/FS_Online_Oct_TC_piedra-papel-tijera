const opciones = ["Piedra", "Papel", "Tijera"];
let puntosUsuario = 0;
let puntosOrdenador = 0;

const botones = document.querySelectorAll('.boton-jugada');
const resultados = document.getElementById('resultados');
const contadorUsuario = document.getElementById('contador-usuario');
const contadorOrdenador = document.getElementById('contador-ordenador');


botones.forEach(boton => {
    boton.addEventListener('click', () => {
       const opcionUsuario = boton.dataset.boton-jugada;
       const opcionOrdenador = opciones[Math.floor(Math.random() * opciones.length)];
       obtenerResultado(opcionUsuario, opcionOrdenador);
    });
   });
   
   function obtenerResultado(opcionUsuario, opcionOrdenador) {
    if (opcionUsuario === opcionOrdenador) {
       return 'Empate';
    }
    if (
       (opcionUsuario === 'Piedra' && opcionOrdenador === 'Tijera') ||
       (opcionUsuario === 'Papel' && opcionOrdenador === 'Piedra') ||
       (opcionUsuario === 'Tijera' && opcionOrdenador === 'Papel')
    ) {
       return 'Ganaste';
    } else {
       return 'Perdiste';
    }
   }
   
   function mostrarResultado(resultado) {
    resultados.textContent = resultado;
   }
   
   function actualizarPuntuacion(usuario, ordenador) {
    puntosUsuario += usuario;
    puntosOrdenador += ordenador;
    contadorUsuario.textContent = puntosUsuario;
    contadorOrdenador.textContent = puntosOrdenador;
   }