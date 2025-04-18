export class Vehiculo {
    private marca: string;
    private modelo: string;
    private patente: string;
    private clindrada: number;
    constructor(pMarca: string, pModelo: string, pPatente: string, pClindrada: number) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.patente = pPatente;
        this.clindrada = pClindrada;
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
    getClindrada(): number {
        return this.clindrada;
    }
    setMarca(pMarca: string): void {
        this.marca = pMarca;
    }                   
    setModelo(pModelo: string): void {
        this.modelo = pModelo;
    }
    setPatente(pPatente: string): void {
        this.patente = pPatente;
    }
    setClindrada(pClindrada: number): void {
        this.clindrada = pClindrada;
    }
   public toString(): string {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Patente: ${this.patente}, Cilindrada: ${this.clindrada}`;
    }
}