import { DispositivoInteligente } from "./DispositivoInteligente";  
export class LamparaInteligente extends DispositivoInteligente {
    private encendida: boolean;
    constructor(pMarca: string, pModelo: string, pEncendida: boolean) {
        super(pMarca, pModelo);
        this.encendida = pEncendida;
    }
    funcionar(): void {
        console.log(`La lámpara inteligente está encendida: ${this.encendida}`);
    }
}
