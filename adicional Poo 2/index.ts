import { Murcielago } from "./murcielago";
import { Mamifero } from "./mamifero";          
import { Reptil } from "./reptil";

const murcielago = new Murcielago("Murcielago", 5, "black", "north","fly");
const mamifero = new Mamifero("Mamifero", 3, "brown");  
const reptil = new Reptil("Reptil", 2, "green", 25);
murcielago.eat();
murcielago.sleep();
murcielago.useEcholocation();
murcielago.toSuckleTheYoung();
reptil.toRegulateBodyTemperature(25);
murcielago.setName("New Murcielago");   

