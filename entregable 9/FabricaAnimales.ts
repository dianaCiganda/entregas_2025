import { Perro } from "./Perro";
import { Gato } from "./Gato";
import { Pajaro } from "./Pajaro";
import { IAnimal } from "./IAnimal";
export class FabricaAnimales {
    public crarAnimal(tipoAnimal: string, atributos: any): IAnimal {
        if (tipoAnimal === "Perro") {
            return new Perro(atributos.velocidad, atributos.viveAdentro, atributos.alimemtacion);
        } else if (tipoAnimal === "Gato") {
            return new Gato(atributos.colorOjos, atributos.espelajeCorto, atributos.raza);
        } else if (tipoAnimal === "Pajaro") {
            return new Pajaro(atributos.colorPlumas, atributos.tipoPico, atributos.habitat);
        } else {
            throw new Error("Tipo de animal no válido");

        }
    }
}