import { RegistroAutomotor } from "./registroAutomotor";
import { Auto } from "./auto";
import { Camion } from "./camion";
import { Moto } from "./moto";


let auto1 = new Auto("Toyota", "Corolla", "ABC123", 1600, 4);
let auto2 = new Auto("Ford", "Fiesta", "DEF456", 1400, 5);
let camion1 = new Camion("Mercedes", "Actros", "GHI789", 5000, true);
let camion2 = new Camion("Volvo", "FH", "JKL012", 6000, false);
let moto1 = new Moto("Yamaha", "YZF-R3", "MNO345", 300, false);
let moto2 = new Moto("Honda", "CBR500R", "PQR678", 500, true);
let registro = new RegistroAutomotor();

console.log(auto1.toString());
registro.agregarVehiculo(auto1);
registro.agregarVehiculo(auto2);
registro.agregarVehiculo(camion1);
registro.agregarVehiculo(camion2);
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(moto2);
registro.mostrarVehiculos();
console.log("------------------------------------");
console.log("buscando vehiculos: ");

console.log(registro.buscarVehiculo("DEF456"));
console.log(registro.buscarVehiculo("XYZ123"));
console.log(registro.buscarVehiculo("ABC123"));
registro.eliminarVehiculo("PQR678");
registro.mostrarVehiculos();
camion1.esConAcoplado();
camion2.esConAcoplado();
moto1.esDosTiempos();
auto1.puertas();



