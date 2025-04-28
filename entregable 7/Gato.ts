import { Animal } from "./Animal";
export class Gato extends Animal {
    emitirSonido(): void {
        console.log(`miau`); 
    }
    tipoDieta(): string {
        return "Pescado y lacteos";
    }
}