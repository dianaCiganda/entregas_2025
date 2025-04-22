export class MetodosDePago{
    protected monto: number;
    protected entidadEmisora: string;  
    protected nombreTitular: string;
    protected cbu_cvu: number;
    constructor(pMonto: number, pEntidadEmisora: string, pNombreTitular: string, pCbu_cvu: number) {
        this.monto = pMonto;
        this.entidadEmisora = pEntidadEmisora;
        this.nombreTitular = pNombreTitular;
        this.cbu_cvu = pCbu_cvu;
    }
    getMonto(): number {
        return this.monto;
    }       
    getEntidadEmisora(): string {
        return this.entidadEmisora;
    }
    getNombreTitular(): string {
        return this.nombreTitular;
    }
    getCbu_cvu(): number {
        return this.cbu_cvu;
    }           
}