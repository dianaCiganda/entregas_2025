import { Vehiculo } from "./vehiculo";
export class RegistroAutomotor {
    protected vehiculos: Vehiculo[] = [];


    agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }
    buscarVehiculo(patente: string): Vehiculo | undefined {
        let vehiculo:Vehiculo|undefined = this.vehiculos.find(vehiculo => vehiculo.getPatente() === patente);
        //El método .find() se usa para buscar un elemento dentro de una colección (como un array o string), y devuelve el primero que cumple cierta condición. 
        if (vehiculo) {    
            return vehiculo;
            
        } else {
            return undefined;
        }
    }
    eliminarVehiculo(patente: string): void {
        const index = this.vehiculos.findIndex(vehiculo => vehiculo.getPatente() === patente);
        //El método .findIndex() se usa para encontrar el índice del primer elemento que cumple con la condición dada.
        //Si no se encuentra el elemento, devuelve -1.
        if (index !== -1) {
            console.log(`se ha eliminado el vehiculo ${this.vehiculos[index]}`);
            this.vehiculos.splice(index, 1);
        } else {
            console.log("Vehículo no encontrado.");
        }
    }
    mostrarVehiculos(): void {
        if (this.vehiculos.length === 0) {
            console.log("No hay vehículos registrados.");
        } else {
            this.vehiculos.forEach(vehiculo => {
                console.log(vehiculo.toString());
            });
        }
    }

}


