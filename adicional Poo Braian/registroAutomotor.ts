import { Vehiculo } from "./vehiculo";
import * as fs from "fs";

export class RegistroAutomotor {
    protected vehiculos: Vehiculo[] = [];
    private archivo = "vehiculos.json";

    constructor() {
        this.cargar();
    }

    agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
        this.guardar();
    }

    buscarVehiculo(patente: string): Vehiculo | undefined {
        return this.vehiculos.find(v => v.getPatente() === patente);
    }

    eliminarVehiculo(patente: string): void {
        const index = this.vehiculos.findIndex(v => v.getPatente() === patente);
        if (index !== -1) {
            this.vehiculos.splice(index, 1);
            this.guardar();
            console.log("Vehículo eliminado.");
        } else {
            console.log("Vehículo no encontrado.");
        }
    }

    mostrarVehiculos(): void {
        if (this.vehiculos.length === 0) {
            console.log("No hay vehículos registrados.");
        } else {
            this.vehiculos.forEach(v => console.log(v.toString()));
        }
    }

    private guardar(): void {
        const datos = this.vehiculos.map(v => ({
            patente: v.getPatente(),
            marca: v["marca"] // accedo directamente porque es privado
        }));
        fs.writeFileSync(this.archivo, JSON.stringify(datos, null, 2));
    }

    // Método para cargar los vehículos desde el archivo JSON
        private cargar(): void {
            if (fs.existsSync(this.archivo)) {
                const contenido = fs.readFileSync(this.archivo, "utf8");
                if (contenido.trim().length > 0) {
                    const datos = JSON.parse(contenido);
                    this.vehiculos = datos.map((v: any) => new Vehiculo(v.Marca, v.Modelo, v.Patente, v.Clindrada));
                }
            }
        }
        
}


