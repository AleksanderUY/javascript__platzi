//declarativas
/* function miFuncion() {
    return 3;
}

miFuncion();

//expresion

var miFuncion = function(a,b) {
    return a + b;

}

miFuncion();

function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

saludar("Diego"); */

/* function mostrarMensaje(){
    console.log("hola mundo");
}

mostrarMensaje();
mostrarMensaje();
mostrarMensaje(); */

//argumentos
/* function sumar(a,b){
    var suma = a + b;
    console.log("el resultado de a+b es: " + suma);
}
sumar (5,5);
sumar (10,5);
sumar (3,5);
sumar (1,5); */

//concatenar
/* function concatenarTresCadenas (cadena1,cadena2,cadena3){
    console.log(cadena1 + " " + cadena2 + " " + cadena3);
}
concatenarTresCadenas("estoy","aprendiendo","a programar"); */

/* var miVariableGlobal = 5;

console.log(miVariableGlobal);
function miFuncion(){
    console.log(miVariableGlobal);
}
miFuncion(); */

//variables locales

/* function miFuncion(){
    var miVariableLocal = 4;
    console.log(miVariableLocal);
}
miVariableLocal();//no esta definida porque esta dentro de la funcion!
 */

/* var miNombre = "Nora";

function mostrarMiNombre(){
    var miNombre = "Gino";
    console.log(miNombre);
}
mostrarMiNombre();
console.log(miNombre); */
//retornando un valor en la funcion para mostrar en pantalla el resultado
/* function sumar (a,b){
    return a + b;
}
console.log(sumar (5,3)); */
//return undefined
/* function sumar (a,b){
    console.log(a + b);
}
console.log(sumar(5,3)); */

//asignar un valor retornado a una variable
/* function sumar (a,b){
    return a+b;
}
var resultado = sumar (5,2);//aqui se le asigna 
console.log(resultado); */

/* function crearCadenaConMeta(){
    return "Mi meta es apprender" + lenguanjeDeProgramacion;
}
var miMeta = crearCadenaConMeta("Javascript");

console.log(miMeta); */
//en la funcion agregar un elemento mostrarlo y remover
/* function proximoEnLaFila(arreglo,elemento){
    arreglo.push(elemento);//agregar al final del arreglo.
    return arreglo.shift();//remover el primer elemento.

}
var miArreglo = [1,2,3,4,5];
console.log("antes"+JSON.stringify(miArreglo));
console.log(proximoEnLaFila(miArreglo,6));
console.log("despues" + JSON.stringify(miArreglo)); */
