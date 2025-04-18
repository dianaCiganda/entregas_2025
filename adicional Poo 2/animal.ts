export class Animal {
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    eat(): void {
        console.log(`${this.name} is eating`);
    }
    sleep(): void {
        console.log(`${this.name} is sleeping`);
    }
    getName(): string {
        return this.name;
    }
    getAge(): number {
        return this.age;
    }
    setName(name: string): void {
        this.name = name;
    }
}