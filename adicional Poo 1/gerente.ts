import { Empleado } from "./empleado";
import { Trabajador } from "./trabajador";
export class Gerente extends Empleado {
    private area: string;
    private nroPersoalAcargo: number;
    private trabajadores: Trabajador[];
    constructor(pArea: string, pNroPersonalAcargo: number, pTrabajadores: Trabajador[], pNombre: string, pApellido: string, pSalario: number) {
        super(pNombre, pApellido, pSalario)
        this.area = pArea;
        this.nroPersoalAcargo = pNroPersonalAcargo;
        this.trabajadores = pTrabajadores;
    }
    public asignarTareas(): void {
        for (let trabajador of this.trabajadores) {
            if (trabajador.getNroDeLegajo() >= 100 && trabajador.getNroDeLegajo() <= 200) {
                console.log(`el trabajador con el numero de legajo: ${trabajador.getNroDeLegajo()} tiene la tarea asignada de realizar inventario`);
            } else if (trabajador.getNroDeLegajo() >= 201 && trabajador.getNroDeLegajo() <= 300) {
                console.log(`el trabajador con numero de legajo: ${trabajador.getNroDeLegajo()} tiene la tarea asignada de realizar auditoria`);
            } else if (trabajador.getNroDeLegajo() >= 301 && trabajador.getNroDeLegajo() <= 400) {
                console.log(`el trabajador con numero de legajo:  ${trabajador.getNroDeLegajo()} tiene la tarea asignada de realizar mantenimiento de redes`);

            }
        }
    }
    public evaluar_desempenio(): void {
        for (let trabajador of this.trabajadores) {
            if (trabajador.getCumplePresentismo() == true) {
                console.log(`el trabajador ${trabajador.getNombre()} ${trabajador.getApellido()} ha cumplido con el presentismo`);
            } else {
                console.log(`el trabajador  ${trabajador.getNombre()} ${trabajador.getApellido()} no ha cumplido con el presentismo`);
            }
        }
    }

} 