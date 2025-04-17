import { Trabajador } from "./trabajador";
export class EmpleadoTemporal extends Trabajador {
    private fecha_fin_contrato: Date;
    constructor(pFechaFinContrato: Date, pSEctorDeTrabajo: string, pNroDeLegajo: number, pCumplePresentismo: boolean, pNombre: string, pApellido: string, pHorasDeTrabajo: number, pSalario: number) {
        super(pSEctorDeTrabajo, pNroDeLegajo, pCumplePresentismo, pHorasDeTrabajo, pNombre, pApellido, pSalario);
        this.fecha_fin_contrato = pFechaFinContrato;
    }
    public verificar_vencimiento_contrato():boolean {
        const fechaActual = new Date(2025, 3, 17); //El mes es base 0 (0 = enero, 4 = mayo)
    
    return this.fecha_fin_contrato.getFullYear() === fechaActual.getFullYear() &&
           this.fecha_fin_contrato.getMonth() === fechaActual.getMonth() &&
           this.fecha_fin_contrato.getDate() === fechaActual.getDate();
           //getFullYear(), getMonth() y getDate() permiten comparar la fecha sin importar la hora.
}
}