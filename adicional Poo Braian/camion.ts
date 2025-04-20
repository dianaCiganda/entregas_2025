import { Vehiculo } from "./vehiculo";
export class Camion extends Vehiculo {                      
    private tieneAcoplado: boolean;
    constructor(pMarca: string, pModelo: string, pPatente: string, pCilindrada: number, pTieneAcoplado: boolean) {
        super(pMarca, pModelo, pPatente, pCilindrada);
        this.tieneAcoplado = pTieneAcoplado;
    }
    getTieneAcoplado(): boolean {
        return this.tieneAcoplado;
    }
    setTieneAcoplado(pTieneAcoplado: boolean): void {
        this.tieneAcoplado = pTieneAcoplado;
    }
    public toString(): string {
        return `Marca: ${this.getMarca()}, Modelo: ${this.getModelo()}, Patente: ${this.getPatente()}, Cilindrada: ${this.getCilindrada()}, Tiene Acoplado: ${this.tieneAcoplado}`;
    }
}