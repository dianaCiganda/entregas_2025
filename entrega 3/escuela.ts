/*Ejercicio 1
Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:
 Los profesores deben tener un listado de sus alumnos.
Cada alumno debe saber su nota e informar si está aprobado o no (es decir si la nota es mayor que 7). 
La escuela debe tener un registro de los alumnos y maestros, y debe poder matricular/contratar y expulsar/despedir a los mismos.

*/
import { Profesor } from "./profesor";
import { Alumno } from "./alumno";
export class Escuela {
    private alumno: Alumno[] = [];
    private profesor: Profesor[];

    constructor(pAlumno: Alumno[], pProfesor: Profesor[]) {
        this.alumno = pAlumno;
        this.profesor = pProfesor;
    }
    public matricularAlumno(pAlumno: Alumno[]): void {
        pAlumno.forEach(alumno => {
            console.log("Verificando alumno:", alumno.getNombre(), alumno.getApellido());
            let existe = this.alumno.some(a =>
                //.some() devuelve true si al menos un elemento cumple la condición.
                a.getNombre() === alumno.getNombre() &&
                a.getApellido() === alumno.getApellido()
            );
            console.log("¿Existe?", existe);
            if (!existe) {
                console.log("Se ha Matriculado a :", alumno.getNombre(), alumno.getApellido());
                this.alumno.push(alumno);
            } else {
                console.log(`El alumno ${alumno.getNombre()} ${alumno.getApellido()} ya está matriculado.`);
            }
        });
    }


    public expulsarAlumno(pAlumno: Alumno[]): string {
        let expulsados = pAlumno.filter(e => e.getAmonestaciones() >= 5);
        //.filter()	Devuelve un nuevo array con los elementos que cumplen la condición.
        if (expulsados.length === 0) {
            return "No hay alumnos para expulsar.";
        }

        return expulsados
            .map(e => `El alumno ${e.getNombre()}, ${e.getApellido()} ha sido expulsado.`)
            .join("\n");
        //El método .map() crea un nuevo array aplicando una función a cada elemento del array original.
        //El método .join() convierte un array en una cadena de texto, separando los elementos con el separador especificado.
    }

    public contratarProfesor(pProfesor: Profesor[]): void {
        pProfesor.forEach(profesor => {
            console.log("Verificando profesor:", profesor.getNombre(), profesor.getApellido());
            let existe = this.profesor.some(p =>
                p.getNombre() === profesor.getNombre() &&
                p.getApellido() === profesor.getApellido()
            );
            console.log("¿Existe?", existe);
            if (!existe) {
                console.log("Se contrató como profesor  a:", profesor.getNombre(), profesor.getApellido());
                this.profesor.push(profesor);
            } else {
                console.log(`El profesor ${profesor.getNombre()},${profesor.getApellido()}  ya está contratado.`);
            }
        });

    }
    public despedirProfesor(pProfesor: Profesor[]): string {
        let despedidos = pProfesor.filter(e => e.getIncumplimientos() >= 15);

        if (despedidos.length === 0) {
            return "No hay profesores para despedir.";
        }

        return despedidos
            .map(e => `El profesor ${e.getNombre()}, ${e.getApellido()} ha sido despedido.`)
            .join("\n");
    }

}
