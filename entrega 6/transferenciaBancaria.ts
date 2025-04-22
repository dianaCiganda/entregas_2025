import { MetodosDePago } from "./metodosDepago";
import { IPago } from "./interfaces";
export class TransferenciaBancaria extends MetodosDePago implements IPago {


    constructor(pMonto: number, pEntidadEmisora: string, pNombreTitular: string, pCbu_cvu:number) {
        super(pMonto, pEntidadEmisora, pNombreTitular, pCbu_cvu);
  
    }
procesarPago(): void {      
        console.log(`el pago de la transferencia bancaria desde el CBU: ${this.getCbu_cvu()} del titular ${this.getNombreTitular()} por el monto de ${this.getMonto()} fue procesado`);
    }
    cancelarPago(): void {  
        console.log(`el pago de la transferencia bancaria desde el CBU: ${this.getCbu_cvu()} del titular ${this.getNombreTitular()} por el monto de ${this.getMonto()} fue cancelado`);
    }
    generarRecibo(): void { 
        console.log(`el recibo de la transferencia bancaria a ${this.getCbu_cvu()} del titular ${this.getNombreTitular()} por el monto de ${this.getMonto()} fue generado`);
    }
    
}