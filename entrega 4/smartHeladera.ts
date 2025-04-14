import { Heladera } from "./heladera";
import { ModuloWifi } from "./moduloWifi";
export class SmartHeladera extends Heladera {
    private wiFi: ModuloWifi;
    constructor(pWifi: ModuloWifi, pTemperatura: number, pMarca: string, pModelo: string, pEstaEncendido: boolean) {
        super(pTemperatura, pMarca, pModelo, pEstaEncendido)
        this.wiFi = pWifi;

    }
    public iternet() {
        if (this.wiFi && this.estaEncendido==true ) {
            console.log(`Conectado a internet a una velocidad de ${this.wiFi.getVelocidad()} Mbps`);
        }
    }
}