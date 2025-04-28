import { Animal } from "./Animal";
export class Perro extends Animal {

    emitirSonido(): void {
        console.log(`guauu`);
    }
    tipoDieta(): string {
        return "Carne y vegetales";
    }
}
