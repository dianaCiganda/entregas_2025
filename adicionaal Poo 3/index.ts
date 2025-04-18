import { Cancion } from "./cancion";
let titulo1: string = "La Bamba";
let autor1: string = "Los Lobos";
let titulo2: string = "Se fue";
let autor2: string = "Laura Pausinni";
let titulo3: string = "Quisiera ser la otra";
let autor3: string = "Ana Gabriel";
let cancion1: Cancion = new Cancion(titulo1, autor1);
let cancion2: Cancion = new Cancion(titulo2, autor2);
let cancion3: Cancion = new Cancion(titulo3, autor3);

console.log("Cancion 1: " + cancion1.dameTitulo() + " de " + cancion1.dameAutor());
console.log("Cancion 2: " + cancion2.dameTitulo() + " de " + cancion2.dameAutor());
console.log("Cancion 3: " + cancion3.dameTitulo() + " de " + cancion3.dameAutor());
cancion1.ponTitulo("Me dedique a perderte");
cancion1.ponAutor("Alejandro Fernandez");
console.log("Cancion 1: " + cancion1.dameTitulo() + " de " + cancion1.dameAutor());


