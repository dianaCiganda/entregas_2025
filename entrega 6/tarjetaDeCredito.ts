import { IPago } from "./IPago";

export class TarjetaDeCredito implements IPago {
    private numeroTarjeta: number;
    private entidadEmisora: string;

    private cvu_cbu: number;
    private nombreTitular: string;
    private monto: number;
    constructor(pMonto: number, pEntidadEmisora: string, pNombreTitular: string, pCbu_cvu: number, pNumeroTarjeta: number) {
        this.numeroTarjeta = pNumeroTarjeta;
        this.cvu_cbu = pCbu_cvu;
        this.nombreTitular = pNombreTitular;
        this.monto = pMonto;
        this.entidadEmisora = pEntidadEmisora;
    }

    procesarPago(): void {
        console.log(`el pago de la tarjeta de ${this.entidadEmisora} corresposndiente al CBU: ${this.cvu_cbu}\n del titular ${this.nombreTitular} por el monto de ${this.monto} fue procesado`);

    }
    cancelarPago(): void {
        console.log(`el pago de la tarjeta de ${this.entidadEmisora} corresposndiente al CBU:  ${this.cvu_cbu}\n del titular ${this.nombreTitular} por el monto de ${this.monto} fue cancelado`);

    }
    generarRecibo(): void {
        console.log(`el recibo de la tarjeta de ${this.entidadEmisora} correspondiente al CBU ${this.cvu_cbu}\n del titular ${this.nombreTitular} por el monto de ${this.monto} fue generado`);

    }
    descripcionDeTarjeta(): void {
        console.log(`La tarjeta numero ${this.numeroTarjeta} de ${this.entidadEmisora} corresposndiente al CBU: ${this.cvu_cbu}\n es del titular ${this.nombreTitular} `);
    }
}

