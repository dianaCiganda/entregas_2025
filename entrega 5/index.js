"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curso_1 = require("./curso");
var profesor_1 = require("./profesor");
var alumno_1 = require("./alumno");
var escuela_1 = require("./escuela");
var alumno1 = new alumno_1.Alumno(123, "Diana", "Ciganda", 30623336);
var alumno2 = new alumno_1.Alumno(112, "Pamela", "Tolosa", 32800522);
var alumno3 = new alumno_1.Alumno(100, "Lucas", "Castañeda", 34555333);
var alumno4 = new alumno_1.Alumno(345, "Alfonsina", "Hassellun", 35999888);
var profesor1 = new profesor_1.Profesor(4, "Alberto", "Fusseneco", 30111234);
var profesor2 = new profesor_1.Profesor(2, "Monica", "Argento", 33112346);
var profesor3 = new profesor_1.Profesor(1, "Claudio", "Stokel", 29456789);
var curso1 = new curso_1.Curso("Ceramica", "el arte del fuego en el barro", profesor1, [alumno1, alumno2]);
var curso2 = new curso_1.Curso("Teatro", "salí de tu zona de confort y vivenciá infinidad de roles", profesor2, [alumno2, alumno3]);
var curso3 = new curso_1.Curso("Danza", "dejate llevar por la mmúsica que tu cuerpo y mente vibren en sintonía", profesor3, [alumno1, alumno2, alumno3, alumno4]);
var escuela = new escuela_1.Escuela([curso1, curso2, curso3], 50);
alumno1.presentacion();
console.log("-----------------------------------------------");
profesor1.presentacion();
console.log("-----------------------------------------------");
curso1.mostrarLista();
console.log("-----------------------------------------------");
escuela.listadoCursos();
