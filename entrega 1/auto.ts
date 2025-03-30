import * as rs from "readline-sync";
export class Auto {
    marca: string;
    modelo: string;
    anio: number;
    velocidad: number=0;
   

    /*Crear una clase Auto con atributos (marca, modelo, anio).
    Agregar métodos (constructor(), acelerar(), frenar()).
    Instanciar objetos y probar métodos*/
    constructor(pmarca: string, pmodelo: string, panio: number) {
        this.marca = pmarca;
        this.modelo = pmodelo;
        this.anio = panio;
    }
    acelerar(): void {
        let incremento:number=0;
        //incremento solo se usa dentro del método acelerar() por eso no lo puse en la clase
        while (incremento<=0) {
        incremento = rs.questionInt("Ingrese cuánto desea acelerar (km/h): ");
        }
            this.velocidad += incremento;
        console.log( `ha acelerado y ahora va a ${this.velocidad} km/h`);
       
    }
    frenar():void{
        this.velocidad = 0;
        console.log( "ha frenado y está detenido.");
        
    }

}
