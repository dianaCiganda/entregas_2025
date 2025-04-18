import { Animal } from "./animal";
export class Reptil extends Animal {    
    private scale: string;
    private temperature: number;
    constructor(name: string, age: number, scale: string, pTemperature:number) {
        super(name, age);
        this.scale = scale;
        this.temperature = pTemperature;
    }
    toRegulateBodyTemperature(pTemperature:number): void {
        if(pTemperature < 20) {
            this.temperature=20;
        }else if(pTemperature > 30) {
            this.temperature=30;
        } else {            

            this.temperature=pTemperature;
            }
        console.log(`${this.getName()} is regulating body temperature in ${this.temperature} `);
    }
    
}