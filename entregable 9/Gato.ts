import { IAnimal } from "./IAnimal";
export class Gato implements IAnimal {
    private colorOjos: string;
    private espelajeCorto: boolean;
    private raza: string;
    constructor(pColorOjos: string, pEspelajeCorto: boolean, pRaza: string) {
        this.colorOjos = pColorOjos;
        this.espelajeCorto = pEspelajeCorto;
        this.raza = pRaza;
    }
    hacerSonido(): string {
        return "Miau";
    }
    mover(): string {
        return "Camina";
    }
}   