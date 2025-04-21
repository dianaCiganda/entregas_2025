import { Auto } from "./auto";
import { Camion } from "./camion";
import { Moto } from "./moto";

import * as fs from 'fs';
import { Vehiculo } from './vehiculo';
import path from 'path';

const RUTA_ARCHIVO = path.resolve(__dirname, 'vehiculos.json');

export class RegistroAutomotor {
  private vehiculos: Vehiculo[];

  constructor() {
    this.vehiculos = this.leerVehiculosDesdeArchivo();
  }

  private leerVehiculosDesdeArchivo(): Vehiculo[] {
    if (!fs.existsSync(RUTA_ARCHIVO)) return [];

    const contenido = fs.readFileSync(RUTA_ARCHIVO, 'utf8');
    const objetos = JSON.parse(contenido);

    return objetos.map((obj: any) => {
      if (obj.cilindrada >= 4000) {
        return new Camion(obj.marca, obj.modelo, obj.patente, obj.cilindrada, obj.tieneAcoplado || false);
      } else if (obj.cilindrada <= 500) {
        return new Moto(obj.marca, obj.modelo, obj.patente, obj.cilindrada, obj.esCiclomotor || false);
      } else {
        return new Auto(obj.marca, obj.modelo, obj.patente, obj.cilindrada, obj.cantidadPuertas || 4);
      }
    });
  }

  private guardarVehiculosEnArchivo(): void {
    fs.writeFileSync(RUTA_ARCHIVO, JSON.stringify(this.vehiculos, null, 2));

  }

  public agregarVehiculo(nuevo: Vehiculo): void {
    const existe = this.vehiculos.some(v => v.getPatente() === nuevo.getPatente());
    if (existe) {
      console.log(`El vehículo con patente ${nuevo.getPatente()} ya existe. No se agregará.`);
      return; // ← Esto evita que se agregue
    }

    this.vehiculos.push(nuevo);
    this.guardarVehiculosEnArchivo();
    console.log(`Vehículo con patente ${nuevo.getPatente()} agregado correctamente.`);
  }
  mostrarVehiculos(): void {
    if (this.vehiculos.length === 0) {
      console.log('No hay vehículos registrados.');
    } else {
      console.log('Vehículos registrados:');
      this.vehiculos.forEach(vehiculo => {
        console.log(vehiculo.toString());
      });

    }

  }
  buscarVehiculo(patente: string): Vehiculo | undefined {
    const vehiculo = this.vehiculos.find(v => v.getPatente() === patente);
    if (vehiculo) {
      console.log(`Vehículo encontrado: ${vehiculo.toString()}`);
      return vehiculo;
    } else {
      console.log(`No se encontró ningún vehículo con la patente ${patente}.`);
      return undefined;
    }
  }
  eliminarVehiculo(patente: string): void {
    const indice = this.vehiculos.findIndex(v => v.getPatente() === patente);
    if (indice !== -1) {
      this.vehiculos.splice(indice, 1);
      this.guardarVehiculosEnArchivo();
      console.log(`Vehículo con patente ${patente} eliminado correctamente.`);
    } else {
      console.log(`No se encontró ningún vehículo con la patente ${patente}.`);
    }
  }

}


