import { Animal } from "./Animal";
import { Gato } from "./Gato";
import { Perro } from "./Perro";

let gato: Animal = new Gato("Gato");
let perro: Animal = new Perro("Perro"); 
gato.emitirSonido();
perro.emitirSonido();
console.log(gato.tipoDieta());
console.log(perro.tipoDieta());
gato.moverse();
perro.moverse();   
gato.getNombre();
console.log(perro.getNombre());
console.log(gato.getNombre());


