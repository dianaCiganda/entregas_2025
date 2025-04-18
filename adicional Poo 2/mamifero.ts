import { Animal } from "./animal";
export class Mamifero extends Animal {
    private fur:string;
    constructor(name: string, age: number, fur: string) {
        super(name, age);
        this.fur = fur;
    }
    toSuckleTheYoung(): void {
        console.log(`${this.getName()} is suckling the young`);
    }
}