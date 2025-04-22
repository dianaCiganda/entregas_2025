import { IPago } from "./IPago";

export class MercadoPago implements IPago {
private alias: string;
private cvu_cbu:number;
private nombreTitular:string;
private monto:number;
    constructor(pMonto: number, pNombreTitular: string, pCbu_cvu: number,pAlias: string) {
       
        this.alias = pAlias;
        this.cvu_cbu = pCbu_cvu;
        this.nombreTitular = pNombreTitular;    
        this.monto = pMonto;
    }

    procesarPago(): void {
        console.log(`el pago de Mercado Pago del cvu: ${this.cvu_cbu}\n del titular ${this.nombreTitular} por el monto de ${this.monto} fue procesado`);
    }
    cancelarPago(): void {
        console.log(`el pago desde Mercado Pago del cvu: ${this.cvu_cbu}\n del titular ${this.nombreTitular} por el monto de ${this.monto} fue cancelado`);
    }
    generarRecibo(): void {
        console.log(`el recibo de Mercado Pago del titular ${this.nombreTitular} \npor el monto de ${this.monto} fue generado`);
    }
    mostrarAlias(): void {
        console.log(`el alias de Mercado Pago del titular ${this.nombreTitular} es ${this.alias}`);
}
}
