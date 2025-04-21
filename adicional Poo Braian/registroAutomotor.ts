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
    //verifica si el archivo existe, si no existe devuelve un array vacío
    //si existe, lee el contenido del archivo y lo convierte a un array de objetos

    const contenido = fs.readFileSync(RUTA_ARCHIVO, 'utf8');
    //utf8 es la codificación de caracteres que se utiliza para leer el archivo
    //readFileSync lee el contenido del archivo de forma sincrónica y devuelve un buffer  

    const objetos = JSON.parse(contenido);
//parse convierte el contenido del archivo a un array de objetos
    //si el contenido no es un JSON válido, lanza una excepción
    //si el contenido es un JSON válido, lo convierte a un array de objetos
    //en este caso, se espera que el contenido del archivo sea un array de objetos
    //cada objeto tiene las propiedades marca, modelo, patente, cilindrada y tipoVehiculo
    return objetos.map((obj:any) => {
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
    //esta función guarda los vehículos en el archivo JSON reciebiendo el array de vehículos y lo convierte a JSON
    //con el segundo parámetro se le da formato al JSON para que sea más legible    
    //el tercer parámetro es el número de espacios para la indentación
    //en este caso se le da 2 espacios para que sea más legible

  }

  public agregarVehiculo(nuevo: Vehiculo): void {
    const existe = this.vehiculos.some(v => v.getPatente() === nuevo.getPatente());
    //some() devuelve true si al menos un elemento del array cumple con la condición dada en la función de prueba proporcionada.
    //en este caso, verifica si existe un vehículo con la misma patente que el nuevo vehículo a agregar
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
      console.log(`Vehículo con patente ${patente} eliminado correctamente.`);
    } else {
      console.log(`No se encontró ningún vehículo con la patente ${patente}.`);
    }
  }

}


