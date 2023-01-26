/* let nombre = "Homero";
let edad = 39;
let calle = "Av.Siempreviva 742";
//las variables anteriores entran relacionados entre si, entonces mejor usamos un objeto:
const personal = {nombre:"homero",edad:39, calle:"Av.Siempreviva 742"};
console.log(personal);//se muestra el objeto en la consola
console.log(personal.nombre);
console.log(personal.calle);
console.log(personal.edad); */

/* let counter = 0;

function createObject() {
  counter++;
  let objName = "obj" + counter;
  window[objName] = {};
}

let objects = [];

function createObject() {
  let objName = "obj" + objects.length;
  let obj = { name: objName };
  objects.push(obj);
}

function createObject() {
    let nombre = document.getElementById("nombre").value;
    let cedula = document.getElementById("cedula").value;
    let objName = "obj" + objects.length;
    let obj = { name: objName, nombre, cedula };
    objects.push(obj);
  } */

  var miPerro = {
    "Nombre": "Gino",
    "edad": 5,
    "peso": 6,
    "raza": "Beagle"
  };

// Acceder a las propiedades Notacion de punto

/* console.log(miPerro.Nombre);
console.log(miPerro.edad);
console.log(miPerro.peso);
console.log(miPerro.raza); */

//acceder a propiedades: notacion de corchetes

var miCuaderno = {
  "color": "verde",
  "categoria": 3,
  "numero de paginas": 200,
  "numero de hojas": 100,
}

/* console.log(miCuaderno["color"]); */

//acceder a un objeto mediante una variable
/* var resultados = {
  1: "nora256",
  2: "gino577",
  3: "estef543",
  4: "kiara566"
}

var posicion = 2;
console.log(resultados[posicion]); */

//Actualizar propiedades!

/* var mochila = {
  "color": "azul",
  "tamano": "mediano",
  "contenido": ["botella de agua", "cuaderno"]
}
  console.log(mochila.color);
mochila.color="verde";
console.log(mochila.contenido);
mochila.contenido.push("lapiz");
console.log(mochila.contenido);

mochila.contenido=[]; */

//agregar propiedades
/* var curso = {
  "titulo": "aprende javascript de cero",
  "idioma": "espanol",
  "duracion":30
}

curso.vistas = 34500;
console.log(curso.vistas); */

// eliminar una propiedad
/* 
delete curso.duracion;
console.log(curso.duracion); */

//objetos para busquedas!

/*  funtion buscarElementoQuimico(simbolo){
var elementoQuimico = "";
 var simbolosQuimicos = {
  "Al": "Aliminio",
  "S": "Azufre",
  "Cl": "Cloro",
  "He": "Helio",
  "B": "Boro"
  "Li": "Litio"
} 



switch (simbolo){
  case "Al":
    elementoQuimico = "Aluminio";
    break;
  case "S":
    elementoQuimico = "Azufre";
    break;
  case "He":
    elementoQuimico = "Cloro";
    break;
  case "Helio":
    elementoQuimico = "Helio";
    break;
  case "B":
    elementoQuimico = "Boro";
    break;
  case "Litio":
    elementoQuimico = "Litio";
    break;
}
return elementoQuimico;
 }
console.log(buscarElementoQuimico("Al"));  */

/* var miCuaderno = {
  "color": "verde",
  "categoria": 3,
  "precio": 4.56
};
//-----------------------------------------------
//estamos preguntando si tiene esa propiedad
console.log( miCuaderno.hasOwnProperty("color"));

function verificarPropiedad(obj, propiedad){
  if(obj.hasOwnProperty(propiedad)){
    return "Propiedad:" + obj[propiedad];
  } else {
    return "El objeto no tiene esta propiedad";
  }
}
var miCuaderno = {
  "color": "verde",
  "categoria": 3,
  "precio": 4.56
};
console.log(verificarPropiedad(miCuaderno)); */
//------------------------------------------------

//OBJETOS COMPLEJOS=====

/* var ordenesDePizzas = [
{
  "tipo": "margarita",
  "tamano": "individual",
  "precio": 5.67,
  "toppings": [
    "extra queso",
    "champiniones",
    "pina"
  ],
  "paraLlevar": true
},
{
  "tipo": "cuatro quesos",
  "tamano": "familiar",
  "precio": 18.34,
  "toppings" : [
    "extra queso",
    "pimenton"
  ],
  "paraLlevar": false

}
];

console.log(ordenesDePizzas[0].tipo); */

// OBJETOS ANIDADOS========= objetos dentro de otros objetos
/* var miReceta = {
  "descripcion": "mi postre favorito",
  "costo": 15.6,
  "ingredientes": {
    "masa": {
      "harina": "100grs",
      "sal": "1 cucharadita",
      "agua": "1 taza"
    },
    "cobertura": {
      "azucar": "120grs",
      "chocolate": "4 cucharadas",
      "mantequilla": "200 grs"
    }
  }
};
console.log(miReceta.descripcion);
console.log(miReceta.costo);
console.log(miReceta.ingredientes.masa.harina); */
//******************************************************************* */
//ejercicio
/* 
Tenemos un objeto que representa parte de una coleccion de albumes musicales
Cada album tiene un numero de indentificacion unico (ID) asociado a otras propiedades.
No todos los albumes tienen la info completa.
*/
// minuto 6HR
/* var coleccionDeDiscos = {
  7853: {
    tituloDelAlbum: "Bee Gees Greatest",
    artista: "Bee Gees",
    canciones: ["Staying Alive"]
  },
  5439: {
    tituloDelAlbum: "ABBA Gold"
  }
}
function ActualizarDiscos (discos, id, propiedad, valor){
  if (valor === ""){
    delete discos [id][propiedad];
  } else if(propiedad === "canciones"){
    discos[id][propiedad] = discos[id][propiedad] || [];
    discos[id][propiedad].push(valor);
  } else {
    discos [id][propiedad] = valor;
  }
}

console.log(coleccionDeDiscos[5439].artista);
ActualizarDiscos(coleccionDeDiscos, 5439, "artista", "ABBA");
console.log(coleccionDeDiscos[5439].artista); */