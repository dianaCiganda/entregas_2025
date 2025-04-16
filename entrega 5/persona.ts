export class Persona {
    protected nombre: string;
    protected apellido: string;
    protected dni: number;
    constructor(pNombre: string, pApellido: string, pDni: number) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.dni = pDni;

    }
    public presentacion():void{
        console.log(`Soy ${this.nombre}, mi apellido ${this.apellido}, y mi dni es ${this.dni}`);

    }
        
    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(pNombre: string) {
        this.nombre = pNombre;
    }
    public getApellido(): string {
        return this.apellido;
    }
    public setApellido(pApellido: string) {
        this.nombre = pApellido;
    }
    public getDni(): number {
        return this.dni;
    }
    public setDni(pDni: number) {
        this.dni = pDni;
    }
}