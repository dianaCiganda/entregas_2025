import { AspiradoraRobot } from "./AspiradoraRobot";
import { DispositivoInteligente } from "./DispositivoInteligente";
import { LamparaInteligente } from "./LamparaInteligente";     
import { Televisor} from "./Televisor";

let aspiradora:AspiradoraRobot=new AspiradoraRobot("Xiaomi","Mi Robot",true)
let lampara:LamparaInteligente=new LamparaInteligente("Philips","Hue",true)  
let televisor = new Televisor("Samsung","SmartTV");
let dispositivos:DispositivoInteligente[] = [aspiradora, lampara,televisor];

for (let dispositivo of dispositivos) {
    dispositivo.funcionar();
    dispositivo.mostrarInfo();
    dispositivo.conectar();
    dispositivo.desconectar();
}
console.log("--------------------------");
televisor.getControlRemoto().encender();
aspiradora.funcionar();
aspiradora.mostrarInfo();
lampara.conectar();
lampara.desconectar();

