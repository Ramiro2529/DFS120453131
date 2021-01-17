const operaciones = {}

function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

function multiplicacion(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

module.exports = operaciones;
operaciones.suma = suma;
operaciones.resta = resta;
operaciones.multiplicacion = multiplicacion;
operaciones.division = division;