var botonInicio = document.querySelector(".btn-iniciar");
var botonAgregar = document.querySelector(".btn-agregar");
var botonAceptar = document.querySelector(".btn-aceptar");
var botonCancelar = document.querySelector(".btn-cancelar");
var seccion1 = document.querySelector(".seccion1");
var seccion2 = document.querySelector(".seccion2");
var listaLetras = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let soud = new Audio ("./sound/squeaky-door-open-113212.mp3")
let soundAgregarPalabra = new Audio("./sound/evil-demonic-laugh-6925.mp3")
 
botonInicio.addEventListener("click", () => {
  soud.play()
  seccion2.classList.add("ocultarOpaco");
  seccion1.classList.remove("ocultar");
});

botonAceptar.addEventListener("click", () => {
  soundAgregarPalabra.play()
  
  var entrada = document.querySelector(".entrada-texto");
  
  
  if (entrada.value.length == 0) {
    swal(
      "Un momento!",
      "Debes ingresar letras (A-Z)" +
        "\n" +
        "Sin espacios, acentos o caracteres especiales.",
      "warning"
    );
    return;
  }
  for (var i = 0; i < entrada.value.length; i++) {
    if (!listaLetras.includes(entrada.value.toUpperCase()[i])) {
      swal(
        "Un momento!",
        "Debes ingresar letras(A-Z)" +
          "\n" +
          "Sin espacios, acentos o caracteres especiales.",
        "warning"
      );
      return;
    }
  }
   if (!listaPalabras.includes(entrada.value.toUpperCase())) {
    agregarPalabranueva(entrada.value.toUpperCase());
    vaciarEntrada();
    swal(
      "Palabra agregada con éxito",
      "Ingresa la cantidad de palabras que gustes",
      "success"
    );
  } else {
    swal(
      "Esa palabra ya pertenece a la lista",
      "Ingresa una palabra diferente",
      "warning"
    );
  }
});

function vaciarEntrada() {
  var entrada = document.querySelector(".entrada-texto");
  entrada.value = "";
}


botonAgregar.addEventListener("click", () =>{
  soundAgregarPalabra.play()
  var formulario = document.querySelector(".contenedor-texto");
  formulario.classList.add("mostrar");
  formulario.classList.remove("ocultar2");

})


botonCancelar.addEventListener("click", ()=>{
  soundAgregarPalabra.play()
  var formulario = document.querySelector(".contenedor-texto");
  formulario.classList.remove("mostrar");
  formulario.classList.add("ocultar2");
  vaciarEntrada();
})




