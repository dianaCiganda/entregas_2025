import { Curso } from "./curso";
import { Profesor } from "./profesor";
import { Alumno } from "./alumno";
import { Escuela } from "./escuela";

let  alumno1:Alumno=new Alumno(123,"Diana","Ciganda",30623336);
let  alumno2:Alumno=new Alumno(112,"Pamela","Tolosa",32800522);
let  alumno3:Alumno=new Alumno(100,"Lucas","Castañeda",34555333);
let  alumno4:Alumno=new Alumno(345,"Alfonsina","Hassellun",35999888);


let profesor1:Profesor=new Profesor(4,"Alberto","Fusseneco",30111234);
let profesor2:Profesor=new Profesor(2,"Monica","Argento",33112346);
let profesor3:Profesor=new Profesor(1,"Claudio","Stokel",29456789);
let curso1:Curso=new Curso("Ceramica","el arte del fuego en el barro",profesor1,[alumno1,alumno2]);
let curso2:Curso=new Curso("Teatro","salí de tu zona de confort y vivenciá infinidad de roles",profesor2,[alumno2,alumno3]);
let curso3:Curso=new Curso("Danza","dejate llevar por la mmúsica que tu cuerpo y mente vibren en sintonía",profesor3,[alumno1,alumno2,alumno3,alumno4]);

let escuela:Escuela=new Escuela([curso1,curso2,curso3],50)


alumno1.presentacion();
console.log("-----------------------------------------------");
profesor1.presentacion();
console.log("-----------------------------------------------");
curso1.mostrarLista();
console.log("-----------------------------------------------");
escuela.listadoCursos();




