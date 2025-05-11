import { Computadora } from "./Computadora";
export class ComputadoraBuilder{
private procesador:string="intel core i5";
private tarjeta_grafica:string= "nvidia gtx 1650";  
private ram:number= 8; 

setProcesador(pProcesador: string): ComputadoraBuilder {
    this.procesador = pProcesador;
    return this;
  }
  setTarjetaGrafica(pTarjetaGrafica: string): ComputadoraBuilder {          
    this.tarjeta_grafica = pTarjetaGrafica;
    return this;
  }
    setRam(pRam: number): ComputadoraBuilder {          
        this.ram = pRam;
        return this;
    }
    build(): Computadora {
        return new Computadora(this.procesador, this.tarjeta_grafica, this.ram,512,"windows 11");
    }

}