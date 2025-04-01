import { Alumno } from "./alumno";

export class Profesor{
   private nombre:string;
   private apellido:string;
   private materia:string;
   private listadoAlumnos:Alumno[];
   private inasistenciasInjustificadas:number;
constructor (pNombre:string,pApellido:string,pMateria:string,pListadoAlumnos:Alumno[],pInasistenciasInjustificadas:number ){
    this.nombre=pNombre;
    this.apellido=pApellido;
    this.materia=pMateria;
    this.listadoAlumnos=pListadoAlumnos;
    this.inasistenciasInjustificadas=pInasistenciasInjustificadas;
}
public getNombre(): string {
    return this.nombre;
}

public getApellido(): string {
    return this.apellido;
}

public getIncumplimientos(): number {
    return this.inasistenciasInjustificadas;
}
}