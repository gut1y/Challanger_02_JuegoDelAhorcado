var botonNuevo = document.querySelector(".btn-nuevo");
var botonDesistir = document.querySelector(".btn-desistir");
var contenedorLetras = document.querySelector(".contenedor-letras-bien");
var contenedorLetrasMal = document.querySelector(".contenedor-letras-mal");
var teclado = document.querySelector(".teclado");
var tecladoPantalla = document.querySelector(".teclado-pantalla");
var listaTeclas = document.querySelectorAll(".key");

var letraActual = "";
var palabraActual = "";
var letrasIncorrectas = "";
var aJugar = "A JUGAR!";
var contadorLetrasCorrectas = 0;
var repetidas = [];
//Sound
let soundNuevoJuego = new Audio("./sound/evil-shreik-45560.mp3")
let soundDesistir = new Audio ("./sound/old-church-bell-6298.mp3")

botonNuevo.addEventListener("click", ()=>{
    soundNuevoJuego.play()
    habilitarTeclas()
    teclado.onclick = mostrarTeclado;
    resetearValores();
    activarTeclas();
    rotar();
    var aleatorio = generarNumeroAleatorio(listaPalabras.length);
    palabraActual = listaPalabras[aleatorio]
    crearBloqueVacio(listaPalabras[aleatorio]);
    resetearCanvas();
    
})

botonDesistir.addEventListener("click", ()=> {
    soundDesistir.play()
    seccion2.classList.remove("ocultarOpaco")
    seccion1.classList.add("ocultar");
    anularTeclado();
    anularTecladoPantalla();
    resetearValores();
    volverAtras();
    crearBloqueLleno(aJugar)
    ocultarTeclado();
    ocultarFormulario();
})

function habilitarTeclas(){
    for(var tecla of listaTeclas){
        tecla.addEventListener("click",habilitarTeclado);
    }
}

function habilitarTeclado(){
    activarTecladoPantalla(this.textContent);
 }