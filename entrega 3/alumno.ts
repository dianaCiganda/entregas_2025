export class Alumno{
private nombre:string;
private apellido:string;
private edad:number;
private nota:number;
private estaAprobado:boolean=true;
private amonestaciones:number;

constructor (pNombre:string,pApellido:string,pEdad:number, pNota:number,pAmonestaciones:number){
    this.nombre=pNombre;
    this.apellido=pApellido;
    this.edad=pEdad;
    this.nota=pNota;
    this.amonestaciones=pAmonestaciones;
   
}

public getComprobarNota(): string {
    if (this.nota > 7) {
        this.estaAprobado = true;
    } else {
        this.estaAprobado = false;
    }
    return `¿El alumno/a ${this.nombre} ${this.apellido} está aprobado? ${this.estaAprobado ? "SI" : "NO"}`;
}
public getNombre(): string {
    return this.nombre;
}

public getApellido(): string {
    return this.apellido;
}
public getAmonestaciones():number{
    return this.amonestaciones;
}
}

