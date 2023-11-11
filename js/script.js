const options = [0, 1, 2]
const puntosUsuario = 0
const puntosOrdenador = 0

let botonPiedra = document.querySelectorAll(".botonjugada")[0]
let botonPapel = document.querySelectorAll(".botonjugada")[1]
let botonTijera = document.querySelectorAll(".botonjugada")[2]
let contadorUsuario = document.getElementById("contador-usuario")
let contadorOrdenador = document.getElementById("contador-ordenador")
let resultados = document.getElementById("resultados")

botonPiedra.addEventListener("click", function() {
   jugarPiedra();
   actualizarContador();
});
botonPapel.addEventListener("click", function() {
   jugarPapel();
   actualizarContador();
});
botonTijera.addEventListener("click", function() {
   jugartijera();
   actualizarContador();
});

    function jugarPiedra() {
      contadorUsuario = 0;
      contadorOrdenador = obtenerJugadaOrdenador();
      obtenerResultado();
  }
  function jugarPapel() {
   contadorUsuario = 1;
   contadorOrdenador = obtenerJugadaOrdenador();
   obtenerResultado();
}
function jugartijera() {
   contadorUsuario = 2;
   contadorOrdenador = obtenerJugadaOrdenador();
   obtenerResultado();
}

   
    function obtenerJugadaOrdenador() {
      return Math.floor(Math.random() * 3)
   }


    function obtenerResultado () {
    
if ( contadorUsuario === contadorOrdenador 

    ) {puntosUsuario= 0 ; puntosOrdenador=0}
else if  (  
   contadorUsuario=== 0 && contadorOrdenador ===1

) {puntosOrdenador +=1}
else if  (  
   contadorUsuario=== 0 && contadorOrdenador ===2

) {puntosUsuario +=1}
else if  (  
   contadorUsuario=== 1 && contadorOrdenador ===0

) {puntosUsuario +=1}
else if  (  
   contadorUsuario=== 1 && contadorOrdenador ===2

) {puntosOrdenador +=1}
else if  (  
   contadorUsuario=== 2 && contadorOrdenador ===0

) {puntosOrdenador +=1}
else if  (  
   contadorUsuario=== 2 && contadorOrdenador ===1

) {puntosUsuario +=1}
}
    

function actualizarContador() {
   contadorUsuario.textContent = puntosUsuario;
   contadorOrdenador.textContent = puntosOrdenador;
}

