"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var rs = require("readline-sync");
var Auto = /** @class */ (function () {
    /*Crear una clase Auto con atributos (marca, modelo, anio).
    Agregar métodos (constructor(), acelerar(), frenar()).
    Instanciar objetos y probar métodos*/
    function Auto(pmarca, pmodelo, panio) {
        this.velocidad = 0;
        this.marca = pmarca;
        this.modelo = pmodelo;
        this.anio = panio;
    }
    Auto.prototype.acelerar = function () {
        var incremento = 0;
        //incremento solo se usa dentro del método acelerar() por eso no lo puse en la clase
        while (incremento <= 0) {
            incremento = rs.questionInt("Ingrese cuánto desea acelerar (km/h): ");
        }
        this.velocidad += incremento;
        console.log("ha acelerado y ahora va a ".concat(this.velocidad, " km/h"));
    };
    Auto.prototype.frenar = function () {
        this.velocidad = 0;
        console.log("ha frenado y está detenido.");
    };
    return Auto;
}());
exports.Auto = Auto;
