export class Cancion {
   private titulo: string;
   private autor: string;
  constructor(pTtitulo: string, pAutor: string) {
        this.titulo = pTtitulo;
        this.autor = pAutor;
     }

cancion(pTtitulo: string, pAautor: string) {
    this.titulo = "";
    this.autor = "";
  }
  dameTitulo(): string {
    return this.titulo;
  }
  dameAutor(): string {
    return this.autor;
  }
  ponTitulo(pTtitulo: string) {
    this.titulo = pTtitulo;
  }
  ponAutor(pAutor: string) {
    this.autor = pAutor;
  }
}   