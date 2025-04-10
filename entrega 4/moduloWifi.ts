
export class ModuloWifi {
    private velocidadMbps: number;
    private frecuenciaGHz: number;
    
    constructor(pVelocidadMbps: number, pFrecuenciaGHz: number) {
      
        this.velocidadMbps = pVelocidadMbps;
        this.frecuenciaGHz = pFrecuenciaGHz;
    }
    public getVelocidad(): number {
        return this.velocidadMbps;
    }
    public setVelocidad(pVelocidadMbps: number) {
        this.velocidadMbps =pVelocidadMbps;
    }
    public getFrecuencia(): number {
        return this.frecuenciaGHz;
    }
    public setFrecuencia(pFrecuenciaGHz: number) {
        this.velocidadMbps =pFrecuenciaGHz;
    }
    
}