import { TarjetaDeCredito } from "./tarjetaDeCredito";
import { TransferenciaBancaria } from "./transferenciaBancaria";
import { IPago } from "./interfaces";
import { MercadoPago } from "./mercadoPago";
const pago1: IPago = new TarjetaDeCredito(1000, "Visa", "Juan Perez", 123456789);
const pago2: IPago = new TransferenciaBancaria(2000, "Banco Santander", "Maria Lopez", 987654321);
const pago3: IPago = new MercadoPago(3000, "Mercado Pago", "Pedro Garcia", 456789123);



pago1.procesarPago();
pago1.cancelarPago();
pago1.generarRecibo();
pago2.procesarPago();
pago2.cancelarPago();
pago2.generarRecibo();
pago3.procesarPago();
pago3.cancelarPago();
pago3.generarRecibo();  
