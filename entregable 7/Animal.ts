import { IAnimal } from "./IAnimal";
export abstract class Animal implements IAnimal {
    protected nombre: string;
    constructor(pNombre: string) {
        this.nombre = pNombre;
    }
    emitirSonido(): void {
        console.log(`el animal ${this.nombre} ha emitido un sonido`);//este aplica polimorfismo

    }
    moverse(): void {
        console.log(`el animal ${this.nombre} se ha movido 5 mts hacia delante`);//aplica polimorfismo puede estar o no estar porque hereda

    }
    abstract tipoDieta(): string;//este se implementa en las clases hijas

    getNombre(): string {
        return this.nombre;
    }
}