export class Vehiculo {
    protected marca: string;
    protected modelo: string;
    protected patente: string;
    protected cilindrada: number;
    constructor(pMarca: string, pModelo: string, pPatente: string, pCilindrada: number) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.patente = pPatente;
        this.cilindrada = pCilindrada;
    }
    getMarca(): string {
        return this.marca;
    }           
    getModelo(): string {
        return this.modelo;
    }
    getPatente(): string {
        return this.patente;
    }       
    getCilindrada(): number {
        return this.cilindrada;
    }
    setMarca(pMarca: string): void {
        this.marca = pMarca;
    }                   
    setModelo(pModelo: string): void {
        this.modelo = pModelo;
    }
    setPatente(pPatente: string): void {
        this.patente= pPatente;
    }
    setClindrada(pCilindrada: number): void {
        this.cilindrada = pCilindrada;
    }
   public toString(): string {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Patente: ${this.patente} Cilindrada: ${this.cilindrada}`;
    }
}