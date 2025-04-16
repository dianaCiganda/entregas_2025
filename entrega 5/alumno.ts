import { Persona } from "./persona";
export class Alumno extends Persona {
   private legajo:number;
    constructor(pLegajo:number, pNombre: string, pApellido: string, pDni: number) {
        super(pNombre, pApellido, pDni)
        this.legajo=pLegajo;
    }

    public presentacion():void{
console.log(`Soy el alumno : ${this.getNombre()}, mi apellido es: ${this.getApellido()}, y mi dni es ${this.getDni()}, mi numero de legajo es: ${this.legajo} `);

    }
}