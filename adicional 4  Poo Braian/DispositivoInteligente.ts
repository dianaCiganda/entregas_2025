import { IConectado } from "./IConectado";

export abstract class DispositivoInteligente implements IConectado {
    protected marca: string;
    protected modelo: string;
    constructor(pMarca: string, pModelo: string) {
        this.marca = pMarca;
        this.modelo = pModelo;
    }
    conectar(): void {
        console.log("Conectando el dispositivo inteligente...");
    }
    desconectar(): void {
        console.log("Desconectando el dispositivo inteligente...");
    }
    mostrarInfo(): void {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
   abstract funcionar():void;
}
