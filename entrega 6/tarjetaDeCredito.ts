import { IPago } from "./interfaces";
import { MetodosDePago } from "./metodosDepago";
export class TarjetaDeCredito extends MetodosDePago implements IPago  {
  
    constructor(pMonto: number, pEntidadEmisora: string, pNombreTitular: string, pCbu_cvu: number) {
        super(pMonto, pEntidadEmisora, pNombreTitular, pCbu_cvu);
    }

    procesarPago(): void {
        console.log(`el pago de la tarjeta de ${this.getEntidadEmisora()} corresposndiente al CBU: ${this.getCbu_cvu()} del titular ${this.getNombreTitular()} por el monto de ${this.getMonto()} fue procesado`);    

    }
    cancelarPago(): void {
        console.log(`el pago de la tarjeta de ${this.getEntidadEmisora()} corresposndiente al CBU:  ${this.getCbu_cvu()} , del titular ${this.getNombreTitular()} por el monto de ${this.getMonto()} fue cancelado`);    

    }
    generarRecibo(): void {
        console.log(`el recibo de la tarjeta de ${this.getEntidadEmisora()} correspondiente al CBU ${this.getCbu_cvu()} , del titular ${this.getNombreTitular()} por el monto de ${this.getMonto()} fue generado`);               

    } 
}

