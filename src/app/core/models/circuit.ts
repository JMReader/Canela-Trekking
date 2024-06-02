export interface Circuit {
     _id: string, //Agregado para posibilitar consumo de id desde el json de datos.
     id: string,
     name:string,
     description: string,
     preview: string,
     difficulty: string,
     desnivel: number, // esto hay que cambiarlo a unevenness
     duration: number,
     create_date: Date,
     operable: string,
     distance: number,
     region: string, // esto debe ser enum 
     photos: Array<string> //links directos 
}
