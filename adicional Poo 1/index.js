"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var empleadoTemporal_1 = require("./empleadoTemporal");
var gerente_1 = require("./gerente");
var trabajador_1 = require("./trabajador");
var trabajador1 = new trabajador_1.Trabajador("sistemas", 100, true, 8, "Juan", "Pérez", 50000);
var trabajador2 = new trabajador_1.Trabajador("ventas", 200, true, 7, "Ana", "Gómez", 60000);
var trabajador3 = new trabajador_1.Trabajador("recursos humanos", 300, false, 9, "Luis", "Martínez", 55000);
var trabajador4 = new trabajador_1.Trabajador("contabilidad", 400, true, 8, "María", "López", 70000);
var empleadoTemporal = new empleadoTemporal_1.EmpleadoTemporal(new Date(2023, 12, 31), "sistemas", 500, true, "Pedro", "Sánchez", 6, 40000);
var empleadoTemporal2 = new empleadoTemporal_1.EmpleadoTemporal(new Date(2025, 6, 25), "ventas", 600, true, "Laura", "Fernández", 8, 45000);
var empleadoTemporal3 = new empleadoTemporal_1.EmpleadoTemporal(new Date(2025, 3, 17), "recursos humanos", 700, true, "Javier", "García", 7, 48000);
var gerente = new gerente_1.Gerente("sistemas", 10, [trabajador1, trabajador2, trabajador3, trabajador4], "Carlos", "Ramírez", 90000);
trabajador1.aumentar_salario();
trabajador2.disminuir_salario();
console.log("-------------------------------------");
trabajador3.solicitar_dia_libre();
console.log("-------------------------------------");
trabajador4.horas_trabajadas();
console.log("-------------------------------------");
gerente.asignarTareas();
console.log("-------------------------------------");
gerente.evaluar_desempenio();
console.log("-------------------------------------");
console.log("el contrato de ".concat(empleadoTemporal.getApellido(), " esta a punto de vencer: "), empleadoTemporal.verificar_vencimiento_contrato());
console.log("el contrato de ".concat(empleadoTemporal2.getApellido(), " esta a punto de vencer: "), empleadoTemporal2.verificar_vencimiento_contrato());
console.log("el contrato de ".concat(empleadoTemporal3.getApellido(), " esta a punto de vencer: "), empleadoTemporal3.verificar_vencimiento_contrato());
