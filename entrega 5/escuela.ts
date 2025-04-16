import { Curso } from "./curso";
export class Escuela {
    private listaCursos: Curso[];
    private cantidadAulas: number;
    constructor(pListaCursos: Curso[], pCantidadAulas: number) {
        this.listaCursos = pListaCursos;
        this.cantidadAulas = pCantidadAulas;



    }

    public listadoCursos(): void {
        console.log("Totalidad de cursos ordenados");
        console.log("---------------------------------------------------------------");


        let ordenados = this.listaCursos.sort((a, b) =>
            a.getNombreCurso().localeCompare(b.getNombreCurso(), 'es', { sensitivity: 'base' })
        );
        for (let curso of ordenados) {
            console.log(`Curso: ${curso.getNombreCurso()}`);
            console.log(`Responsable: ${curso.getResponsable().getNombre()} ${curso.getResponsable().getApellido()}`);
            console.log(`Listado de alumnos:`);
            let alumnosOrdenados = curso.getAlumnos().sort((c, d) =>
                c.getApellido().localeCompare(d.getApellido(), 'es', { sensitivity: 'base' }))
            for (let alumno of alumnosOrdenados) {
                console.log(` - ${alumno.getNombre()} ${alumno.getApellido()}`);
            }

            console.log('----------------------------');
        }
    }
}
