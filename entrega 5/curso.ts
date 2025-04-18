import { Profesor } from "./profesor";
import { Alumno } from "./alumno";
export class Curso {
    protected nombreCurso: string;
    protected descripcionCurso:string;
    protected responsableCurso: Profesor;
    protected listaParticipantes: Alumno[];
constructor(pNombreCurso:string,pDescripcionCurso:string,pResponsableCurso:Profesor,pListaParticipantes:Alumno[]){
    this.nombreCurso=pNombreCurso;
    this.descripcionCurso=pDescripcionCurso;
    this.responsableCurso=pResponsableCurso;
    this.listaParticipantes=pListaParticipantes;
}
public mostrarLista(): void {
    this.listaParticipantes.sort((c, d) =>
        c.getApellido().localeCompare(d.getApellido(), 'es', { sensitivity: 'base' })
    );

    console.log(
        `Curso: ${this.nombreCurso}\n` +
        `Descripción: ${this.descripcionCurso}\n` +
        `Responsable: ${this.responsableCurso.getNombre()} ${this.responsableCurso.getApellido()}\n` +
        `Listado de alumnos:\n` +
        `${this.listaParticipantes.map(e => `  - ${e.getNombre()} ${e.getApellido()}`).join('\n')}`
    );
}
    public getNombreCurso(): string {
        return this.nombreCurso;
    }
    public getResponsable(): Profesor {
        return this.responsableCurso;
    }
    public getListaParticipantes():Alumno[] {
        return this.listaParticipantes;
    }
    
    getAlumnos(): Alumno[] {
        return this.listaParticipantes;
    }
}

            
        
        
