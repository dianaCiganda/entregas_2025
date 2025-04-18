import { Vehiculo } from "./vehiculo";
export class Moto extends Vehiculo {
   private esCiclomotor: boolean;
   constructor(pMarca: string, pModelo: string, pPatente: string, pClindrada: number, pEsCiclomotor: boolean) {
       super(pMarca, pModelo, pPatente, pClindrada);
       this.esCiclomotor = pEsCiclomotor;
   }
    getEsCiclomotor(): boolean {
         return this.esCiclomotor;
    }       
    setEsCiclomotor(pEsCiclomotor: boolean): void {
         this.esCiclomotor = pEsCiclomotor;
    }
    public toString(): string {
         return `Marca: ${this.getMarca()}, Modelo: ${this.getModelo()}, Patente: ${this.getPatente()}, Cilindrada: ${this.getClindrada()}, Es Ciclomotor: ${this.esCiclomotor}`;
    }
}