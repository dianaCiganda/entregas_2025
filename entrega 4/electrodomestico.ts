export class Electrodomestico {
    private marca: string;
    private modelo: string;
    protected estaEncendido: boolean;
    constructor(pMarca: string, pModelo: string, pEstaEncendido: boolean) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.estaEncendido = pEstaEncendido;
    }
    
    public encender() {
        if (this.estaEncendido == true) {
            console.log("El equipo está encendido");
        }
    }
    public apagar() {
        if (this.estaEncendido == false) {
            console.log("El equipo está apagado");
            
            
        }
    }
    public mostrarInfo() {
        console.log(`Marca: ${this.marca}\nModelo: ${this.modelo}`);
        
    }
    public getEstaEncendido(): boolean {
        return this.estaEncendido;
    }
    public setEstaEncendido(pEstaEncendido: boolean) {
        this.estaEncendido = pEstaEncendido;
    }
}
