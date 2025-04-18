import { Vehiculo } from "./vehiculo";
export class Camion extends Vehiculo {                      
    private tieneAcoplado: boolean;
    constructor(pMarca: string, pModelo: string, pPatente: string, pClindrada: number, pTieneAcoplado: boolean) {
        super(pMarca, pModelo, pPatente, pClindrada);
        this.tieneAcoplado = pTieneAcoplado;
    }
    getTieneAcoplado(): boolean {
        return this.tieneAcoplado;
    }
    setTieneAcoplado(pTieneAcoplado: boolean): void {
        this.tieneAcoplado = pTieneAcoplado;
    }
    public toString(): string {
        return `Marca: ${this.getMarca()}, Modelo: ${this.getModelo()}, Patente: ${this.getPatente()}, Cilindrada: ${this.getClindrada()}, Tiene Acoplado: ${this.tieneAcoplado}`;
    }
}