
import { IPago } from "./IPago";
export class TransferenciaBancaria implements IPago {
private monto:number;
private nombreTitular:string;
private numeroDeCuenta: number;
private cvu_cbu:number;


    constructor(pMonto: number, pNombreTitular: string, pCbu_cvu:number,pNumeroDeCuenta: number, pcvu_cbu:number) { 
        this.monto=pMonto;
        this.numeroDeCuenta = pNumeroDeCuenta;
        this.nombreTitular=pNombreTitular;
        this.numeroDeCuenta=pNumeroDeCuenta;
        this.cvu_cbu=pcvu_cbu;
        
  
    }
procesarPago(): void {      
        console.log(`el pago de la transferencia bancaria desde el CBU: ${this.cvu_cbu} del titular ${this.nombreTitular}\n por el monto de ${this.monto} fue procesado`);
    }
    cancelarPago(): void {  
        console.log(`el pago de la transferencia bancaria desde el CBU: ${this.cvu_cbu} del titular ${this.nombreTitular}\n por el monto de ${this.monto} fue cancelado`);
    }
    generarRecibo(): void { 
        console.log(`el recibo de la transferencia bancaria a ${this.cvu_cbu} del titular ${this.nombreTitular}\n por el monto de ${this.monto} fue generado `);
        
    }
    mostrarNumeroDeCuenta(): void {  
        console.log(`el numero de cuenta de la transferencia bancaria del titular ${this.nombreTitular} es ${this.numeroDeCuenta}`);
    }
    
}