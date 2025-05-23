"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var registroAutomotor_1 = require("./registroAutomotor");
var auto_1 = require("./auto");
var camion_1 = require("./camion");
var moto_1 = require("./moto");
var auto1 = new auto_1.Auto("Toyota", "Corolla", "ABC123", 1600, 4);
var auto2 = new auto_1.Auto("Ford", "Fiesta", "DEF456", 1400, 5);
var camion1 = new camion_1.Camion("Mercedes", "Actros", "GHI789", 5000, true);
var camion2 = new camion_1.Camion("Volvo", "FH", "JKL012", 6000, false);
var moto1 = new moto_1.Moto("Yamaha", "YZF-R3", "MNO345", 300, false);
var moto2 = new moto_1.Moto("Honda", "CBR500R", "PQR678", 500, true);
console.log(auto1.toString());
var registro = new registroAutomotor_1.RegistroAutomotor();
registro.agregarVehiculo(auto1);
registro.agregarVehiculo(auto2);
registro.agregarVehiculo(camion1);
registro.agregarVehiculo(camion2);
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(moto2);
registro.mostrarVehiculos();
console.log("------------------------------------");
console.log(registro.buscarVehiculo("DEF456"));
console.log(registro.buscarVehiculo("XYZ123"));
console.log(registro.buscarVehiculo("ABC123"));
registro.eliminarVehiculo("PQR678");
registro.mostrarVehiculos();
