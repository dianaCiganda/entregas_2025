import { FabricaAnimales } from "./FabricaAnimales";
try {
    let fabricaAnimales = new FabricaAnimales();
    let miPerro = fabricaAnimales.crarAnimal("Perro", { velocidad: 20, viveAdentro: true, alimemtacion: "carne" });
    console.log(miPerro);
    console.log(miPerro.hacerSonido());
    console.log(miPerro.mover());
    let miGato = fabricaAnimales.crarAnimal("Gato", { colorOjos: "verde", espelajeCorto: true, raza: "siames" });
    console.log(miGato);
    console.log(miGato.hacerSonido());
    console.log(miGato.mover());
    let miPajaro = fabricaAnimales.crarAnimal("Pajaro", { colorPlumas: "rojo", tipoPico: "curvo", habitat: "selva" });
    console.log(miPajaro);
    console.log(miPajaro.hacerSonido());
    console.log(miPajaro.mover());
} catch (error) {
    console.error("Error al crear el animal:", error);
}

