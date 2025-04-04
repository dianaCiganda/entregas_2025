"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var escuela_1 = require("./escuela");
var profesor_1 = require("./profesor");
var alumno_1 = require("./alumno");
var alumno1 = new alumno_1.Alumno("Dario", "Cabrera", 40, 7, 10);
var alumno2 = new alumno_1.Alumno("Pamela", "Tolosa", 39, 9, 0);
var alumno3 = new alumno_1.Alumno("Julieta", "Tabuyo", 35, 5, 3);
var alumno4 = new alumno_1.Alumno("Juliana", "Pontacq", 35, 2, 7);
var alumnos = [alumno1, alumno2, alumno3];
var profesor1 = new profesor_1.Profesor("Karen", "Simari", "programación", alumnos, 15);
var profesor2 = new profesor_1.Profesor("Braian", "Aued", "POO", alumnos, 1);
var profesor3 = new profesor_1.Profesor("Rafaela", "Ruggeri", "base de datos", alumnos, 5);
var profesor4 = new profesor_1.Profesor("Nelson", "Garrido", "Web", alumnos, 3);
var profesores = [profesor1, profesor2, profesor3];
var escuela = new escuela_1.Escuela(alumnos, profesores);
// Matricular un nuevo alumno (alumno4) en la escuela
escuela.setMatricularAlumno([alumno4]);
escuela.setMatricularAlumno([alumno2]);
console.log(alumno3.getComprobarNota());
console.log(alumno1.getComprobarNota());
console.log(escuela.getExpulsarAlumno(alumnos));
escuela.setContratarProfesor([profesor3]);
escuela.setContratarProfesor([profesor4]);
console.log(escuela.getDespedirProfesor(profesores));
