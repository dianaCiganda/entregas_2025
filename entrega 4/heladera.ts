import { Electrodomestico } from "./electrodomestico";
export class Heladera extends Electrodomestico {
    private temperatura: number;
    constructor(pTemperatura: number, pMarca: string, pModelo: string, pEstaEncendido: boolean) {
        super(pMarca, pModelo, pEstaEncendido)
        this.temperatura = pTemperatura;
    }
    public cambiarTemperatura(pTemperatura: number) {
        if (pTemperatura && this.estaEncendido==true) {
            this.temperatura =pTemperatura;
            console.log(`se ha cambiado la temperatura en ${pTemperatura} grados`);
       
    }
}
}