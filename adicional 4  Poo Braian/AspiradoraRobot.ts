import { DispositivoInteligente } from "./DispositivoInteligente";
export class AspiradoraRobot extends DispositivoInteligente {
    private aspirando: boolean;
    constructor(pMarca: string, pModelo: string, pAspirando: boolean) {
        super(pMarca, pModelo);
        this.aspirando = pAspirando;
    }
    funcionar(): void {
        console.log(`La aspiradora robot está aspirando: ${this.aspirando}`);
    }
}
