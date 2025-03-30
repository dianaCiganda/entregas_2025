import { Auto } from "./auto"; 

let primerAuto = new Auto("Ford", "Fiesta", 1996);
let segundoAuto = new Auto("Fiat", "Palio", 2003);
let tercerAuto = new Auto("Toyota", "Corolla", 2025);

console.log(`El auto ${primerAuto.marca} modelo ${primerAuto.modelo} año ${primerAuto.anio}`);
primerAuto.acelerar();

console.log("-----------------------------------------------------");

console.log(`El auto ${segundoAuto.marca} modelo ${segundoAuto.modelo} año ${segundoAuto.anio}`);
segundoAuto.frenar();

console.log("-----------------------------------------------------");

console.log(`El auto ${tercerAuto.marca} modelo ${tercerAuto.modelo} año ${tercerAuto.anio}`);
tercerAuto.acelerar();

console.log("-----------------------------------------------------");

console.log(`El auto ${primerAuto.marca} modelo ${primerAuto.modelo} año ${primerAuto.anio}`);
primerAuto.acelerar();

console.log("-----------------------------------------------------");







