import { EmpleadoTemporal } from "./empleadoTemporal";
import { Gerente } from "./gerente";
import { Trabajador } from "./trabajador";

let trabajador1: Trabajador = new Trabajador("sistemas", 100, true, 8, "Juan", "Pérez", 50000);
let trabajador2: Trabajador = new Trabajador("ventas", 200, true, 7, "Ana", "Gómez", 60000);
let trabajador3: Trabajador = new Trabajador("recursos humanos", 300, false, 9, "Luis", "Martínez", 55000);     
let trabajador4: Trabajador = new Trabajador("contabilidad", 400, true, 8, "María", "López", 70000);
let empleadoTemporal: EmpleadoTemporal = new EmpleadoTemporal(new Date(2023,12,31), "sistemas", 500, true, "Pedro", "Sánchez", 6, 40000); 
let empleadoTemporal2: EmpleadoTemporal = new EmpleadoTemporal(new Date(2025,6,25), "ventas", 600, true, "Laura", "Fernández", 8, 45000);
let empleadoTemporal3: EmpleadoTemporal = new EmpleadoTemporal(new Date(2025,3,17), "recursos humanos", 700, true, "Javier", "García", 7, 48000);
let gerente: Gerente = new Gerente("sistemas", 10, [trabajador1, trabajador2, trabajador3, trabajador4], "Carlos", "Ramírez", 90000);


trabajador1.aumentar_salario();
trabajador2.disminuir_salario();
console.log("-------------------------------------");
trabajador3.solicitar_dia_libre();          
console.log("-------------------------------------");
trabajador4.horas_trabajadas();
console.log("-------------------------------------");
gerente.asignarTareas();                
console.log("-------------------------------------");
gerente.evaluar_desempenio();
console.log("-------------------------------------");       
console.log(`el contrato de ${empleadoTemporal.getApellido()} esta a punto de vencer: `,  
empleadoTemporal.verificar_vencimiento_contrato());
console.log(`el contrato de ${empleadoTemporal2.getApellido()} esta a punto de vencer: `,empleadoTemporal2.verificar_vencimiento_contrato());
console.log(`el contrato de ${empleadoTemporal3.getApellido()} esta a punto de vencer: `,empleadoTemporal3.verificar_vencimiento_contrato());



