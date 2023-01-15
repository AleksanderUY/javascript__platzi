/* var miArreglo = ["John",24];
console.log(miArreglo); */

/* var estudiantes = ["Nora","Gino","Emily","Juan"];

var notas = [95,67,89,56];
console.log(notas); */

/* var listaDeEstudiantes = [["nora",97],["Gino",78]];
console.log(listaDeEstudiantes); */


/* var listaDePrecios = [["Camisa", 5.67, "s134"],["Celular",250,"s356"],["zapatos",36.7,"s555"]];
var datos = [[3.4, 5.6, 3.2],[6.7, 4.5, 7.8],[5.6, 7.8, 3.4]]; */

/* var miArreglo = [10, 20, 30]; */

/* 
arreglo: [10, 20, 30]
indices:  0   1   2
*/
/* console.log(miArreglo[0]);//10
console.log(miArreglo[1]);//20
console.log(miArreglo[2]);//30

var suma = miArreglo[0] + miArreglo[1] + miArreglo[2];
console.log(suma);//60 */

/* var miArreglo = [10, 20, 30];

miArreglo[1] = [1, 2, 3];

console.log(miArreglo); */

var miArreglo = [[1, 2, 3],[4,5,6],[7,8,9]];

/* 
arreglo:          [[1, 2, 3],[4,5,6],[7,8,9]];
indice:               0          1        2
indice internos:    0  1  2   0  1  2  0  1  2
*/
/* console.log(miArreglo[0]);// [1,2,3] */
/* console.log(miArreglo[1]); */// [4,5,6]
/* console.log(miArreglo[2]);// [7,8,9] */

/* console.log(miArreglo[1][2]); */// 6 


/* console.log(miArreglo[1][2]);// */

/* var estaciones = ["invierno","otono", "Primavera"];

estaciones.push("Verano");

console.log(estaciones); */


//remover con pop o retornarlo
/* var estaciones;

estaciones = ["Invierno","Otono","Primavera","Verano"];

estaciones.pop();

console.log(estaciones); */
/* var estaciones;
var estacion;
estaciones = ["Invierno","Otono","Primavera","Verano"];
estacion = estaciones.pop();
console.log(estaciones);
console.log(estacion); */

//remover el primer elemento del array
/* estaciones = ["Invierno","Otono","Primavera","Verano"];
estaciones.shift();

console.log(estaciones); */

/* var estaciones = ["Invierno","Otono","Primavera","Verano"];

estaciones.unshift("verano");//agregar al principio del arreglo
console.log(estaciones); */

//lista de compras
var miListaDeCompras = [["Cereal",3],["Leche",2], ["galletas, 4"], ["refresco,7"], ["Pollo,7"]];

console.log("Voy a comprar" + miListaDeCompras[1][1] "unidades de  ." + miListaDeCompras[0][0] + ".");


