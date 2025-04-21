import { Vehiculo } from "./vehiculo";
export class Moto extends Vehiculo {
     private esCiclomotor: boolean;
     constructor(pMarca: string, pModelo: string, pPatente: string, pCilindrada: number, pEsCiclomotor: boolean) {
          super(pMarca, pModelo, pPatente, pCilindrada);
          this.esCiclomotor = pEsCiclomotor;
     }

     esDosTiempos(): void {
          if (this.getCilindrada() == 50) {
               this.esCiclomotor = true;
               console.log("Es un ciclomotor de 2 tiempos");
          } else {
               this.esCiclomotor = false;
               console.log("No es un ciclomotor de 2 tiempos");
          }
     }
     getEsCiclomotor(): boolean {
          return this.esCiclomotor;
     }
     setEsCiclomotor(pEsCiclomotor: boolean): void {
          this.esCiclomotor = pEsCiclomotor;
     }
     public toString(): string {
          return `Marca: ${this.getMarca()}, Modelo: ${this.getModelo()}, Patente: ${this.getPatente()}, Cilindrada: ${this.getCilindrada()}, Es Ciclomotor: ${this.esCiclomotor}`;
     }
}
