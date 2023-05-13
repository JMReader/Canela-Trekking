export class Circuito {
    
  constructor(
    public id: string,
    public name: string,
    public descripcion: string,
    public preview: string,
    public dificultad: string,
    public desnivel: number,
    public duracion: number,
    public create_date: Date,
    public operable: boolean,
    public distancia: number,
    public region: string,
    public fotos: Array<string>
  ) {}
}
