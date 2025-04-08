import {Escuela} from "./escuela";
import { Profesor } from "./profesor";
import { Alumno } from "./alumno";
let alumno1:Alumno=new Alumno("Dario", "Cabrera", 40, 7,10);
let alumno2:Alumno=new Alumno("Pamela", "Tolosa", 39, 9,0);
let alumno3:Alumno=new Alumno("Julieta", "Tabuyo", 35, 5,3);
let alumno4:Alumno=new Alumno("Juliana", "Pontacq", 35, 2,7);
let alumnos: Alumno[] = [alumno1, alumno2,alumno3];

let profesor1:Profesor=new Profesor("Karen", "Simari","programación",alumnos, 15);
let profesor2:Profesor=new Profesor("Braian", "Aued","POO", alumnos, 1);
let profesor3:Profesor=new Profesor("Rafaela", "Ruggeri", "base de datos",alumnos,5);
let profesor4:Profesor=new Profesor("Nelson", "Garrido", "Web",alumnos, 3);
let profesores: Profesor[] = [profesor1, profesor2,profesor3];
let escuela: Escuela = new Escuela(alumnos, profesores);

// Matricular un nuevo alumno (alumno4) en la escuela
escuela.matricularAlumno([alumno4]);
escuela.matricularAlumno([alumno2]);
console.log(alumno3.getComprobarNota());
console.log(alumno1.getComprobarNota());
console.log(escuela.expulsarAlumno(alumnos));
escuela.contratarProfesor([profesor3]);
escuela.contratarProfesor([profesor4]);
console.log(escuela.despedirProfesor(profesores));

