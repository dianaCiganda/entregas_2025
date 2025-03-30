"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auto_1 = require("./auto");
var primerAuto = new auto_1.Auto("Ford", "Fiesta", 1996);
var segundoAuto = new auto_1.Auto("Fiat", "Palio", 2003);
var tercerAuto = new auto_1.Auto("Toyota", "Corolla", 2025);
console.log("El auto ".concat(primerAuto.marca, " modelo ").concat(primerAuto.modelo, " a\u00F1o ").concat(primerAuto.anio));
console.log(primerAuto.acelerar(300)),
    console.log("-----------------------------------------------------");
console.log("El auto ".concat(segundoAuto.marca, " modelo ").concat(segundoAuto.modelo, " a\u00F1o ").concat(segundoAuto.anio));
console.log(segundoAuto.frenar());
console.log("-----------------------------------------------------");
console.log("El auto ".concat(tercerAuto.marca, " modelo ").concat(tercerAuto.modelo, " a\u00F1o ").concat(tercerAuto.anio));
console.log(tercerAuto.acelerar(100));
console.log("-----------------------------------------------------");
