import { IAnimal } from "./IAnimal";
export class Perro implements IAnimal {
    private velocidad: number;
    private viveAdentro: boolean;
    private alimemtacion: string;
    constructor(pVelocidad: number, pViveAdentro: boolean, pAlimemtacion: string) {
        this.velocidad = pVelocidad;
        this.viveAdentro = pViveAdentro;
        this.alimemtacion = pAlimemtacion;
    }
    hacerSonido(): string {
        return "Guau";
    }
    mover(): string {
        return "Corre";
    }
}