//declarativas
function miFuncion() {
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

saludar('Diego');