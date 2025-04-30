import { DispositivoInteligente } from "./DispositivoInteligente";
import { ControlRemoto } from "./ControlRemoto";

export class Televisor extends DispositivoInteligente {
    protected control: ControlRemoto;

    constructor(marca: string, modelo: string) {
        super(marca, modelo);
        this.control =new ControlRemoto; 
    }

     funcionar(): void {
        console.log("El televisor está reproduciendo contenido multimedia.");
    }

    getControlRemoto(): ControlRemoto {
        return this.control;
    }
}