import { Electrodomestico } from "./electrodomestico";
import { Heladera } from "./heladera";
import { ModuloWifi } from "./moduloWifi";
import { SmartHeladera } from "./smartHeladera";
let conModuloWifi:ModuloWifi=new ModuloWifi(300,444)
let smartHeladera_1:SmartHeladera=new SmartHeladera(conModuloWifi,10,"Samsung", "A456",true);
let smartHeladera_2:SmartHeladera=new SmartHeladera(conModuloWifi,2,"noblex", "estrella",false);
smartHeladera_1.mostrarInfo();
smartHeladera_1.encender();
smartHeladera_1.conectarAiNternet();
smartHeladera_1.cambiarTemperatura(15);
console.log("----------------------------------------");
smartHeladera_2.mostrarInfo();
smartHeladera_2.apagar();
smartHeladera_2.conectarAiNternet();
smartHeladera_2.cambiarTemperatura(2);
