import { IPago } from "./interfaces";
import { MetodosDePago } from "./metodosDepago";
export class MercadoPago extends MetodosDePago implements IPago {
private alias: string;
    constructor(pMonto: number, pEntidadEmisora: string, pNombreTitular: string, pCbu_cvu: number,pAlias: string) {
        super(pMonto, pEntidadEmisora, pNombreTitular, pCbu_cvu);
        this.alias = pAlias;
    }

    procesarPago(): void {
        console.log(`el pago desde el alias ${this.alias} Mercado Pago del cvu: ${this.getCbu_cvu()} del titular ${this.getNombreTitular()} por el monto de ${this.getMonto()} fue procesado`);
    }
    cancelarPago(): void {
        console.log(`el pago desde Mercado Pago del cvu: ${this.getCbu_cvu()} del titular ${this.getNombreTitular()} por el monto de ${this.getMonto()} fue cancelado`);
    }
    generarRecibo(): void {
        console.log(`el recibo de Mercado Pago del titular ${this.getNombreTitular()} por el monto de ${this.getMonto()} fue generado`);
    }
}
