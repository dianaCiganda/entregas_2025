import { Electrodomestico } from "./electrodomestico";
export class Heladera extends Electrodomestico {
    private temperatura: number;
    constructor(pTemperatura: number, pMarca: string, pModelo: string, pEstaEncendido: boolean) {
        super(pMarca, pModelo, pEstaEncendido)
        this.temperatura = pTemperatura;
    }
    public cambiarTemperatura(PTemperatura: number) {
        if (this.temperatura > 8 && this.estaEncendido) {
            this.temperatura = 8;
            console.log(`se ha bajado la temperatura en ${PTemperatura-this.temperatura} grados`);
        } else if (this.temperatura < 5 && this.estaEncendido) {
            this.temperatura = 6;
            console.log(`se ha subido la temperatura en ${this.temperatura-PTemperatura} grados`);
        }
    }
}