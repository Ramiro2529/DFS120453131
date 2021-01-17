const readline = require("readline-sync");

pedirNombre();

function pedirNombre() {

    let nombre = readline.question("Escribe tu nombre: ");
    console.log("Hola", nombre);
}