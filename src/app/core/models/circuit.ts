export interface Circuit {
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
