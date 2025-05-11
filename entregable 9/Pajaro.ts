import { IAnimal } from "./IAnimal";    
export class Pajaro implements IAnimal {
    private colorPlumas: string;
    private tipoPico: string;
    private habitat: string;
    constructor(pColorPlumas: string, pTipoPico: string, pHabitat: string) {
        this.colorPlumas = pColorPlumas;
        this.tipoPico = pTipoPico;
        this.habitat = pHabitat;
    }
    hacerSonido(): string {
        return "Pío";
    }
    mover(): string {
        return "Vuela";
    }
}