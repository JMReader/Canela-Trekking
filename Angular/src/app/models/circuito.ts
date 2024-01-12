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
    public photos: Array<string>
  ) {
    this.id = id;
    this.name = name;
    this.descripcion = descripcion;
    this.preview = preview;
    this.dificultad = dificultad;
    this.desnivel = desnivel;
    this.duracion = duracion;
    this.create_date = create_date;
    this.operable = operable;
    this.distancia = distancia;
    this.region = region;
    this.photos = photos;
  }
}
