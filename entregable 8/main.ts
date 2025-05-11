import { Computadora } from "./Computadora";
import { ComputadoraBuilder } from "./ComputadoraBuilder";
let miComputadora=new Computadora("intel core i7","nvidia gtx 1660",16,512,"windows 10");
console.log(miComputadora.toString());
let computadoraFamiliar=new ComputadoraBuilder()
.setProcesador("intel core i5").setRam(8).setTarjetaGrafica("nvidia gtx 1650").build();
console.log(computadoraFamiliar.toString());