"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var numeroIngresado = readlineSync.questionInt("Ingrese un numero :");
var resultado = numeroIngresado % 2;
if (numeroIngresado == 0) {
    console.log(" El numero ingresado es: 0");
}
else {
    if (resultado == 0) {
        console.log("el numero ingresado es: Par ");
    }
    else {
        console.log("el numero ingresado es: Impar");
    }
}
