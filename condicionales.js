/* var x = 5;

if (x > 2 && x < 10){
    console.log("la condicion es verdadera");
} */

/* var estacion = "Invierno";

if (estacion == "Invierno"){
    console.log("si, me encanta el invierno");
}
console.log("despues del condicional..."); */
//-----------------------------------------------------------------------
//clausula ELSE
/* let a = 5;

if (a < 4){
    console.log("La condicion es verdadera.");
} else {
    console.log("La condicion es falsa.");
} */

/* var estacion = "Invierno";
if (estacion == "Verano"){
    console.log("ya podemos ir a la playa");
} else {
    console.log("todavia no es verano hay que esperar para ir a la playa!");
} */
//---------------------------------------------------------------------------
//condiciones else if

/* function clasificarValor(valor){
    if(valor % 2 == 0) {
        console.log("es divisible entre 2.");
    } else if(valor % 3 == 0) {
        console.log("divisible entre 3.");
    }
    else {
        console.log("NO es divisible entre 2.");
    }
} 

clasificarValor(); */

/* function clasificarValor(valor) {
    if (valor < 5) {
        console.log("menor que 5");
    } else if (valor < 10){
        console.log("valor menor que 10");
    } else{
        console.log("mayor o igual a 10");
    }
}
clasificarValor(10); */

//encadenar sentencias if else
/* function interpretarIMC(indiceDeMasaCorporal){
    if (indiceDeMasaCorporal < 18.5) {
        console.log("Bajo Peso");
    } else if(indiceDeMasaCorporal <= 24.9){
        console.log("Normal");
    } else if(indiceDeMasaCorporal <= 29.9){
        console.log("sobrepeso");
    } else {
        console.log("obeso");
    }
}
interpretarIMC(27.4); */
//-------------------------------------------------------------------------------------
//ejercicio elaborar condicionales que calcule el promedio y arroje el nombre de los golpes de un golfista.
function puntajeDeGolf(par,golpes) {
    if(golpes == 1){
        return "hole in one";
    } else if(golpes <= par - 2){
        return "Eagle";
    }
    else if (golpes == par - 1){
        return "birdie";
    }
    else if (golpes == par){
        return"Par";
    }
    else if(golpes == par + 1){
        return"Bogey";
    }
    else if(golpes == par + 2){
        return"Double Bogey";
    }
    else if(golpes >= par + 3){
        return"Go Home!";
    }
}
console.log(puntajeDeGolf(4, 3));