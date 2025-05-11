export class Computadora {
  private procesador?: string;
  private tarjeta_grafica?: string;
  private ram?: number;
  private almacenamiento?: number;
  private sistema_operativo?: string;

  constructor(pProcesador?: string, pTarjeta_grafica?: string, pRam?: number, pAlmacenamiento?: number, pSistema_operativo?: string) {
    this.procesador = pProcesador;
    this.tarjeta_grafica = pTarjeta_grafica;
    this.ram = pRam;
    this.almacenamiento = pAlmacenamiento;
    this.sistema_operativo = pSistema_operativo;
  }

 toString(): string {   
    return `Procesador: ${this.procesador}, Tarjeta Grafica: ${this.tarjeta_grafica}, RAM: ${this.ram}GB, Almacenamiento: ${this.almacenamiento}GB, Sistema Operativo: ${this.sistema_operativo}`;
  }
}