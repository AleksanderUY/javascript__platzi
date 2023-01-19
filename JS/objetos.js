/* let nombre = "Homero";
let edad = 39;
let calle = "Av.Siempreviva 742";
//las variables anteriores entran relacionados entre si, entonces mejor usamos un objeto:
const personal = {nombre:"homero",edad:39, calle:"Av.Siempreviva 742"};
console.log(personal);//se muestra el objeto en la consola
console.log(personal.nombre);
console.log(personal.calle);
console.log(personal.edad); */

let counter = 0;

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
  }
  