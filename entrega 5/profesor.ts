import { Persona } from "./persona";
export class Profesor extends Persona {
   
   private duracionCurso:number;
    constructor(pDuracionCurso:number, pNombre: string, pApellido: string, pDni: number) {
        super(pNombre, pApellido, pDni)
     
        this.duracionCurso=pDuracionCurso;
    }

    public presentacion():void{
console.log(`Soy el profesor : ${this.getNombre()}, mi apellido es: ${this.getApellido()}, y mi dni es ${this.getDni()}, la materia que enseño dura: ${this.duracionCurso} hs`);

    }
}