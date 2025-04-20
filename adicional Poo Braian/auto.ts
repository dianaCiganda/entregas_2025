import { Vehiculo } from "./vehiculo";
export class Auto extends Vehiculo {
    private cantidadPuertas: number;
    constructor(pMarca: string, pModelo: string, pPatente: string, pClindrada: number, pCantidadPuertas: number) {
        super(pMarca, pModelo, pPatente, pClindrada);
        this.cantidadPuertas = pCantidadPuertas;

    }
    getCantidadPuertas(): number {
        return this.cantidadPuertas;
    }

    setCantidadPuertas(pCantidadPuertas: number): void {
        this.cantidadPuertas = pCantidadPuertas;
    }

    public toString(): string {
        return `Marca: ${this.getMarca()}, Modelo: ${this.getModelo()}, Patente: ${this.getPatente()}, Cilindrada: ${this.getCilindrada()}Cantidad de Puertas: ${this.cantidadPuertas}`;
    }
}