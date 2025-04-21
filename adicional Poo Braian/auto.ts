import { Vehiculo } from "./vehiculo";
export class Auto extends Vehiculo {
    private cantidadPuertas: number;
    constructor(pMarca: string, pModelo: string, pPatente: string, pClindrada: number, pCantidadPuertas: number) {
        super(pMarca, pModelo, pPatente, pClindrada);
        this.cantidadPuertas = pCantidadPuertas;

    }
    puertas(): void {
        if (this.cantidadPuertas == 5) {
            console.log("Es un auto de 5 puertas");
        } else if (this.cantidadPuertas == 4) {

            console.log("Es un auto de 4 puertas");
        } else if (this.cantidadPuertas == 3) {

            console.log("Es un auto de 3 puertas");
        }
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