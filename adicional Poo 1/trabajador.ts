import { Empleado } from "./empleado";
export class Trabajador extends Empleado {
    private sectorDeTrabajo: string;
    private nroDeLegajo: number;
    private cumplePresentismo: boolean;
    private horasDeTrabajo: number;
    constructor(pSEctorDeTrabajo: string, pNroDeLegajo: number, pCumplePresentismo: boolean,pHorasDeTrabajo: number, pNombre: string, pApellido: string,pSalario:number ) {

        super(pNombre, pApellido,pSalario)
        this.sectorDeTrabajo = pSEctorDeTrabajo;
        this.nroDeLegajo = pNroDeLegajo;
        this.cumplePresentismo = pCumplePresentismo;
        this.horasDeTrabajo = pHorasDeTrabajo;

    }
    public solicitar_dia_libre(): void {
        console.log(`el trabajador ${this.getNombre()} ${this.getApellido()} ha solicitado un dia libre`);
    }
    public horas_trabajadas(): void {
        if (this.horasDeTrabajo == 8) {
            console.log(`el trabajador ${this.getNombre()} ${this.getApellido()} ha trabajado 8 horas`);
        } else if (this.horasDeTrabajo < 8) {
            this.cumplePresentismo = false;
            console.log(`el trabajador ha trabajador ${this.getNombre()} ${this.getApellido()} cumple con presentismo: ${this.cumplePresentismo}`);
        } else if (this.horasDeTrabajo > 8) {
            console.log(`el trabajador ${this.getNombre()} ${this.getApellido()} ha trabajado mas de 8 hs ,le corresponden el pago de horas extras)`);
        }
    }
   
    public getNroDeLegajo(): number {
        return this.nroDeLegajo;
    }
    public getCumplePresentismo(): boolean {
        return this.cumplePresentismo;
    }
    public getSectorDeTrabajo(): string {
        return this.sectorDeTrabajo;
    }
}