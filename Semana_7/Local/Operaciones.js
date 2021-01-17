const readline = require("readline-sync");
const Operaciones = {}

var a;
var b;



let opcion = readline.question("Que operacion desea realizar?")
console.log("1-suma");
console.log("2-resta");
console.log("3-multiplicacion");
console.log("4-Division");

if (opcion == 1) {

    suma();
} else if (opcion == 2) {
    resta();
} else if (opcion == 3) {
    multiplicacion();
} else if (opcion == 4) {
    division();
}


function suma() {
    a = readline.question("dame el primer numero: ");
    b = readline.question("dame el segundo numero: ");

    var resultado = parseFloat(a) + parseFloat(b);
    console.log("El resultado de la suma es: ", resiltado);
}



function resta() {
    a = readline.question("Dame el primer numero: ");
    b = readline.question("Dame el segundo numero: ");

    var resultado = parseFloat(a) - parseFloat(b);
    console.log("El resultado de la resta es: ", resiltado);

}


function multiplicacion() {
    a = readline.question("Dame el primer numero: ");
    b = readline.question("Dame el segundo numero: ");

    var resultado = parseFloat(a) * parseFloat(b);
    console.log("El resultado de la multiplicacion es: ", resiltado);

}


function division() {
    a = readline.question("Dame el primer numero: ");
    b = readline.question("Dame el segundo numero: ");


    if (b == 0) {
        console.log("La operacion no se pude realizar!");
    } else {
        var resultado = parseFloat(a) / parseFloat(b);
        console.log("El resultado de la division es: ", resiltado);
    }



}


module.exports = Operaciones();
Operaciones.suma = suma();