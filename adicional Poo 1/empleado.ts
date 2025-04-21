export class Empleado {
    protected nombre: string;
    protected apellido: string;
    protected salario: number;
    constructor(pNombre: string, pApellido: string, pSalario: number) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.salario = pSalario;
    }
    public aumentar_salario(): void {
        if (this.salario < 100000) {
            console.log(`${this.nombre} ${this.apellido} su salario de: ${this.salario}, se ha aumentado a ${this.salario + 10000}`);
        }
    }
    public disminuir_salario(): void {
        if (this.salario > 100000) {

            console.log(`${this.nombre} ${this.apellido} su salario de: ${this.salario}, se ha reducido a ${this.salario - 1000
                }`);
        }

    }
    getNombre(): string {
        return this.nombre;
    }
    getApellido(): string {
        return this.apellido;
    }
    getSalario(): number {
        return this.salario;
    }
}