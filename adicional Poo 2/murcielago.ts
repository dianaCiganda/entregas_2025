import { Mamifero } from "./mamifero";
export class Murcielago extends Mamifero {
    private echolocation: string;
    private hability: string;
    constructor(name: string, age: number, fur: string, echolocation: string,pHability:string) {
        super(name, age, fur);
        this.echolocation = echolocation;
        this.hability = pHability;
    }
    useEcholocation(): void {
        switch (this.echolocation) {
            case "north":
                console.log(`${this.getName()} is using echolocation 1km in the north`);
                break;
            case "south":
                console.log(`${this.getName()} is using echolocation 1km in the south`);
                break;
            case "east":
                console.log(`${this.getName()} is using echolocation 1km in the east`);
                break;
            case "west":
                console.log(`${this.getName()} is using echolocation 1km in the west`);
                break;

            default:
                console.log(`${this.getName()} is not using echolocation`);
                break;
        }
        
    }
}