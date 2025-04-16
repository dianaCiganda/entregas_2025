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
           curso.mostrarLista();
}
    }
}
